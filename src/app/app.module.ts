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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsoleFcmComponent } from './console-fcm/console-fcm.component';
import { ConsoleFcmNewComponent } from './console-fcm-new/console-fcm-new.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

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
    ConsoleRcEditComponent,
    ConsoleFcmComponent,
    ConsoleFcmNewComponent,
    NotificationsComponent,
    AddReviewComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [ConsoleRcEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
