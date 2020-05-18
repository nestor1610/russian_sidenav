import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GradientConfig } from '../../../app-config';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public gradientConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;
  constructor() { 
    this.gradientConfig = GradientConfig.config;
    this.navCollapsed = true;
    this.navCollapsedMob = false;
    this.windowWidth = window.innerWidth;
  }
  
  navMobClick() {
    if (this.windowWidth < 992) {
        this.navCollapsedMob = !this.navCollapsedMob;
    }
  }

  ngOnInit(): void {
  }

}
