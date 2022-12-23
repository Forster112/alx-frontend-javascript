// eslint-disable-next-line no-unused-vars
import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	// Amount
	get amount() {
		return this._amount;
	}

	set amount(value) {
		this._amount = value;
	}

	// Currency
	get currency() {
		return this._currency;
	}

	set currency(value) {
		this._currency = value;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency.displayFullCurrency()}`;
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}
