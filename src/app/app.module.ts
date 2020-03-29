import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatItemComponent } from './stat-item/stat-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';

@NgModule({
  declarations: [AppComponent, StatItemComponent, ModeToggleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
