import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
    /* styleUrls: ['../../portfolio.css']*/
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
       @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }

   images;
  constructor() {    
      this.images = [
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'}

      ]; 
  }

  ngOnInit() {
  }

}
/*
export class GalleryComponent { 
 
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }

   images;
 
   constructor(){
      this.images = [
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'},
	{ img:'../../assets/'}

      ];
   }
}*/