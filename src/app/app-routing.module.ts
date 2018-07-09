import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  //{ path: '',   redirectTo: '/posts', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}