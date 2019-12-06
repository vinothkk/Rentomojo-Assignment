import { Injectable } from '@angular/core';
import { HttpService } from '../baseFile/http.service'
import { AppConstants } from '../baseFile/appconstants'



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpservice: HttpService) { }

  getAllUserList(){
  	return this.httpservice.httpGetAPI(AppConstants.getUsers,'','')
  }
  getPostById(reqBody){
  	return this.httpservice.httpGetAPI(AppConstants.getPostsById+ reqBody,'','');
  }
  getPostsByComments(reqBody,comments){
  	return this.httpservice.httpGetAPI(AppConstants.getPostsById+ reqBody+ comments,'','');	
  }
  getCommentsPostLimit(reqBody){
    return this.httpservice.httpGetAPI(AppConstants.getCommentsPostLimit+ reqBody,'','');
  }
  getCommentsPostById(reqBody){
    return this.httpservice.httpGetAPI(AppConstants.getCommentsPostById+ reqBody,'','');
  }
  deletePost(reqBody){
     return this.httpservice.httpDeleteAPI(AppConstants.deletePost+reqBody,'','');
  }
}
