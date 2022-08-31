import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('profile/Module').then(m => m.ProfileModule)
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('questionnaire/Module').then(m => m.QuestionnaireModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
