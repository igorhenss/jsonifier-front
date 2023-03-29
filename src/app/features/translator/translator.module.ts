import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HostComponent } from './components/host/host.component';
import { TranslateComponent } from './components/translate/translate.component';
import { TranslatorRoutingModule } from './translator-routing.module';

@NgModule({
  declarations: [
    HostComponent,
    TranslateComponent,
  ],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    TranslatorRoutingModule,
  ]
})
export class TranslatorModule {}
