import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('AnimateList', [

 
  transition(':enter', [
    
 
    style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
    animate('0.2s 600ms ease-in')
  ]),


  transition(':leave', [
    animate('1.2s ease-out', 
    style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3})
    
  ])


    ]),


    trigger('changeBtnColor', [
    state('state1', style({
      backgroundColor: 'yellow',

    })),
    state('state2', style({
      backgroundColor: 'pink',
      border:'1px solid #18ab29',
      height: '100px',
      width: '200px'
    })),
    transition('state1=>state2', animate('1000ms')),
    transition('state2=>state1', animate('1000ms'))
  ]),

   ]
 

})

export class AppComponent {
  title = 'Animations in Angular';
  current = 'state1';

		changeState() {
		  this.current = this.current === 'state1' ? 'state2' : 'state1';
		}

		mylist = [];
  addElement() {
   this.mylist.push('This list is animated');
   }
   
   removeElement() {
			this.mylist.length -= 1;
			  }
}









