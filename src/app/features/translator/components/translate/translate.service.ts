import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.apiLocation;

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  translate(mappingsJson: string, originalJson: string): Observable<any> {
    return this.http.post<any>(`${URL}/translate`, { mappings: mappingsJson, content: originalJson });
  }

}
