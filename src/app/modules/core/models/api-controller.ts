import {InjectionToken} from "@angular/core";
export const API_CONTROLLER = new InjectionToken<ApiController>('api.controller');
export interface ApiController {
    POSTS:any;
    USER?:{name?:string,methods?:{
        INFO: string,
        REGISTER: string,
        GET_AVATAR: string,
        GET_USERINFO: string,
        RETRIEVE_PASSWORD: string,
        VALIDATE_AUTH_COOKIE: string,
        GENERATE_AUTH_COOKIE: string,
        GET_CURRENTUSERINFO: string,
        GET_USER_META: string,
        UPDATE_USER_META: string,
        DELETE_USER_META: string,
        UPDATE_USER_META_VARS: string,
        XPROFILE: string,
        XPROFILE_UPDATE: string,
        FB_CONNECT: string,
        POST_COMMENT: string,
    }};
    CORE:any;
}
export const API_CONTROLLER_CONST:ApiController = {
    POSTS: {
        name: 'posts',
        methods: [
            'create_post',
            'update_post',
            'delete_post'
        ]
    },
    USER: {
        name: 'user',
        methods: {
            INFO: 'info',
            REGISTER: 'register',
            GET_AVATAR: 'get_avatar',
            GET_USERINFO: 'get_userinfo',
            RETRIEVE_PASSWORD: 'retrieve_password',
            VALIDATE_AUTH_COOKIE: 'validate_auth_cookie',
            GENERATE_AUTH_COOKIE: 'generate_auth_cookie',
            GET_CURRENTUSERINFO: 'get_currentuserinfo',
            GET_USER_META: 'get_user_meta',
            UPDATE_USER_META: 'update_user_meta',
            DELETE_USER_META: 'delete_user_meta',
            UPDATE_USER_META_VARS: 'update_user_meta_vars',
            XPROFILE: 'xprofile',
            XPROFILE_UPDATE: 'xprofile_update',
            FB_CONNECT: 'fb_connect',
            POST_COMMENT: 'post_comment'
        }
    },
    CORE:{}
};