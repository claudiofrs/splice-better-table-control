import React, { useState } from "react";
import { ProTable } from "@ant-design/pro-components";
import "antd/dist/reset.css";
import { Input, Checkbox } from "antd";
import dataInvoiceTable from "./dataInvoiceTable";

// Input component for search functionality with dynamic trigger type
const FilterInput = ({ columnKey, value, onChange, onSearch, triggerType = 'enter', filters = [] }) => {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter" && triggerType === 'enter') {
            onSearch();
        }
    };

    const handleBlur = () => {
        if (triggerType === 'blur') {
            onSearch();
        }
    };

    const handleFilterChange = (checkedValues) => {
        onSearch(checkedValues);
    };

    return (
        <div style={{ padding: 8 }}>
            {/* Search Input */}
            <Input
                placeholder={`Search ${columnKey}`}
                value={value}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                onBlur={handleBlur}
            />
            {/* Checkbox list for filtering */}
            <Checkbox.Group
                options={filters}
                onChange={handleFilterChange}
                style={{ marginTop: 8 }}
            />
        </div>
    );
};

const InvoiceTable = () => {
    // Sample invoice data
    const data = dataInvoiceTable
    // Helper function to generate unique filters
    const generateFilters = (data, key) => {
        const uniqueValues = Array.from(new Set(data.map(item => item[key])));
        return uniqueValues.map(value => ({ text: value, value }));
    };

    // Table columns
    const columns = [
        {
            title: "Invoice Number",
            dataIndex: "invoiceNumber",
            key: "invoiceNumber",
            sorter: (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <FilterInput
                    columnKey="Invoice Number"
                    value={selectedKeys[0]}
                    onChange={value => setSelectedKeys(value ? [value] : [])}
                    onSearch={() => confirm()}
                    triggerType="enter"
                />
            ),
            onFilter: (value, record) => record.invoiceNumber.toLowerCase().includes(value.toLowerCase()),
        },
        {
            title: "Invoice Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },
        {
            title: "Requester",
            dataIndex: "customer",
            key: "customer",
            filters: generateFilters(data, "customer"),
            onFilter: (value, record) => record.customer === value,

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
            filters: generateFilters(data, "status"),
            onFilter: (value, record) => record.status === value,
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
    ];

    return (
        <ProTable
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{
                pageSize: 10, // Number of items per page
            }}
            search={false} // Disable search functionality for simplicity
            options={false} // Disable default toolbar
        />
    );
};

export default InvoiceTable;
