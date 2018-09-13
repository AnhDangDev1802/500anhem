import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule
    ]
})
export class MaterialModule {
}
