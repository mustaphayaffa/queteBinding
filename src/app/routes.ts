import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UsernameComponent } from './username/username.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'username', component: UsernameComponent },
  { path: '', component: UsernameComponent },
];

export { ROUTES };