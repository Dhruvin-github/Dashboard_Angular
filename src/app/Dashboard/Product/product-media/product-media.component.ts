import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-media',
  templateUrl: './product-media.component.html',
  styleUrls: ['./product-media.component.scss']
})
export class ProductMediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.imageSelected();
  }

  imageSelected(){
    var file = document.getElementById("imageUpload");
    if(file != null){
      console.log(file);
      return true;
    }
    else{
      return false;
    }
  }

}
