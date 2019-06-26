import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public afAuth: AngularFireAuth) {}

  // Method to sign out
  signOut() {
    this.afAuth.auth.signOut(); 
    // .then(() => {
      // reload page
      // location.reload();
      // this.push(TabsPage);
    // })
  }
}
