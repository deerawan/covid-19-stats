import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatItemComponent } from './stat-item/stat-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { StatTitleComponent } from './stat-title/stat-title.component';

@NgModule({
  declarations: [
    AppComponent,
    StatItemComponent,
    ModeToggleComponent,
    StatTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
