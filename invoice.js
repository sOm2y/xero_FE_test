class Invoice {
	constructor(InvoiceDate = new Date(), InvoiceNumber = '', LineItems = []) {
		this.InvoiceDate = InvoiceDate
		this.InvoiceNumber = InvoiceNumber
		this.LineItems = LineItems
	}
	
	/**
	 * Adds a line to invoice
	 * @param {Object} line - a line to add
	 */
	AddInvoiceLine(line) {
		this.LineItems.push(line)
	}

	/**
	 * Removes a line
	 */
	RemoveInvoiceLine(id) {
		this.SetLineItems(this.LineItems.filter(item => item.InvoiceLineId !== id))
	}

	GetTotal() {
		const total = this.LineItems.reduce(
			(prev, current) => prev + (current['Cost'] * current['Quantity'] || 0),
			0
		)
		return total.toFixed(2)
	}

	MergeInvoices(invoice) {
		this.SetLineItems([...this.LineItems, ...invoice.LineItems])
	}

	Clone() {
		return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
	}

	SetLineItems(value) {
		this.LineItems = value
	}

}

module.exports = Invoice
