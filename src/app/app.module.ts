import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatItemComponent } from './stat-item/stat-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatTitleComponent } from './stat-title/stat-title.component';
import { StatListComponent } from './stat-list/stat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatItemComponent,
    ModeToggleComponent,
    StatTitleComponent,
    StatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
