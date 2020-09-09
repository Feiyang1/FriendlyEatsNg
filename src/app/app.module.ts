import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MainComponent } from './main/main.component';
import { StarPipe } from './star.pipe';
import { PricePipe } from './price.pipe';
import { ConsoleComponent } from './console/console.component';
import { ShellComponent } from './shell/shell.component';
import { ConsoleRcComponent } from './console-rc/console-rc.component';
import { MaterialModule } from './material-module';
import { ConsoleRcEditComponent } from './console-rc-edit/console-rc-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MainComponent,
    StarPipe,
    PricePipe,
    ConsoleComponent,
    ShellComponent,
    ConsoleRcComponent,
    ConsoleRcEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [ConsoleRcEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
