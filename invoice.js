class Invoice {
	constructor(InvoiceDate = new Date(), InvoiceNumber = '', LineItems = []) {
		this.InvoiceDate = InvoiceDate
		this.InvoiceNumber = InvoiceNumber
		this.LineItems = LineItems
	}
	
	/**
	 * Adds a line to invoice
	 * @param {Object} InvoiceLine - a line to add
	 */
	AddInvoiceLine(line) {
		this.LineItems.push(line)
	}

	/**
	 * Removes a line by InvoiceLineId
	 * @param {number} id
	 */
	RemoveInvoiceLine(id) {
		this.SetLineItems(this.LineItems.filter(item => item.InvoiceLineId !== id))
	}

	/**
	 * Get total cost of Invoice
	 * @return {string} - return a two decimal string
	 */
	GetTotal() {
		const total = this.LineItems.reduce(
			(prev, current) => prev + (current['Cost'] * current['Quantity'] || 0),
			0
		)
		return total.toFixed(2)
	}

	/**
	 * Merge two invoices
	 * @param {Invoice} invoice
	 */
	MergeInvoices(invoice) {
		this.SetLineItems([...this.LineItems, ...invoice.LineItems])
	}

	/**
	 * Clone invoices
	 * @return {Invoice} invoice
	 */
	Clone() {
		return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
	}

	/**
	 * Set LineItems invoices
	 * @param {LineItems} lineItems
	 */
	SetLineItems(lineItems) {
		this.LineItems = lineItems
	}

}

module.exports = Invoice
