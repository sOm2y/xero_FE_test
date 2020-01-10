const Invoice = require('./invoice.js')
const InvoiceLine = require('./invoiceLine.js')

let invoiceLineMock

beforeEach(() => {
	invoiceLineMock = new InvoiceLine(1, 20.0, 4, 'Apple')
})

describe('InvoiceLine class', () => {
	it('should call constructor', () => {
		expect(invoiceLineMock).toHaveProperty('InvoiceLineId', 1)
		expect(invoiceLineMock).toHaveProperty('Cost', 20.0)
		expect(invoiceLineMock).toHaveProperty('Quantity', 4)
		expect(invoiceLineMock).toHaveProperty('Description', 'Apple')
	})
})
