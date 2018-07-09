import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { ActivatedRoute } from '@angular/router';


import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  private firebaseSub: Subscription
  private routerSub: Subscription
  private postID
  post: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { 
    this.routerSub = this.route.params.subscribe(
      (params) => {
        this.postID = params['id']
      }
    );
    this.firebaseSub = db.list('/posts', ref => ref.orderByChild('id').equalTo(this.postID)).valueChanges().subscribe(post => {
      this.post = post[0]
    })
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routerSub.unsubscribe()
    this.firebaseSub.unsubscribe()
  }

}
