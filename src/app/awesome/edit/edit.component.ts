import {Component, OnInit} from '@angular/core';
import {Awesome} from '../../interface/awesome';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AwesomeService} from '../../services/awesome.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  awesome: Awesome;
  subcription: Subscription;
  message: string;

  constructor(private awesomeService: AwesomeService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.awesomeService.awesomeDetail(id).subscribe(next => {
        this.awesome = next;
      }, error => {
        console.log(error);
      });
    });
  }

  edit(awesomeForm) {
    console.log(this.awesome.id);
    this.awesomeService.editAwesome(this.awesome.id, awesomeForm.value).subscribe(next => {
      this.message = 'Đã sửa';
    }, error => {
      this.message = 'Sửa không được thì thôi';
    });
  }


}
