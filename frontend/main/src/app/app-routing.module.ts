import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TwoComponentsComponent } from './two-components/two-components.component';

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
  {
    path: 'two',  // you can keep it empty if you do not want /home
    component: TwoComponentsComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('profile/Module').then(m => m.ProfileModule),
            outlet: 'child1'
        },
        {
            path: '',
            loadChildren: () => import('questionnaire/Module').then(m => m.QuestionnaireModule),
            outlet: 'child2'
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
