import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tableData!: any;
  private sendData;
  private tableDataSend = new BehaviorSubject<any>('');
  gatTableData = this.tableDataSend.asObservable();
  constructor() {
    this.tableData = [
      {
        personName: 'Person Name 1',
        age: 26,
        address: 'Aurangabad',
        status: 'active',
      },
      {
        personName: 'Person Name 2',
        age: 28,
        address: 'Pune',
        status: 'active',
      },
      {
        personName: 'Person Name 3',
        age: 30,
        address: 'Mumbai',
        status: 'Not active',
      },
      {
        personName: 'Person Name 4',
        age: 23,
        address: 'Nasik',
        status: 'Not active',
      },
    ];

    this.sendDataM(this.tableData);
  }

  sendDataM(datan: any) {
    this.sendData = datan;
    this.tableDataSend.next(this.sendData);
  }
}
