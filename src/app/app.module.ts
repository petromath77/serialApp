import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SerialsComponent } from './serials/serials.component';
import { SerialsDetailComponent } from './serials-detail/serials-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SerialsEditComponent } from './serials-edit/serials-edit.component';
import {environment} from '../environments/environment';
import { SerialService } from './shared/serial.service';
import { SerialNewComponent } from './serial-new/serial-new.component';
import { SerialsDeleteComponent } from './serials-delete/serials-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SerialsComponent,
    SerialsDetailComponent,
    SerialsEditComponent,
    SerialNewComponent,
    SerialsDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [SerialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
