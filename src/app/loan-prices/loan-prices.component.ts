import { Component, OnInit } from '@angular/core';
import {ApiClientService} from '../api-client.service';

@Component({
  selector: 'app-loan-prices',
  templateUrl: './loan-prices.component.html',
  styleUrls: ['./loan-prices.component.scss']
})
export class LoanPricesComponent implements OnInit {

  averagePrices: object;
  selectedRating: object;
  dataDownloading: boolean;
  error: object;

  constructor(private apiClientService: ApiClientService) {
    this.averagePrices = {};
    this.selectedRating = null;
    this.dataDownloading = true;
    this.error = null;
  }

  ngOnInit() {
    this.apiClientService.getMarketLoans().then((res: Array<object>) => {
      this.calculateLoanPriceForRating(res);
    }).catch(e => {
      this.error = e;
    }).finally(() => {
      this.dataDownloading = false;
    });
  }

  selectRating(ratingObj) {
    this.selectedRating = ratingObj;
  }

  reloadPage() {
    location.reload();
  }

  private calculateLoanPriceForRating(data) {
    const dataByRating = this.groupBy(data, 'rating');

    for (const key of Object.keys(dataByRating)) {
      let amountTotal = 0;

      dataByRating[key].forEach(x => {
        amountTotal += x.amount;
      });

      this.averagePrices[key] = amountTotal / dataByRating[key].length;
    }
  }

  private groupBy(xs, key) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

}
