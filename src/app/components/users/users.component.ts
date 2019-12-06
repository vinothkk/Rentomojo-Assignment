import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public usersArray:[];
  subscription:Subscription;
  users = 'User Page'

  constructor(private httpUsers : UsersService, private router: Router ) { }

  ngOnInit() {
  	this.getAllUsers();
  }

  getAllUsers(){
  this.subscription = 	this.httpUsers.getAllUserList().subscribe(data=>{
  		this.usersArray = data;
  		console.log(JSON.stringify(this.usersArray));
  	}, err=>{
  		console.log("Something Went wrong in getting all the users", err);
  	})
  }

  onClickUserData(data){
  	console.log(data)
  	this.router.navigate(['/posts'], { queryParams: { keys: `${data.id}`} })
  }
  ngOnDestroy(){
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();

  }
}
