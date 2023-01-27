import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

export const PROFILE_ROUTES: Routes = [
 {
  path: '',
  component: SecurityProfileComponent
 }
]

@NgModule({
  declarations: [
    SecurityProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROFILE_ROUTES),
    MatTableModule
  ]
})
export class ProfileModule { }
