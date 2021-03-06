import { NgModule , forwardRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// tslint:disable:max-line-length
import { AuthenticatorComponent } from './components/authenticator/authenticator/authenticator.factory';
import { AuthenticatorComponentCore } from './components/authenticator/authenticator/authenticator.component.core';
import { ConfirmSignInComponent } from './components/authenticator/confirm-sign-in-component/confirm-sign-in.factory';
import { ConfirmSignInComponentCore } from './components/authenticator/confirm-sign-in-component/confirm-sign-in-component.core';
import { ConfirmSignUpComponent } from './components/authenticator/confirm-sign-up-component/confirm-sign-up.factory';
import { ConfirmSignUpComponentCore } from './components/authenticator/confirm-sign-up-component/confirm-sign-up.component.core';
import { SignInComponent } from './components/authenticator/sign-in-component/sign-in.component.factory';
import { SignInComponentCore } from './components/authenticator/sign-in-component/sign-in.component.core';
import { SignUpComponent } from './components/authenticator/sign-up-component/sign-up.factory';
import { SignUpComponentCore } from './components/authenticator/sign-up-component/sign-up.component.core';
import { RequireNewPasswordComponent } from './components/authenticator/require-new-password-component/require-new-password.factory';
import { RequireNewPasswordComponentCore } from './components/authenticator/require-new-password-component/require-new-password.component.core';
import { GreetingComponent } from './components/authenticator/greeting-component/greeting.factory';
import { GreetingComponentCore } from './components/authenticator/greeting-component/greeting.component.core';
import { ForgotPasswordComponent } from './components/authenticator/forgot-password-component/forgot-password.factory';
import { ForgotPasswordComponentCore } from './components/authenticator/forgot-password-component/forgot-password.component.core';
import { DynamicComponentDirective } from './directives/dynamic.component.directive';
import { FormComponent } from './components/common/form.component';
// tslint:enable:max-line-length

const components = [
  AuthenticatorComponent,
  AuthenticatorComponentCore,
  ConfirmSignInComponent,
  ConfirmSignInComponentCore,
  ConfirmSignUpComponent,
  ConfirmSignUpComponentCore,
  SignInComponent,
  SignInComponentCore,
  SignUpComponent,
  SignUpComponentCore,
  RequireNewPasswordComponent,
  RequireNewPasswordComponentCore,
  GreetingComponent,
  GreetingComponentCore,
  ForgotPasswordComponent,
  ForgotPasswordComponentCore,
  FormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DynamicComponentDirective,
    ...components,
  ],
  entryComponents: [
    ...components
  ],
  providers: [ ],
  exports: [
    ...components,
  ]
})
export class AmplifyAngularModule { }
