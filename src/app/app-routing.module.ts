import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgeGateComponent } from './age-gate/age-gate.component';
import { AskNameComponent } from './ask-name/ask-name.component';
import { AskCpfNumberComponent } from './ask-cpf-number/ask-cpf-number.component';
import { AskRestaurantDetailsComponent } from './ask-restaurant-details/ask-restaurant-details.component';
import { PracticeSpeechComponent } from './practice-speech/practice-speech.component';
import { ReadySpeechComponent } from './ready-speech/ready-speech.component';
import { VoucherDetailsComponent } from './voucher-details/voucher-details.component';
import { RecordRtcComponent } from './record-rtc/record-rtc.component';
import { TestSpeechComponent } from './test-speech/test-speech.component';
import { PlaySpeechComponent } from './play-speech/play-speech.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { InvalidSpeechComponent } from './invalid-speech/invalid-speech.component';

const routes: Routes = [
  { path: 'age-gate', component: AgeGateComponent },
  { path: 'ask-name', component: AskNameComponent },
  { path: 'ask-cpf-number', component: AskCpfNumberComponent },
  { path: 'ask-restaurant-details', component: AskRestaurantDetailsComponent },
  { path: 'play-speech', component: PlaySpeechComponent },
  { path: 'practice-speech', component: PracticeSpeechComponent },
  { path: 'ready-speech', component: ReadySpeechComponent },
  { path: 'voucher-details', component: VoucherDetailsComponent },
  { path: 'invalid-speech', component: InvalidSpeechComponent },
  { path: 'beers-details', component: BeersDetailsComponent },
  { path: 'record', component: RecordRtcComponent },
  { path: 'test-speech', component: TestSpeechComponent },
  { path: '**', component: AgeGateComponent },
  { path: '', redirectTo: '/age-gate', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
