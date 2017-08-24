import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
    /* styleUrls: ['../../portfolio.css']*/
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

}

export class GalleryComponent { 
 
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }

   images;
 
   constructor(){
      this.images = [
	{"src":"../../"},
	{"url":"http://your_image2_url"},
	{"url":"http://your_image3_url"},
	{"url":"http://your_image4_url"},
	{"url":"http://your_image5_url"},
	{"url":"http://your_image6_url"},
	{"url":"http://your_image7_url"},
	{"url":"http://your_image8_url"},
	{"url":"http://your_image9_url"},
	{"url":"http://your_image10_url"},
	{"url":"http://your_image11_url"},
	{"url":"http://your_image12_url"}
      ];
   }
}