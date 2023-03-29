import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from './translate.service';

@Component({
  selector: 'jsonifier-translator',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
  providers: [TranslateService]
})
export class TranslateComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
  ) { }

  originalJson: string = '';
  formToTranslate: FormGroup = new FormGroup({
    originalJson: new FormControl(this.originalJson, { validators: [Validators.required, Validators.maxLength(2400)], updateOn: 'change' })
  });

  resultantJson: string = '';
  translatedForm!: FormGroup;

  ngOnInit(): void {}

  title = 'Translate your JSONs (:';

  translate() {
    this.translateService.translate(this.originalJson);
  }
  
}
