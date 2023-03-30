import { HttpBackend, HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const HTTP_NO_INTERCEPTORS = new InjectionToken('HTTP_NO_INTERCEPTORS');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: HTTP_NO_INTERCEPTORS,
      deps: [HttpBackend],
      useFactory: (httpHandler: HttpHandler) => {
        return new HttpClient(httpHandler);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
