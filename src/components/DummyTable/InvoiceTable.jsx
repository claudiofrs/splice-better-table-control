import React, { useState } from "react";
import { Input, Checkbox, Button } from "antd";
import { ProTable } from "@ant-design/pro-components";
import "antd/dist/reset.css";
import dataInvoiceTable from "./dataInvoiceTable";

// FilterInput Component for searching and filtering
const FilterInput = ({ value, onChange, onSearch, filters, onFilterChange }) => {
    const [searchValue, setSearchValue] = useState(value || "");

    // Handle search input change
    const handleInputChange = (e) => {
        const newSearchValue = e.target.value;
        setSearchValue(newSearchValue);
        onChange(newSearchValue); // Update parent state for search value
    };

    // Handle checkbox change
    const handleCheckboxChange = (checkedValues) => {
        onFilterChange(checkedValues); // Update selected filters (checkboxes)
    };

    // Trigger search when user presses enter or blur
    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <div style={{ padding: 8 }}>
            {/* Search Input */}
            <Input
                placeholder="Search Invoice Number"
                value={searchValue}
                onChange={handleInputChange}
                onBlur={handleSearch}
                onPressEnter={handleSearch}
            />
            {/* Checkbox List for Available Invoice Numbers */}
            <Checkbox.Group
                options={filters}
                onChange={handleCheckboxChange}
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

    const [selectedInvoiceNumbers, setSelectedInvoiceNumbers] = useState([]);

    // Extract unique invoice numbers from the data for the filter
    const getInvoiceNumbers = () => {
        return [...new Set(data.map(item => item.invoiceNumber))]; // Get unique invoice numbers
    };

    // Handle the filter search (search by invoice number text)
    const handleSearch = (value) => {
        setSelectedInvoiceNumbers(
            getInvoiceNumbers().filter(invoice => invoice.includes(value))
        );
    };

    // Handle the checkbox filter change (select/unselect invoice numbers)
    const handleFilterChange = (checkedValues) => {
        setSelectedInvoiceNumbers(checkedValues);
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
                    value={selectedKeys[0]}
                    onChange={value => setSelectedKeys(value ? [value] : [])}
                    onSearch={handleSearch}
                    filters={getInvoiceNumbers().map(val => ({ label: val, value: val }))}
                    onFilterChange={handleFilterChange}
                />
            ),
            onFilter: (value, record) => selectedInvoiceNumbers.includes(record.invoiceNumber), // Filter by selected invoice numbers
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
