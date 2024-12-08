import { useRef, useState } from 'react';
import { ProTable } from "@ant-design/pro-components";
import "antd/dist/reset.css";
import dataInvoiceTable from "./dataInvoiceTable";
import { Button } from 'antd';
import { Switch } from 'antd';
import { PlusIcon, EyeIcon, SparklesIcon, TableCellsIcon } from '@heroicons/react/24/solid'
import { DownloadOutlined } from '@ant-design/icons';
import { QueueListIcon } from "@heroicons/react/16/solid";
import "../../index.css"
import "./InvoiceTable.css";

const InvoiceTable = () => {
    // Create a ref to access ProTable instance
    // State to track if the filter is enabled or disabled
    const [filterEnabled, setFilterEnabled] = useState(false);
    const toggleColumnRef = useRef();
    // Sample invoice data
    const data = dataInvoiceTable
    // Helper function to generate unique filters
    const generateFilters = (data, key) => {
        const uniqueValues = Array.from(new Set(data.map(item => item[key])));
        return uniqueValues.map(value => ({ text: value, value }));
    };

    // Function to handle switch toggle
    const handleFilterToggle = (checked) => {
        setFilterEnabled(checked);
        // You can perform additional logic here when the filter is enabled/disabled
        console.log(`Filter is ${checked ? 'enabled' : 'disabled'}`);
    };

    const renderAttachmentButton = (attachment) => {
        if (attachment === "true") {
            return (
                <Button type="default" icon={<EyeIcon className="size-4 text-slate-600" />} size="small">
                    View
                </Button>
            );
        } else {
            return (
                <Button type="default" icon={<PlusIcon className="size-4 text-slate-600" />} size="small">
                    Add
                </Button>
            );
        }
    };

    // Table columns
    const columns = [
        {
            title: "Invoice Number",
            dataIndex: "invoiceNumber",
            key: "invoiceNumber",
            width: 200,
            sorter: filterEnabled ? (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber) : [],
            filters: filterEnabled ? generateFilters(data, "invoiceNumber") : [],  // Conditional filters
            onFilter: (value, record) => record.invoiceNumber === value,
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),
        },
        {
            title: "Invoice Date",
            dataIndex: "date",
            key: "date",
            sorter: filterEnabled ? (a, b) => new Date(a.date) - new Date(b.date) : [],
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),
        },
        {
            title: "Requester",
            dataIndex: "customer",
            key: "customer",
            filters: filterEnabled ? generateFilters(data, "customer") : [],  // Conditional filters
            onFilter: (value, record) => record.customer === value,
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),

        },
        {
            title: "Merchant",
            dataIndex: "merchant",
            key: "merchant",
            filters: filterEnabled ? generateFilters(data, "merchant") : [],  // Conditional filters
            onFilter: (value, record) => record.merchant === value,
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),

        },
        {
            title: "Budget",
            dataIndex: "budget",
            key: "budget",
            filters: filterEnabled ? generateFilters(data, "budget") : [],  // Conditional filters
            onFilter: (value, record) => record.budget === value,
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            filters: filterEnabled ? generateFilters(data, "category") : [],  // Conditional filters
            onFilter: (value, record) => record.category === value,
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),

        },
        {
            title: "Attachment",
            dataIndex: "attachment",
            key: "attachment",
            filters: filterEnabled ? generateFilters(data, "attachment") : [],  // Conditional filters
            onFilter: (value, record) => record.attachment === value,
            render: (attachment) => renderAttachmentButton(attachment),
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
            render: (amount) => {
                const parsedAmount = parseFloat(amount);
                if (isNaN(parsedAmount)) {
                    return "NaN"; // Fallback if invalid
                }
                return `SGD ${parsedAmount.toFixed(2)}`;
            },
            sorter: filterEnabled ? (a, b) => parseFloat(a.amount.replace("$", "")) - parseFloat(b.amount.replace("$", "")) : [],
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            filters: filterEnabled ? generateFilters(data, "invoiceNumber") : [],  // Conditional filters
            onFilter: (value, record) => record.status === value,
            sorter: filterEnabled ? (a, b) => a.status.localeCompare(b.status) : [],
            onHeaderCell: () => ({
                className: filterEnabled ? 'filter-enabled-header' : 'filter-disabled-header', // Dynamically set class
            }),
        },
    ];

    return (
        <>
            <div className="flex flex-col gap-2 p-3 bg-[#f7fafc] rounded-lg mt-3">
                <div className="flex items-center justify-between space-x-4 py-1">
                    {/* Left Group Control */}
                    <div className="flex items-center space-x-2">
                        {/* Button with AI Gemini gradient border */}
                        <Button
                            className="justify-start border-1 border-blue-500 rounded-[4px] text-gray-900 font-normal px-3"
                            type="default"
                            icon={<SparklesIcon className="size-4 text-blue-500" />}
                            size="medium"
                        >
                            Search and modify your data view with Summit AI
                        </Button>

                        {/* Button with Chevron down icon */}
                        <Button
                            className="flex items-center font-normal rounded-[4px] px-3"
                            type="default"
                            icon={<EyeIcon className="size-4" />}
                            size="medium"
                        >
                            Change View
                        </Button>

                        {/* Button with Columns label */}
                        <Button
                            className="flex items-center font-normal rounded-[4px]"
                            type="default"
                            icon={<TableCellsIcon className="size-4" />}
                            size="medium"
                        >
                            Columns
                        </Button>
                        {/* 
                    <Button
                        type="primary"
                        onClick={() => {
                            if (toggleColumnRef.current) {
                                toggleColumnRef.current.
                                console.log(toggleColumnRef.current)
                            } else {
                                console.log(toggleColumnRef.current)
                            }
                        }}
                        style={{ marginBottom: 16 }}
                    >
                        Open Table Settings
                    </Button> */}

                        {/* Button with Group By label */}
                        <Button
                            className="flex items-center font-normal rounded-[4px]"
                            type="default"
                            icon={<QueueListIcon className="size-4" />}
                            size="medium"
                        >
                            Group By
                        </Button>
                    </div>

                    {/* Right Group Control */}
                    <div className="flex items-center space-x-4">
                        {/* Toggle Switch with custom color change */}
                        <label className="flex items-center space-x-2">
                            <span className="text-sm font-normal">Filter</span>
                            <Switch
                                defaultChecked={filterEnabled}
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                onChange={handleFilterToggle}
                                className="custom-toggle"
                            />
                        </label>

                        {/* Button with Download icon */}
                        <Button
                            className="rounded-[8px] bg-primary"
                            type="primary"
                            icon={<DownloadOutlined />}
                            size="medium"
                        >
                            Export
                        </Button>
                    </div>
                </div>
                <ProTable
                    actionRef={toggleColumnRef}
                    columns={columns}
                    dataSource={data}
                    rowKey="id"
                    pagination={{
                        pageSize: 10, // Number of items per page
                    }}
                    search={false} // Disable search functionality for simplicity
                    options={false} // Disable default toolbar
                />
            </div>

        </>
    );
};

export default InvoiceTable;
