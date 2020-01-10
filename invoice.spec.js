const Invoice = require('./invoice.js')
const InvoiceLine = require('./invoiceLine.js')
let invoiceMock

beforeEach(() => {
	invoiceMock = new Invoice(new Date(), 'N001')
})

describe('Invoice class', () => {
	it('should call constructor', () => {
		expect(invoiceMock).toHaveProperty('InvoiceNumber', 'N001')
		expect(invoiceMock).toHaveProperty('InvoiceDate')
		expect(invoiceMock).toHaveProperty('LineItems')
		expect(invoiceMock.LineItems).toHaveLength(0)
	})

	it('should add invoice line ', () => {
		invoiceMock.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, 'Onion'))
		expect(invoiceMock.LineItems).toHaveLength(1)
		expect(invoiceMock.LineItems[0].InvoiceLineId).toBe(1)
	})

	it('should remove invoice line ', () => {
		invoiceMock.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, 'Onion'))
		invoiceMock.AddInvoiceLine(new InvoiceLine(2, 10.21, 4, 'Banana'))
		invoiceMock.AddInvoiceLine(new InvoiceLine(3, 6.21, 5, 'Pineapple'))
		invoiceMock.RemoveInvoiceLine(1)
		expect(invoiceMock.LineItems).toHaveLength(2)
		expect(invoiceMock.LineItems[0]).not.toHaveProperty('Description', 'Onion')
	})

	it('should merge invoices ', () => {
		invoiceMock.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, 'Blueberries'))
		const invoiceMock2 = new Invoice()
		invoiceMock2.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, 'Orange'))
		invoiceMock.MergeInvoices(invoiceMock2)
		expect(invoiceMock.LineItems).toHaveLength(2)
		expect(invoiceMock.LineItems[1]).toHaveProperty('Description', 'Orange')
	})

	it('should get total cost', () => {
		invoiceMock.AddInvoiceLine(new InvoiceLine(1, 1, 5, 'Onion'))
		invoiceMock.AddInvoiceLine(new InvoiceLine(2, 10, 4, 'Banana'))
		invoiceMock.AddInvoiceLine(new InvoiceLine(3, 10, 5, 'Pineapple'))
		expect(invoiceMock.GetTotal()).toBe('95.00')
	})

	it('should clone invoice ', () => {
		const clonedInvoiceMock = invoiceMock.Clone()
		expect(clonedInvoiceMock).toBeInstanceOf(Invoice)
		expect(clonedInvoiceMock).toEqual(invoiceMock)
	})
})
