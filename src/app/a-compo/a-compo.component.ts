import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-a-compo',
  templateUrl: './a-compo.component.html',
  styleUrls: ['./a-compo.component.css'],
})
export class ACompoComponent implements OnInit {
  data!: any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.gatTableData.subscribe((res) => {
      if (res) {
        this.data = res;
      }
    });
  }
  // @Input() componentName: string;
}
