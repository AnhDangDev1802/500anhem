import {Model} from "./model";

class Rendered extends Model {
    constructor(public protect?:boolean,
                public rendered?:string) {
        super();
    }

    setObject(obj):any {
        super.setObject(obj);
        this.protect = obj.protected;
    }
}
class Thumbnail extends Model {
    constructor(public alt_text?:string,
                public author?:number,
                public caption?:Rendered,
                public date?:Date,
                public id?:number,
                public link?:string,
                public media_type?:string,
                public mime_type?:string,
                public slug?:string,
                public source_url?:string,
                public title?:Rendered,
                public type?:string) {
        super()
    }
}
export class Post extends Model {
    constructor(public id?:number,
                public title?:Rendered,
                public author?:number,
                public thumbnail?:Thumbnail,
                public categories?:Array<Number>,
                public comment_status?:string,
                public content?:Rendered,
                public date?:Date,
                public date_gmt?:Date,
                public excerpt?:Rendered,
                public featured_media?:number,
                public format?:string,
                public guid?:Rendered,
                public link?:string,
                public meta?:Array<any>,
                public modified?:Date,
                public modified_gmt?:Date,
                public ping_status?:string,
                public slug?:string,
                public status?:string,
                public sticky?:boolean,
                public tags?:Array<number>,
                public template?:string,
                public type?:string) {
        super();
    }

    setObject(obj):any {
        super.setObject(obj);
        if (obj['title']) {
            let title = new Rendered();
            title.setObject(obj['title']);
            this.title = title
        }
        if (obj['content']) {
            let content = new Rendered();
            content.setObject(obj['content']);
            this.content = content
        }
        if (obj['excerpt']) {
            let excerpt = new Rendered();
            excerpt.setObject(obj['excerpt']);
            this.excerpt = excerpt
        }
        if (obj['guid']) {
            let guid = new Rendered();
            guid.setObject(obj['guid']);
            this.guid = guid
        }

        if (obj['_embedded'] && obj['_embedded']['wp:featuredmedia']) {
            let thumbnail = new Thumbnail();
            thumbnail.setObject(obj['_embedded']['wp:featuredmedia'][0]);
            this.thumbnail = thumbnail;
        }
    }

    public static parsePosts(posts:Array<any>):Array<Post> {
        if (posts && posts.length > 0) {
            return posts.map((item:any, index:number)=> {
                let post = new Post();
                post.setObject(item);
                return post;
            })
        }
        return null;
    }
}