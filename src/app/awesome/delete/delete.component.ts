import {Component, OnInit} from '@angular/core';
import {Awesome} from '../../interface/awesome';
import {Subscription} from 'rxjs';
import {AwesomeService} from '../../services/awesome.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  awesome: Awesome;
  subcription: Subscription;
  message: string;

  constructor(private awesomeService: AwesomeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getDetailById(id);
    });
  }

  getDetailById(id) {
    this.awesomeService.awesomeDetail(id).subscribe(next => {
      this.awesome = next;
    }, error => {
      console.log(error);
    });
  }

  delete(awesomeForm) {
    console.log(this.awesome.id);
    this.awesomeService.deleteAwesome(this.awesome.id).subscribe(next => {
      this.message = 'Đã xóa ';
    }, error => {
      this.message = 'Sửa không được thì thôi';
    });
  }
}
