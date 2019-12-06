import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component'
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { UsetsPostDetailsComponent } from './components/usets-post-details/usets-post-details.component';

const routes: Routes = [
{		path:"users", 
	component: UsersComponent
},
{		path:"posts", 
	component: UsersPostsComponent
},
{		path:"postsDetails", 
	component: UsetsPostDetailsComponent
},
{ path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
	