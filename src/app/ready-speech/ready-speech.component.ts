import { Component, OnInit, OnDestroy } from '@angular/core';

import { GoogleSpeechApiService } from '../services/google-speech-api.service';
import { Subject } from 'rxjs';
import { AudioRecordingService } from '../services/audio-recording.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogModalService } from '../services/dialog-modal.service';

@Component({
  selector: 'app-ready-speech',
  templateUrl: './ready-speech.component.html',
  styleUrls: ['./ready-speech.component.css']
})
export class ReadySpeechComponent implements OnInit, OnDestroy {

  isRecording = false;
  recordedTime: any;
  blobUrl: any;
  isProcessing = false;

  apiResponse: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private modalService: DialogModalService,
    private googleSpeechApiService: GoogleSpeechApiService,
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute, private router: Router
  ) {

    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      console.log(this.blobUrl);
      this.processRecordedFileData(data);
    });
  }


  ngOnInit(): void {

  }

  // processRecordedFile(): void {
  //   this.googleSpeechApiService.postSpeechRecognision({
  //     config: {
  //       encoding: 'FLAC',
  //       languageCode: 'en-US'
  //     },
  //     audio: {
  //       uri: 'gs://cloud-samples-tests/speech/brooklyn.flac'
  //     }
  //   }).subscribe((response: any) => {
  //     console.log(response);
  //     this.apiResponse = response;
  //   });
  // }

  processRecordedFileData(data: any): void {
    this.isProcessing = true;
    if (data != null) {
      console.log(data.blob);
      console.log(data.title);

      new Response(data.blob).arrayBuffer()
        .then((byteArray) => {
          this.googleSpeechApiService.postSpeechRecognision({
            config: {
              languageCode: 'de-DE',
              audio_channel_count: 2,
            },
            audio: {
              content: this.arrayBufferToBase64(byteArray)
            }
          }).subscribe((response: any) => {
            setTimeout(() => {
              console.log(response);
              if (response !== undefined && response.results != null && response.results.length > 0) {
                const responseWord = response.results[0].alternatives[0].transcript;

                if (responseWord === 'eisenbahn' || responseWord === 'Eisenbahn') {
                  this.isProcessing = false;
                  this.apiResponse = 'Congrats!!! You are eligible for the voucher!!!';
                  this.router.navigate(['voucher-details']);
                }
                else {
                  this.isProcessing = false;
                  //this.modalService.open('invalid-word');
                  this.router.navigate(['invalid-speech']);
                  this.apiResponse = 'Recorded word: ' + responseWord;
                }
              }
              else {
                this.isProcessing = false;
                //this.modalService.open('invalid-word');
                this.apiResponse = 'Please try again!!!';
              }
            }, 1000);

          });
        });
    }
  }

  arrayBufferToBase64(buffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  startRecording(event: any): void {
    if (event) {
      event.preventDefault();
    }
    console.log("start recording");
    //event.stopPropagation();
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording(): void {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording(event: any): void {
    console.log("stop recording");
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData(): void {
    console.log("clear recording");
    this.blobUrl = null;
    this.apiResponse = '';
  }

  ngOnDestroy(): void {
    this.abortRecording();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
