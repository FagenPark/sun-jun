import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() cardUrl: string;
  @Input() projectTitle: string;
  @Input() projectSubTitle: string;
  @Input() projectUrl: string;
  userHovering = false;

  constructor() { }

  ngOnInit() {
  }

}
