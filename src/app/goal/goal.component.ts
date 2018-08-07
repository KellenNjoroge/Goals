import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1,'Watch Wonder woman','ask Ken why he wears so            many rings'),
    new Goal(2,'Buy Mishiri','cook mishiri'),
    new Goal(3,'Get Paisley Dress','rock it'),
    new Goal(4,'Look for Sticker','put on the laptop'),
    new Goal(5,'Buy Omena for Cat','hug my cat'),
    new Goal(6,'Plan for my birthday party','invite people'),
  ]
  completeGoal(isComplete, index){
    if (isComplete){
        this.goals.splice(index,1);
    }
  }
  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  constructor() { }
  ngOnInit() {
  }

}
