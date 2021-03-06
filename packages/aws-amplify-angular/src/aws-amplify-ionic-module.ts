// tslint:disable
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
// tslint:enable

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmplifyService } from './providers/amplify.service';
// tslint:disable:max-line-length
import { AuthenticatorIonicComponent } from './components/authenticator/authenticator/authenticator.component.ionic';
import { ConfirmSignInComponentIonic } from './components/authenticator/confirm-sign-in-component/confirm-sign-in-component.ionic';
import { ConfirmSignUpComponentIonic } from './components/authenticator/confirm-sign-up-component/confirm-sign-up.component.ionic';
import { ForgotPasswordComponentIonic } from './components/authenticator/forgot-password-component/forgot-password.component.ionic';
import { GreetingComponentIonic } from './components/authenticator/greeting-component/greeting.component.ionic';
import { SignInComponentIonic } from './components/authenticator/sign-in-component/sign-in.component.ionic';
import { SignUpComponentIonic } from './components/authenticator/sign-up-component/sign-up.component.ionic';
import { RequireNewPasswordComponentIonic } from './components/authenticator/require-new-password-component/require-new-password.component.ionic';
// tslint:enable:max-line-length

const components = [
  AuthenticatorIonicComponent,
  ConfirmSignInComponentIonic,
  ConfirmSignUpComponentIonic,
  ForgotPasswordComponentIonic,
  GreetingComponentIonic,
  SignInComponentIonic,
  SignUpComponentIonic,
  RequireNewPasswordComponentIonic
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ...components
  ],
  providers: [AmplifyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ...components
  ]
})
export class AmplifyIonicModule { }
