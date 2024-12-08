import { ProTable } from "@ant-design/pro-components";
import "antd/dist/reset.css";
import dataInvoiceTable from "./dataInvoiceTable";
import { Button } from 'antd';
import { Switch } from 'antd';
import { PlusIcon, EyeIcon, SparklesIcon, TableCellsIcon } from '@heroicons/react/24/solid'
import { DownloadOutlined } from '@ant-design/icons';
import { QueueListIcon } from "@heroicons/react/16/solid";
import "./InvoiceTable.css";

const InvoiceTable = () => {

    // Sample invoice data
    const data = dataInvoiceTable
    // Helper function to generate unique filters
    const generateFilters = (data, key) => {
        const uniqueValues = Array.from(new Set(data.map(item => item[key])));
        return uniqueValues.map(value => ({ text: value, value }));
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
            sorter: (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber),
            filters: generateFilters(data, "invoiceNumber"),
            onFilter: (value, record) => record.invoiceNumber === value,
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
            title: "Merchant",
            dataIndex: "merchant",
            key: "merchant",
            filters: generateFilters(data, "merchant"),
            onFilter: (value, record) => record.merchant === value,

        },
        {
            title: "Budget",
            dataIndex: "budget",
            key: "budget",
            filters: generateFilters(data, "budget"),
            onFilter: (value, record) => record.budget === value,
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            filters: generateFilters(data, "category"),
            onFilter: (value, record) => record.category === value,

        },
        {
            title: "Attachment",
            dataIndex: "attachment",
            key: "attachment",
            filters: generateFilters(data, "attachment"),
            onFilter: (value, record) => record.attachment === value,
            render: (attachment) => renderAttachmentButton(attachment),
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
        <>
            <div className="flex items-center justify-between space-x-4 py-4">
                {/* Left Group Control */}
                <div className="flex items-center space-x-2">
                    {/* Button with AI Gemini gradient border */}
                    <Button
                        className="justify-start border-1 border-[#4F46E5] rounded-[4px] text-gray-900 font-normal px-3"
                        type="default"
                        icon={<SparklesIcon className="size-4" />}
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
                            defaultChecked={false}
                            checkedChildren="On"
                            unCheckedChildren="Off"
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
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={{
                    pageSize: 10, // Number of items per page
                }}
                search={false} // Disable search functionality for simplicity
                options={false} // Disable default toolbar
            /></>
    );
};

export default InvoiceTable;
