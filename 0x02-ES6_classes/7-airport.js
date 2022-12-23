export default class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}
}

// eslint-disable-next-line func-name-matching, func-names
Airport.prototype.toString = function airportToString() {
	return `[object ${this._code}]`;
};
