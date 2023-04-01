import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'jsonifier-translator',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
  ) { }

  originalJson: string = '';
  resultantJson: string = '';

  mappingKey: string = "";
  mappingValue: string = "";
  mappingJson: string = "";
  mappings: Map<string, string> = new Map();
  mapWithJson: boolean = true;

  ngOnInit(): void {}

  title = 'Translate your JSONs (:';

  toggleMappingsModel() {
    this.mapWithJson = !this.mapWithJson;
  }

  translate() {
    if (this.mapWithJson) {
      this.translateWithJsonMappings();
      return;
    }
    this.translateWithPairMappings();
  }

  private translateWithJsonMappings() {
    if (this.mappingJson && this.mappingJson.trim() && this.originalJson) {
      this.translateService.translate(this.clearJson(this.mappingJson), this.clearJson(this.originalJson))
        .subscribe(result => this.resultantJson = JSON.stringify(result));
    }
  }

  private translateWithPairMappings() {
    if (this.mappings && this.originalJson) {
      this.translateService.translate(Object.fromEntries(this.mappings).toString(), this.clearJson(this.originalJson))
        .subscribe(result => this.resultantJson = JSON.stringify(result));
    }
  }

  private clearJson(json: string) {
    return json.replaceAll('\n', '')
      .replaceAll('\t', '')
      .replaceAll('\r', '');
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
