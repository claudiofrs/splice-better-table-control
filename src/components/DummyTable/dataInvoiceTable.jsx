const dataInvoiceTable = [
    {
        "id": 1,
        "invoiceNumber": "INV-001",
        "customer": "John Doe",
        "date": "2024-01-01",
        "amount": "120.00",  // Removed the $
        "status": "Paid",
        "budget": "Default",
        "merchant": "Adobe",
        "category": "Tools & Software",
        "attachment": "true"
    },
    {
        "id": 2,
        "invoiceNumber": "INV-002",
        "customer": "Alice Smith",
        "date": "2024-01-10",
        "amount": "450.00",  // Removed the $
        "status": "Pending",
        "budget": "Marketing",
        "merchant": "Microsoft",
        "category": "Cloud Services",
        "attachment": "true"
    },
    {
        "id": 3,
        "invoiceNumber": "INV-003",
        "customer": "Bob Johnson",
        "date": "2024-01-15",
        "amount": "75.50",  // Removed the $
        "status": "Paid",
        "budget": "Research",
        "merchant": "Amazon",
        "category": "Books",
        "attachment": "false"
    },
    {
        "id": 4,
        "invoiceNumber": "INV-004",
        "customer": "Charlie Lee",
        "date": "2024-02-01",
        "amount": "320.00",  // Removed the $
        "status": "Overdue",
        "budget": "IT",
        "merchant": "Google",
        "category": "Cloud Services",
        "attachment": "true"
    },
    {
        "id": 5,
        "invoiceNumber": "INV-005",
        "customer": "Dana White",
        "date": "2024-02-10",
        "amount": "99.99",  // Removed the $
        "status": "Paid",
        "budget": "Operations",
        "merchant": "Apple",
        "category": "Hardware",
        "attachment": "true"
    },
    {
        "id": 6,
        "invoiceNumber": "INV-006",
        "customer": "Eva Green",
        "date": "2024-03-01",
        "amount": "200.00",  // Removed the $
        "status": "Paid",
        "budget": "HR",
        "merchant": "Spotify",
        "category": "Entertainment",
        "attachment": "false"
    },
    {
        "id": 7,
        "invoiceNumber": "INV-007",
        "customer": "Frank Miller",
        "date": "2024-03-05",
        "amount": "580.00",  // Removed the $
        "status": "Pending",
        "budget": "Research",
        "merchant": "Netflix",
        "category": "Streaming",
        "attachment": "true"
    },
    {
        "id": 8,
        "invoiceNumber": "INV-008",
        "customer": "Grace Lee",
        "date": "2024-03-10",
        "amount": "350.00",  // Removed the $
        "status": "Paid",
        "budget": "IT",
        "merchant": "Adobe",
        "category": "Tools & Software",
        "attachment": "true"
    },
    {
        "id": 9,
        "invoiceNumber": "INV-009",
        "customer": "Harry Brown",
        "date": "2024-03-15",
        "amount": "145.75",  // Removed the $
        "status": "Paid",
        "budget": "Operations",
        "merchant": "Microsoft",
        "category": "Software",
        "attachment": "false"
    },
    {
        "id": 10,
        "invoiceNumber": "INV-010",
        "customer": "Ivy Davis",
        "date": "2024-03-20",
        "amount": "212.30",  // Removed the $
        "status": "Overdue",
        "budget": "Research",
        "merchant": "Amazon",
        "category": "Hardware",
        "attachment": "true"
    },
    {
        "id": 11,
        "invoiceNumber": "INV-011",
        "customer": "Jack Harris",
        "date": "2024-04-01",
        "amount": "320.00",  // Removed the $
        "status": "Paid",
        "budget": "IT",
        "merchant": "Apple",
        "category": "Hardware",
        "attachment": "false"
    },
    {
        "id": 12,
        "invoiceNumber": "INV-012",
        "customer": "Kerry Wilson",
        "date": "2024-04-10",
        "amount": "199.50",  // Removed the $
        "status": "Pending",
        "budget": "Research",
        "merchant": "Google",
        "category": "Cloud Services",
        "attachment": "true"
    },
    {
        "id": 13,
        "invoiceNumber": "INV-013",
        "customer": "Liam Clark",
        "date": "2024-04-15",
        "amount": "150.00",  // Removed the $
        "status": "Paid",
        "budget": "Marketing",
        "merchant": "Spotify",
        "category": "Entertainment",
        "attachment": "true"
    },
    {
        "id": 14,
        "invoiceNumber": "INV-014",
        "customer": "Monica Taylor",
        "date": "2024-04-20",
        "amount": "499.99",  // Removed the $
        "status": "Overdue",
        "budget": "Operations",
        "merchant": "Adobe",
        "category": "Tools & Software",
        "attachment": "false"
    },
    {
        "id": 15,
        "invoiceNumber": "INV-015",
        "customer": "Nina Robinson",
        "date": "2024-05-01",
        "amount": "112.30",  // Removed the $
        "status": "Paid",
        "budget": "HR",
        "merchant": "Netflix",
        "category": "Streaming",
        "attachment": "true"
    },
    {
        "id": 16,
        "invoiceNumber": "INV-016",
        "customer": "Oscar Walker",
        "date": "2024-05-05",
        "amount": "350.00",  // Removed the $
        "status": "Pending",
        "budget": "Research",
        "merchant": "Microsoft",
        "category": "Software",
        "attachment": "true"
    },
    {
        "id": 17,
        "invoiceNumber": "INV-017",
        "customer": "Paula Adams",
        "date": "2024-05-10",
        "amount": "250.00",  // Removed the $
        "status": "Paid",
        "budget": "IT",
        "merchant": "Amazon",
        "category": "Hardware",
        "attachment": "true"
    },
    {
        "id": 18,
        "invoiceNumber": "INV-018",
        "customer": "Quinn Phillips",
        "date": "2024-05-15",
        "amount": "75.00",  // Removed the $
        "status": "Paid",
        "budget": "Operations",
        "merchant": "Google",
        "category": "Cloud Services",
        "attachment": "false"
    },
    {
        "id": 19,
        "invoiceNumber": "INV-019",
        "customer": "Rachel Green",
        "date": "2024-06-01",
        "amount": "670.50",  // Removed the $
        "status": "Overdue",
        "budget": "Marketing",
        "merchant": "Spotify",
        "category": "Entertainment",
        "attachment": "true"
    },
    {
        "id": 20,
        "invoiceNumber": "INV-020",
        "customer": "Steve Martin",
        "date": "2024-06-05",
        "amount": "115.00",  // Removed the $
        "status": "Pending",
        "budget": "IT",
        "merchant": "Apple",
        "category": "Software",
        "attachment": "false"
    },
    {
        "id": 21,
        "invoiceNumber": "INV-021",
        "customer": "Tracy Lee",
        "date": "2024-06-10",
        "amount": "88.00",  // Removed the $
        "status": "Paid",
        "budget": "HR",
        "merchant": "Amazon",
        "category": "Books",
        "attachment": "true"
    }
]

export default dataInvoiceTable;
