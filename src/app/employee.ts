export class Employee {
  emp_id: string;
  name: string;
  designation: string;
  email: string;
  bankAc: string;
  amount: Amounts;
}

export interface Amounts {
  [key: string]: number;
  basic: number;
  da: number;
  conAllowance: number;
  medAllowance: number;
  telAllowance: number;
  spAllowance: number;
  internetAllowance: number;
  maintenance: number;
  loyalty: number;
  accomp: number;
  arrears: number;
  tds: number;
  profTax: number;
  adv: number;
  other: number;
  hra: number;
  regular: number;
  pf: number;
  monthlyGross: number;
  total: number;
  monthlyNet: number;
}
