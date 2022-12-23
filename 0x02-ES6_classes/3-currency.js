export default class Currency {
	constructor(code, name) {
		this.code = code;
		this.name = name;
	}

	// Code getter
	get code() {
		return this._code;
	}

	// Set code
	set code(value) {
		if (typeof value !== 'string') {
			throw new TypeError('code must be a string');
		}

		this._code = value;
	}

	// Get name
	get name() {
		return this._name;
	}

	// Set name
	set name(value) {
		if (typeof value !== 'string') {
			throw new TypeError('name must be a string');
		}

		this._name = value;
	}

	// Method
	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}
