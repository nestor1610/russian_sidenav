import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { SidenavComponent } from '../../components/shared/sidenav/sidenav.component';
import { LmenuComponent } from '../../components/shared/lmenu/lmenu.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { NavigationComponent } from '../../components/shared/navigation/navigation.component';
import { NavContentComponent } from '../../components/shared/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from '../../components/shared/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from '../../components/shared/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from '../../components/shared/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from '../../components/shared/shared.module';
import { NavBarComponent } from '../../components/shared/nav-bar/nav-bar.component';
import { NavLeftComponent } from '../../components/shared/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from '../../components/shared/nav-bar/nav-left/nav-search/nav-search.component';
import { ConfigurationComponent } from '../../components/shared/configuration/configuration.component';
// import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };

import { NavigationItem } from '../../components/shared/navigation/navigation';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidenavComponent,
    LmenuComponent,
    FooterComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    ConfigurationComponent,
    // SharedModule,
    // PerfectScrollbarModule,
    // PerfectScrollbarComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainLayoutRoutingModule,
    SharedModule,
    // PerfectScrollbarModule,
  ],
  providers: [NavigationItem],
  // providers: [
  //   {
  //     provide: PERFECT_SCROLLBAR_CONFIG,
  //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  //   },]
})
export class MainLayoutModule { }
