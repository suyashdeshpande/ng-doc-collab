import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  mobileView = false;
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;


  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset])
      .subscribe((result: BreakpointState) => {
        this.mobileView = result.matches;
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
