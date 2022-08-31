import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export const QUESTIONNAIRE_ROUTES: Routes = [
  {
   path: '',
   component: QuestionComponent
  }
]

@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(QUESTIONNAIRE_ROUTES)
  ]
})
export class QuestionnaireModule { }
