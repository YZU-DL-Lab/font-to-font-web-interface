import { TextToImgService } from './../text-to-img.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent implements OnInit {

  constructor(
    private tti: TextToImgService
    // public text: FormControl
  ) { }
  image = null;
  text = new FormControl();



  ngOnInit() {
  }

  getImage() {
    const send_data = {
      'text': this.text.value
    };

    this.tti.getImage(send_data).subscribe(
      data => this.image =  'http://140.138.155.230/api/v1/text-to-image/' + data
    );
  }


  reset() {
    this.image = null;
  }

}
