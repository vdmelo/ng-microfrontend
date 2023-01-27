import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
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
    MatListModule,
    MatIconModule,
    RouterModule.forChild(QUESTIONNAIRE_ROUTES)
  ]
})
export class QuestionnaireModule { }
