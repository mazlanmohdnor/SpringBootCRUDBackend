import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  wishtext = "";
  wishes = [];
  wishcount = 0;

  constructor(public afd: AngularFireDatabase) {}

  ngOnInit() {
    this.afd.database.ref("wishlist").on("value", snapshot => {
      this.wishes = this.snapshotToArray(snapshot);
      // console.log(this.wishes);
    });
  }

  snapshotToArray(snapshot) {
    const returnArr = [];

    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      const itemkey = childSnapshot.key;
      returnArr.push({
        key: itemkey,
        item: item
      });
    });

    return returnArr;
  }

  addWish() {
    this.wishes.push(this.wishtext);
    this.afd.database.ref("wishlist").push(this.wishtext);
    this.wishtext = "";
    this.wishcount = this.wishes.length;
  }
  remove(i) {
    // this.wishes.splice(i, 1);
    console.log(i);
    this.afd.database.ref(`wishlist/${i}`).remove();
    this.wishcount = this.wishes.length;
  }
}
