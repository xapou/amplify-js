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

  import { Injectable, Optional, Inject } from '@angular/core';
  import { Subject } from 'rxjs/Subject';
  import { Observable } from 'rxjs/Observable';
  import Amplify, { Logger, I18n } from '@aws-amplify/core';
  import { AuthState } from './auth.state';
  import { authDecorator } from './auth.decorator';
  
  @Injectable()
  export class AmplifyService {
    private _auth: any;
    private _analytics: any;
    private _api: any;
    private _cache: any;
    private _pubsub: any;
    private _logger: any;
    private _i18n: any;
    private _authState = new Subject<AuthState>();
    authStateChange$ = this._authState.asObservable();


    constructor (
      @Inject('modules') 
      @Optional()
      private modules: any = {}) {

      const source = modules || Amplify;

      authDecorator(this._authState, source.Auth);

      this._auth = source.Auth;
      this._analytics = source.Analytics;
      this._api = source.API;
      this._cache = source.Cache;
      this._pubsub = source.PubSub;

      // i18n and logger instantiated by default (do not change)
      this._i18n = I18n;
      this._logger = Logger;
    }

    auth(): any { return this._auth; }
    analytics(): any { return this._analytics; }
    api(): any { return this._api; }
    cache(): any { return this._cache; }
    pubsub(): any { return this._pubsub; }
    logger(name, level?): Logger { return new this._logger(name, level); }
    i18n(): any { return this._i18n; }

    authState() { return this._authState; }
    setAuthState(state: AuthState) { this._authState.next(state); }
  }
