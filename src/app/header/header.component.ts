import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>
  authenticated: boolean = false;

  constructor(public af: AngularFireAuth) { 
   /* 
    this.af.authState.subscribe(
      (auth) => {
        if(auth != null){
          this.user = af.authState;
          this.authenticated = true;
        }
      }
    );
    */
  }

  ngOnInit() {
  }
/* for authentification
  login(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
  }
  logout(){
    this.af.auth.signOut();
    this.authenticated = false;
  }
*/
}
