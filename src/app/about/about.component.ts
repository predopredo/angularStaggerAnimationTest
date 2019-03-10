import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = this.route.snapshot.params.name
  constructor(private route: ActivatedRoute) { }
  

  ngOnInit() {
  }

}
