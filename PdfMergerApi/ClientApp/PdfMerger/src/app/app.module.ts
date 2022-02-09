import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfMergeFormComponent } from './pdfTools/pdf-merge-form/pdf-merge-form.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PdfSplitFormComponent } from './pdfTools/pdf-split-form/pdf-split-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfMergeFormComponent,
    HomePageComponent,
    NavbarComponent,
    PdfSplitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
