import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service'
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-usets-post-details',
  templateUrl: './usets-post-details.component.html',
  styleUrls: ['./usets-post-details.component.scss']
})
export class UsetsPostDetailsComponent implements OnInit, OnDestroy  {
public userId:any;
public postDetailsObj: any;
public postDetailsObjById: any;
public p: number = 1;
subscription:Subscription;
postDetail= "Post Detail Page"
  constructor(private route: ActivatedRoute, private userHttpService: UsersService, private navigateRouter: Router) { }

  ngOnInit() {
  	  this.route.queryParamMap.subscribe(params => {
		  this.userId = {...params.keys, ...params};
		  console.log(this.userId.params.uId)
  		let comments = '/comments'
  		this.getPostsByComments(this.userId.params.uId,comments)
  		});
  }

 getPostsByComments(userId,comments){
  	this.subscription = this.userHttpService.getPostsByComments(userId,comments).subscribe(data=>{
  		console.log('data=====>', data);
  		this.postDetailsObj = data;
  	}, err=>{
  		console.log("Get Comments Error", err);
  	})
  }

   getCommentsPostById(data){
     this.subscription = this.userHttpService.getCommentsPostLimit(data).subscribe(data=>{
     this.postDetailsObjById = data;
      console.log(data)
    },err=>{
      console.log('Error on getting on comment limit', err);
    })
  }

  onClickComment(data){
  	console.log("dd")
  	console.log(data)
  	this.getCommentsPostById(data.postId)
  }
  onClickCommentDelete(data){
  	console.log(data);
  	this.callDeletePost(data.id)
  }
  callDeletePost(id){
  	this.subscription = this.userHttpService.deletePost(id).subscribe(data=>{
  		console.log('Post Deleted Sucessfulli', data)
  		alert("Post Deleted Sucess Fully")
  		this.navigateRouter.navigate(['/users']);
  	},err=>{
  		console.log("Error on post Delete");
  	})
  }
  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

}
