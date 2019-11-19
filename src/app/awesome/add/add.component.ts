import { Component, OnInit } from '@angular/core';
import {AwesomeService} from '../../services/awesome.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  message = '';

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
  }

  addAwesome(awesomeForm) {
    this.awesomeService.addAwesome(awesomeForm.value).subscribe(() => {
      this.message = 'Tạo Mới Thành Công';
    }, error => {
      this.message = 'Tạo Mới Thất Bại';
    });
  }

}
