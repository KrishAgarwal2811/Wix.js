addEventListener("DOMContentLoaded",() => {
	if (window.loaded instanceof Function)
	{
		window.loaded();
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
			this.nodeName = this.#Node.nodeName.toLowerCase();
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
	
	static age(e)
	{
		if (WElement.isWElement(e))
		{
			return e.age;
		} else {
			throw new TypeError(`Argument 1 must be an instance of WElement at WElement.age().`);
		}
	}
	
	static get body()
	{
		return new WElement(document.body);
	}
	
	static byClass(c)
	{
		const e = document.getElementsByClassName(c);
		
		if (e == null)
		{
			return null;
		} else {
			let out = [];
			
			for (let x = 0; x < e.length; ++x)
			{
				const we = new WElement(e[x]);
				
				if (out.length > 0)
				{
					out.push(we);
				} else {
					out = [we];
				}
			}
			
			return out;
		}
	}
	
	static byId(i)
	{
		const e = document.getElementById(i);
		
		if (e == null)
		{
			return null;
		} else {
			return new WElement(e);
		}
	}
	
	static byTag(t)
	{
		const e = document.getElementsByTagName(t);
		
		if (e == null)
		{
			return null;
		} else {
			let out = [];
			
			for (let x = 0; x < e.length; ++x)
			{
				const we = new WElement(e[x]);
				
				if (out.length > 0)
				{
					out.push(we);
				} else {
					out = [we];
				}
			}
			
			return out;
		}
	}
	
	static copy(e)
	{
		if (WElement.isWElement(e))
		{
			return WE.copy();
		} else {
			throw new TypeError(`Argument 1 must be an instance of WElement at WElement.copy().`);
		}
	}
	
	static get head()
	{
		return new WElement(document.head);
	}
	
	static isWElement(e)
	{
		return e instanceof WElement;
	}
};

const WE = WElement;
