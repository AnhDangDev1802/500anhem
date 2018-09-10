import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material";

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatCardModule,
        MatSnackBarModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatCardModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {
}
