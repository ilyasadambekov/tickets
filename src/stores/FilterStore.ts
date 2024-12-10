import { makeAutoObservable } from 'mobx';

export enum Currency {
  rub = '₽',
  usd = '$',
  eur = '€',
}

export class FilterStoreClass {
  currency: Currency = Currency.rub;
  stops: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrency(currency: Currency) {
    this.currency = currency;
  }

  setStops(stops: number[]) {
    this.stops = stops;
  }
}

const FilterStore = new FilterStoreClass();

export default FilterStore;
