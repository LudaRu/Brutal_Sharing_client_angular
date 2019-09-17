import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    id: number;
  constructor(private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
      });
  }

    openXl(longContent) {
        this.modalService.open(longContent, { scrollable: true});
    }

    openScrollableContent(longContent) {
        this.modalService.open(longContent, { scrollable: true });
    }

}
