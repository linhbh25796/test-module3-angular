import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../services/awesome.service';
import {Awesome} from '../../interface/awesome';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchText;
  awesomeList: Awesome[];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.awesomeService.getAwesome().subscribe(next => {
      this.awesomeList = next;
      console.log(this.awesomeList);
    });
  }

}
