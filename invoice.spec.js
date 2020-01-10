const Invoice = require('./invoice.js')
const InvoiceLine = require('./invoiceLine.js')
let invoiceMock

beforeEach(() => {
	// Clear all instances and calls to constructor and all methods:
	invoiceMock = new Invoice(new Date(), 'N001')
})

describe('Invoice class', () => {
	it('should call constructor', () => {
		expect(invoiceMock.InvoiceNumber).toBe('N001')
		expect(invoiceMock.LineItems.length).toBe(0)
	})

	it('should add invoice line ', () => {
		invoiceMock.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, 'Onion'))
		expect(invoiceMock.LineItems.length).toBe(1)
		expect(invoiceMock.LineItems[0].InvoiceLineId).toBe(1)
	})

	it('should remove invoice line ', () => {
		invoiceMock.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, 'Onion'))
		invoiceMock.AddInvoiceLine(new InvoiceLine(2, 10.21, 4, 'Banana'))
		invoiceMock.AddInvoiceLine(new InvoiceLine(3, 6.21, 5, 'Pineapple'))
		invoiceMock.RemoveInvoiceLine(1)
		expect(invoiceMock.LineItems.length).toBe(2)
	})

	it('should merge invoices ', () => {})

	it('should get total cost', () => {})

	it('should clone invoice ', () => {
		const clonedInvoiceMock = invoiceMock.Clone()
		expect(clonedInvoiceMock instanceof Invoice).toEqual(true)
		expect(clonedInvoiceMock).toEqual(invoiceMock)
	})
})
