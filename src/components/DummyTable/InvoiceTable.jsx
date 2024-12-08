import React from "react";
import { ProTable } from "@ant-design/pro-components";
import "antd/dist/reset.css";

const InvoiceTable = () => {
    // Sample invoice data
    const data = [
        {
            id: 1,
            invoiceNumber: "INV-001",
            customer: "John Doe",
            date: "2024-01-01",
            amount: "$120.00",
            status: "Paid",
        },
        {
            id: 2,
            invoiceNumber: "INV-002",
            customer: "Jane Smith",
            date: "2024-01-05",
            amount: "$90.00",
            status: "Pending",
        },
        {
            id: 3,
            invoiceNumber: "INV-003",
            customer: "Alex Johnson",
            date: "2024-01-10",
            amount: "$150.00",
            status: "Overdue",
        },
        // Add more sample data (up to 11 entries)
        {
            id: 4,
            invoiceNumber: "INV-004",
            customer: "Chris Evans",
            date: "2024-01-12",
            amount: "$200.00",
            status: "Paid",
        },
        {
            id: 5,
            invoiceNumber: "INV-005",
            customer: "Emma Watson",
            date: "2024-01-15",
            amount: "$300.00",
            status: "Paid",
        },
        {
            id: 6,
            invoiceNumber: "INV-006",
            customer: "Liam Hemsworth",
            date: "2024-01-18",
            amount: "$400.00",
            status: "Pending",
        },
        {
            id: 7,
            invoiceNumber: "INV-007",
            customer: "Sophia Turner",
            date: "2024-01-20",
            amount: "$50.00",
            status: "Overdue",
        },
        {
            id: 8,
            invoiceNumber: "INV-008",
            customer: "Ethan Hawke",
            date: "2024-01-22",
            amount: "$70.00",
            status: "Paid",
        },
        {
            id: 9,
            invoiceNumber: "INV-009",
            customer: "Mia Wong",
            date: "2024-01-25",
            amount: "$110.00",
            status: "Pending",
        },
        {
            id: 10,
            invoiceNumber: "INV-010",
            customer: "Noah Davis",
            date: "2024-01-28",
            amount: "$500.00",
            status: "Paid",
        },
        {
            id: 11,
            invoiceNumber: "INV-011",
            customer: "Isabella Lee",
            date: "2024-01-30",
            amount: "$600.00",
            status: "Overdue",
        },
    ];

    // Table columns
    const columns = [
        {
            title: "Invoice Number",
            dataIndex: "invoiceNumber",
            key: "invoiceNumber",
        },
        {
            title: "Customer",
            dataIndex: "customer",
            key: "customer",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
            sorter: (a, b) => parseFloat(a.amount.replace("$", "")) - parseFloat(b.amount.replace("$", "")),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            filters: [
                { text: "Paid", value: "Paid" },
                { text: "Pending", value: "Pending" },
                { text: "Overdue", value: "Overdue" },
            ],
            onFilter: (value, record) => record.status === value,
        },
    ];

    return (
        <ProTable
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{
                pageSize: 5, // Number of items per page
            }}
            search={false} // Disable search functionality for simplicity
            options={false} // Disable default toolbar
        />
    );
};

export default InvoiceTable;
