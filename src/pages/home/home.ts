import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private scrumers:string[];

  constructor(public navCtrl: NavController) {

    this.scrumers = ['Bookie','Chris','Shawn', 'Kevin', 'Sofia','Lisa',
                    'Paula', 'Chad','Paul', 'Ryan'] 
  }
  randomList(){
    this.scrumers = this.shuffle(this.scrumers);

  }

  shuffle(array)  {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}
