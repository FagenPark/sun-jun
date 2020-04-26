import {Component, Input, OnInit} from '@angular/core';
import {zoomFadeInOutAnimation} from '../../animation-config';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [zoomFadeInOutAnimation]
})
export class ProjectComponent implements OnInit {
  @Input() cardUrl: string;
  @Input() projectTitle: string;
  @Input() projectSubTitle: string;
  @Input() projectUrl: string;
  userFocusing = false;

  constructor() { }

  ngOnInit() {
  }

}
