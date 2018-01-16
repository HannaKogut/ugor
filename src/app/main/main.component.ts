import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
  	trigger('scrollLeft', [
  		state('show', style({
  		})),
  		state('hide', style({
  			opacity: 0,
  			transform: "translateX(-100%)"
  		})),
  		transition('show => hide', animate('1000ms ease-out')),
  		transition('hide => show', animate('1000ms ease-in'))
  		]),
  	trigger('scrollRight', [
  		state('show', style({
  			opacity: 1,
  			transform: "translateX(0)"
  		})),
  		state('hide', style({
  			opacity: 0,
  			transform: "translateX(100%)"
  		})),
  		transition('show => hide', animate('3000ms ease-out')),
  		transition('hide => show', animate('1000ms ease-in'))
  		])
  ]
})
export class MainComponent implements OnInit {

	state = 'hide';


  constructor(public el: ElementRef) { }


  @HostListener('window:scroll', ['$event'])
  	checkScroll() {
  		const componentPosition = this.el.nativeElement.offsetTop
  		const scrollPosition = window.pageYOffset


  		if (scrollPosition >= componentPosition) {
  			this.state = 'show'
  		} 
  	}  
  		ngOnInit() {
  }
  	}




