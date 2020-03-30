import { Component, OnInit } from '@angular/core';
import * as appConstants from '../app.constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  junProjects = appConstants.junProjects;

  constructor() { }

  ngOnInit() {
  }

}
