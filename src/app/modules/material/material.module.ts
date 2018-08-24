import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {
}
