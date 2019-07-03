import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import {AppComponent} from './app.component';
import {DocumentListComponent} from './components/document-list/document-list.component';
import {DocumentComponent} from './components/document/document.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';
import {LayoutModule} from '@angular/cdk/layout';

const config: SocketIoConfig = {url: 'http://localhost:4444', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    LayoutModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
