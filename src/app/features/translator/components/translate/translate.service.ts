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

  translate(originalJson: string): Observable<TreeNode> {
    console.log(`${URL}/translate`);
    return this.http.post<TreeNode>(`${URL}/translate`, { mappings: {}, content: originalJson });
  }

}
