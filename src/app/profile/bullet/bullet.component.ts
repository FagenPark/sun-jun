import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {
  @Input() bulletIcon: string;
  @Input() bulletLabel: string;
  @Input() bulletDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
