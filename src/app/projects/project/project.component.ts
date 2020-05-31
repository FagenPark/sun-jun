import {Component, Input, OnInit} from '@angular/core';
import {zoomFadeInOutAnimation} from '../../animation-config';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [zoomFadeInOutAnimation]
})
export class ProjectComponent {
  @Input() cardUrl: string;
  @Input() projectTitle: string;
  @Input() projectSubTitle: string;
  @Input() projectUrl: string;
  userFocusing = false;

  constructor() {
  }

  goToProject(event, url) {
    event.stopPropagation();
    window.open(url, '_blank');
  }

  focusHandler(event) {
    event.stopPropagation();
    this.userFocusing = !this.userFocusing;
  }
}
