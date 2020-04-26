import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent implements OnInit {
  @Input() whoIs: string;
  @Input() aboutJun: string;
  @Input() cvLink: string;
  @Input() knowMore: string;

  constructor() { }

  ngOnInit() {
  }

}
