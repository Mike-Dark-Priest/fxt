import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import awsconfig from '../aws-exports';
import { environment } from '../environments/environment.prod'; 

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: environment.userPoolClientId,
      userPoolId: environment.userPoolId,
      loginWith: { // Optional
        oauth: {
          domain: 'abcdefghij1234567890-29051e27.auth.eu-north-1.amazoncognito.com',
          scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
          redirectSignIn: ['http://localhost:4000/','https://example.com/'],
          redirectSignOut: ['http://localhost:4000/','https://example.com/'],
          responseType: 'code',
        }
        // username: 'true', 
        // email: 'false', // Optional
        // phone: 'false', // Optional
      }
    }
  }
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
