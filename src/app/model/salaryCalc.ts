export class SalaryCalc {
  baseSalary = 998;
  totalWorkingHours = 220;
  nightWorkHours: number;
  overtime50Hours: number;
  holidayHours: number;
  commuterBenefits: number;
  foodBenefits: number;

  constructor(salaryCalc?: Partial<SalaryCalc>) {
    Object.assign(this, salaryCalc || {});
  }

  get hourlyRate() {
    if (!this.baseSalary || !this.totalWorkingHours) {
      return NaN;
    }
    return (100 * this.baseSalary) / this.totalWorkingHours / 100;
  }

  get total() {
    if (!this.baseSalary) {
      return NaN;
    }

    // night pay is %20 more, but its not overtime as its also included in base salary. So the x should be 0.2 and not 1.2
    const nightPay = this.nightWorkHours
      ? this.nightWorkHours * this.hourlyRate * 0.2
      : 0;

    const overtime50Pay = this.overtime50Hours
      ? this.overtime50Hours * this._calculateOvertimeRate(this.hourlyRate, 50)
      : 0;

    const holidayPay = this.holidayHours
      ? this.holidayHours * this.hourlyRate
      : 0;

    const foodBenefits = this.foodBenefits || 0;

    const commuterBenefits = this.commuterBenefits || 0;

    return +(
      this.baseSalary +
      nightPay +
      overtime50Pay +
      holidayPay +
      foodBenefits +
      commuterBenefits
    ).toFixed(2);
  }

  private _calculateOvertimeRate(rate: number, differenceInPercentage: number) {
    return (rate * (100 + differenceInPercentage)) / 100;
  }
}
