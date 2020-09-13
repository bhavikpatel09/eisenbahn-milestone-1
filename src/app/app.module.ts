import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgeGateComponent } from './age-gate/age-gate.component';
import { AskNameComponent } from './ask-name/ask-name.component';
import { AskRestaurantDetailsComponent } from './ask-restaurant-details/ask-restaurant-details.component';
import { AskCpfNumberComponent } from './ask-cpf-number/ask-cpf-number.component';
import { PracticeSpeechComponent } from './practice-speech/practice-speech.component';
import { ReadySpeechComponent } from './ready-speech/ready-speech.component';
import { VoucherDetailsComponent } from './voucher-details/voucher-details.component';

import { HttpClientModule } from '@angular/common/http';
import { RecordRtcComponent } from './record-rtc/record-rtc.component';
import { TestSpeechComponent } from './test-speech/test-speech.component';
import { PlaySpeechComponent } from './play-speech/play-speech.component';
import { LongPressDirective } from './directives/long-press.directive';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvalidSpeechComponent } from './invalid-speech/invalid-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    AgeGateComponent,
    AskNameComponent,
    AskRestaurantDetailsComponent,
    AskCpfNumberComponent,
    PracticeSpeechComponent,
    ReadySpeechComponent,
    VoucherDetailsComponent,
    RecordRtcComponent,
    TestSpeechComponent,
    PlaySpeechComponent,
    LongPressDirective,
    BeersDetailsComponent,
    DialogModalComponent,
    InvalidSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
