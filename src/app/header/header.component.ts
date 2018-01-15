import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('logoAnimation',[
      state('active',style({
        transform: 'scale(1)'
      })),
      state('passive',style({
        transform: 'scale(1.2)'
      }))
  ])]
})
export class HeaderComponent implements OnInit {
  logo: string = "Угорська"
  slogan: string = 'Слоган сасний і прикольний і доладний, маленькая, сука, мишка'

  constructor() { 
  		
  }

  ngOnInit() {
  }

}