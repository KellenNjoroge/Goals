import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Wonder woman', ' ask Ken why he wears so many rings', new Date(2018, 7 , 7)),
    new Goal(2, 'Buy Mishiri', 'cook mishiri', new Date(2018, 7 , 7)),
    new Goal(3, 'Get Paisley Dress', ' rock it', new Date(2018, 7, 7)),
    new Goal(4, 'Look for Sticker', 'put on the laptop', new Date(2018, 7 , 7 )),
    new Goal(5, ' Buy Omena for Cat', 'hug my cat', new Date(2018, 7, 7)),
    new Goal(6, 'Plan for my birthday party', 'invite people', new Date(2018, 7, 7)),
  ];
  deleteGoal(isComplete, index) {
  if (isComplete) {
    let toDelete = confirm (`Are you sure you want to delete ${this.goals.[index].name}`);
    if (toDelete) {
      this.goals.splice(index, 1);
      }
    }
  }

  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  constructor() { }
  ngOnInit() {
  }

}
