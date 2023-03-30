import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

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
    DividerModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TableModule,
    TranslatorRoutingModule,
  ]
})
export class TranslatorModule {}
