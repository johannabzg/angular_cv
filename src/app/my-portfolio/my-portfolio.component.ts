import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
    /* styleUrls: ['../../portfolio.css']*/
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
    
    image = IMAGE;
    
  constructor() { }

  ngOnInit() {
  }

}

export class MesImages {
    id: number;
    name: string;
    
    
}

const IMAGE: MesImages[] = [
    { id: 1, name: 'Mr. Nice' },  
    { id: 2, name: 'Mr. Nice' },
    { id: 3, name: 'Mr. Nice' },
    { id: 4, name: 'Mr. Nice' },
    { id: 5, name: 'Mr. Nice' },
];