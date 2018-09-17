import {NgModule} from '@angular/core';
import {PostCreateComponent} from './post-create/post-create.component';
import {PostRoutingModule} from "./post-routing.module";
import { UploadThumbComponent } from './components/upload-thumb/upload-thumb.component';
import {CoreModule} from "../core/core.module";
import {UploadTitleComponent} from "./components/upload-title/upload-title.component";
import {UploadExcerptComponent} from "./components/upload-excerpt/upload-excerpt.component";
import {UploadContentComponent} from "./components/upload-content/upload-content.component";
import {EditorModule} from "@tinymce/tinymce-angular";
import {PostService} from "./services/post.service";

@NgModule({
    imports: [
        CoreModule,
        PostRoutingModule,
        EditorModule
    ],
    exports: [],
    declarations: [
        PostCreateComponent,
        UploadThumbComponent,
        UploadTitleComponent,
        UploadExcerptComponent,
        UploadContentComponent,
    ],
    providers: [
        PostService
    ],
})
export class PostModule {
}
