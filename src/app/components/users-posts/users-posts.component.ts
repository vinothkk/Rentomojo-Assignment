import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service'
import { Subscription }   from 'rxjs';
@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss']
})
export class UsersPostsComponent implements OnInit, OnDestroy {
  public postId
  public tilte = '' ;
  public stating = 0;
  public ending = 10
  public userId:any;
  postsDataObj :any;
  postPage = "Post Page"

  subscription:Subscription;
  constructor(private route: ActivatedRoute, private userHttpService: UsersService, private routerNavigate: Router ) { }

  ngOnInit() {
	  this.route.queryParamMap.subscribe(params => {
		  this.postId = {...params.keys, ...params};
		  console.log(this.postId.params.keys)
  		});
	  this.getPostsDataById(this.postId.params.keys)
  }
  getPostsDataById(id){
  	this.userHttpService.getPostById(id).subscribe(data=>{
  		console.log(data)
  		this.tilte = data;
      this.userId = data.userId
  		let comments = '/comments'
      this.getCommentsPostById(data.userId);
  	}, err=>{
  		console.log('Getting post Error', err)
  	})
  }

  getCommentsPostLimit(data){
    this.subscription = this.userHttpService.getCommentsPostLimit(data).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log('Error on getting on comment limit', err);
    })
  }
   getCommentsPostById(data){
     this.subscription = this.userHttpService.getCommentsPostLimit(data).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log('Error on getting on comment limit', err);
    })
  }
  onClickPostDetails(){
     if(this.userId.length===0) return alert("userId Not Found please check interner connection")

    this.routerNavigate.navigate(['/postsDetails'], { queryParams: { uId: `${this.userId}`} })
  }
   ngOnDestroy(){
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();

  }


}
