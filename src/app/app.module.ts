import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormsModule } from '@angular/forms';

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
    MaterialModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [ConsoleRcEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
