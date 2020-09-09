import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
