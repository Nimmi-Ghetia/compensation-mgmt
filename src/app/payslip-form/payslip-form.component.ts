import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

import {MatSelectModule} from '@angular/material/select';

const employees: Employee[] = [
  { emp_id: 'e001', name: 'Mohil', designation: 'Programmer Analyst', email: 'mohil@argusoft.com', bankAc: '123456' },
  { emp_id: 'e002', name: 'Shailendra', designation: 'Business Analyst', email: 'shailendra@argusoft.com', bankAc: '123457' },
  { emp_id: 'e003', name: 'Manshi', designation: 'Programmer Analyst', email: 'manshi@argusoft.com', bankAc: '123458' },
  { emp_id: 'e004', name: 'Nimmi', designation: 'Programmer Analyst', email: 'nimmi@argusoft.com', bankAc: '123459' },
  { emp_id: 'e005', name: 'Helisha', designation: 'Programmer Analyst', email: 'helisha@argusoft.com', bankAc: '123460' },
  { emp_id: 'e006', name: 'Honey', designation: 'Programmer Analyst', email: 'honey@argusoft.com', bankAc: '123461' }
];

@Component({
  selector: 'app-payslip-form',
  templateUrl: './payslip-form.component.html',
  styleUrls: ['./payslip-form.component.css']
})
export class PayslipFormComponent implements OnInit {

  employees: Employee[];
  @Input() selectedEmployee: Employee;
  @Input() basic: number;
  @Input() da = 0;
  @Input() conAllowance = 1600;
  @Input() medAllowance = 1200;
  @Input() telAllowance = 2000;
  @Input() spAllowance: number;
  @Input() internetAllowance = 250;
  @Input() maintenance = 500;
  @Input() loyalty = 0;
  @Input() accomp = 0;
  @Input() arrears = 0;
  @Input() tds: number;
  @Input() profTax = 200;
  @Input() adv: number;
  @Input() other = 0;
  hra = 0;
  regular = 0;
  pf = 0;
  monthlyGross = 0;
  total = 0;
  monthlyNet = 0;

  constructor() { }

  ngOnInit() {
    this.employees = employees;
  }

  updateValues(): void {
    this.hra = Math.round(0.4 * this.basic);
    this.regular = Math.round(0.2 * this.basic);

    this.monthlyGross = this.basic + this.da + this.hra + this.conAllowance + this.medAllowance
                      + this.telAllowance + this.spAllowance + this.internetAllowance + this.maintenance
                      + this.regular + this.loyalty + this.accomp + this.arrears;

    this.pf = this.basic < 15001 ? (0.12 * this.basic) : 1800;

    this.total = this.tds + this.profTax + this.pf + this.adv + this.other;

    this.monthlyNet = this.monthlyGross - this.total;
  }
}
