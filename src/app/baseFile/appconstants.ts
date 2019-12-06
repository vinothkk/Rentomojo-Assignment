export class AppConstants {
    public static BASE_URLS_MOVIES = 'http://www.omdbapi.com/?s=';
    public static BASE_URLS_MOVIES_KEY = '&apikey=a4b16c5e';
    public static google_geo_coding_api_key = '&key=AIzaSyCOvFwkVvSqfkOTHcMYGeyraw8DFxUK2R4';
    public static google_geo_coding_api_path = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

    public static secret = `i_have_some_small_master_secret_live_pin`;

    public static post_Web_URl = 'https://jsonplaceholder.typicode.com';
    public static getUsers = `${AppConstants.post_Web_URl}/users`;
    public static getPostsById = `${AppConstants.post_Web_URl}/posts/`;
    public static getPostsByComments = `${AppConstants.post_Web_URl}/posts/`;
    public static getCommentsPostById = `${AppConstants.post_Web_URl}/comments?postId=`;
    public static getCommentsPostLimit = `${AppConstants.post_Web_URl}/posts?userId=`;
    public static deletePost = `${AppConstants.post_Web_URl}/posts/`;
    constructor() { }
}



