import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BackgroundColorChangerComponent } from './background-color-changer/background-color-changer.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserDetailsComponent,
    BackgroundColorChangerComponent
  ],
  imports: [CommonModule]
})
export class ProfileModule {}
