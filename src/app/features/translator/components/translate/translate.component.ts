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

  mappingKey: string = "";
  mappingValue: string = "";
  mappings: Map<string, string> = new Map();

  ngOnInit(): void {}

  title = 'Translate your JSONs (:';

  translate() {
    this.translateService.translate(this.originalJson);
  }

  addCurrentMapping() {
    if (this.mappingsToAddAreValid()) {
      this.addToMappings(this.mappingKey.trim(), this.mappingValue.trim());
    }
  }

  private mappingsToAddAreValid(): boolean {
    return Boolean(
      this.mappingKey && this.mappingValue
      && this.mappingKey.trim() && this.mappingValue.trim()
    );
  }

  private addToMappings(key: string, value: string) {
    this.mappings.set(key, value);
    this.resetMappingFields();
  }

  private resetMappingFields() {
    this.mappingKey = "";
    this.mappingValue = "";
  }

  removeMappingForKey(key: string) {
    this.mappings.delete(key);
  }
  
}
