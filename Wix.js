addEventListener("DOMContentLoaded",() => {
	if (loaded instanceof Function)
	{
		loaded();
	}
});

const W = Object.freeze({
	Library: Object.freeze({
		author: "Wixonic",
		contributors: {
			"Wixonic": "https://github.com/Wixonic/",
			"Tapabrata Banerjee": "https://github.com/Tapabrata2005/"
		},
		fileExtension: ".js",
		fileName: "Wix.js",
		name: "Wix",
		repository: "https://github.com/Wixonic/Wix.js/",
		website: "https://wixonic.github.io/Wix.js/",
		version: "0.0.1-Alpha-1"
	}),
	
	createNode: (Type) => new WElement(document.createElement(Type))
});

const WElement = class {
	#Node;
	#Creation;
	
	constructor (N)
	{
		if (!(N instanceof Node))
		{
			throw new TypeError(`Argument 1 must be an instance of Node at constructor of WElement.`);
		} else {
			this.#Node = N;
			this.#Creation = Date.now();
		}
	}
	
	get age()
	{
		return Date.now() - this.#Creation;
	}
	
	copy()
	{
		return new WElement(document.createElement(this.#Node.nodeName.toLowerCase()));
	}
	
	hide()
	{
		this.#Node.style.display = "none";
	}
	
	get innerHTML()
	{
		return this.#Node.innerHTML;
	}
	
	set innerHTML(content)
	{
		const type = typeof content;
		
		if (type == "string" || type == "number")
		{
			this.#Node.innerHTML = content;
		} else if (type == "object" || type == "array") {
			this.#Node.innerHTML = JSON.stringify(content);
		} else if (content == true) {
			this.#Node.innerHTML = "true";
		} else if (content == false) {
			this.#Node.innerHTML = "false";
		} else {
			this.#Node.innerHTML = content;
		}
		
		return this.#Node.innerHTML;
	}
	
	show()
	{
		this.#Node.style.display = "";
	}
	
	static age = (WE) => {
		if (WElement.isWElement(WE))
		{
			return WE.age;
		} else {
			throw new TypeError(`Argument 1 must be an instance of WElement at WElement.age().`);
		}
	}
	
	static copy = (WE) => {
		if (WElement.isWElement(WE))
		{
			return WE.copy();
		} else {
			throw new TypeError(`Argument 1 must be an instance of WElement at WElement.copy().`);
		}
	}
	
	static isWElement = (WE) => WE instanceof WElement
};