import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './components/host/host.component';
import { TranslateComponent } from './components/translate/translate.component';

const routes: Routes = [
  {
    path: '',
    component: HostComponent,
    children: [
      { path: '', redirectTo: 'jsonify', pathMatch: 'full' },
      { path: 'translate', component: TranslateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslatorRoutingModule {}
