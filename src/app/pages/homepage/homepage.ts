import {Component, HostBinding, NgModule, OnInit} from '@angular/core';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {MatButtonModule} from '@angular/material/button';
import {FooterModule} from '../../shared/footer/footer';
import {RouterModule, Routes} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';
import {NavigationFocusModule} from '../../shared/navigation-focus/navigation-focus';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {GuideItems} from '../../shared/guide-items/guide-items';
import {CommonModule} from '@angular/common';
import {CarouselModule} from '../../shared/carousel/carousel-module';
import {Support} from '../../shared/support/support';
import {DocItem, DOCS} from '../../shared/documentation-items/documentation-items';

const TOP_COMPONENTS = ['datepicker', 'input', 'slide-toggle', 'slider', 'button'];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor(public _componentPageTitle: ComponentPageTitle, public guideItems: GuideItems) {
  }

  ngOnInit(): void {
    this._componentPageTitle.title = '';
    this._componentPageTitle.titleCn = '';
  }

  getTopComponents(): DocItem[] {
    // tslint:disable-next-line:no-non-null-assertion
    return TOP_COMPONENTS.map(id => DOCS['components']!!.find(it => it.id === id)!!);
  }
}

const routes: Routes = [{path: '', component: Homepage}];

@NgModule({
  imports: [SvgViewerModule,
    MatButtonModule,
    FooterModule,
    RouterModule.forChild(routes),
    NavigationFocusModule, MatIconModule, MatDividerModule, MatCardModule, CommonModule,
    CarouselModule],
  exports: [Homepage],
  declarations: [Homepage, Support],
  providers: [GuideItems]
})
export class HomepageModule {
}
