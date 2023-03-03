import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brief-info',
  templateUrl: './brief-info.component.html',
  styleUrls: ['./brief-info.component.scss'],
})
export class BriefInfoComponent implements OnInit {
  @Input() item: any = {};
  @Input() redirectLink: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectTo(item: any) {
    this.router.navigate([this.redirectLink, item.id], {});
    // this.router.navigate([this.redirectLink], {
    //   queryParams: {
    //     id: item.id,
    //   },
    // });
  }
}
