import { useMemo, useRef, useState } from 'react';
import { ProTable } from "@ant-design/pro-components";
import "antd/dist/reset.css";
import dataInvoiceTable from "./dataInvoiceTable";
import { Button, Checkbox, DatePicker, Drawer, InputNumber, Radio, Select } from 'antd';
import { PlusIcon, EyeIcon, SparklesIcon, TableCellsIcon, FunnelIcon } from '@heroicons/react/24/solid'
import { DownloadOutlined } from '@ant-design/icons';
import { QueueListIcon } from "@heroicons/react/16/solid";
import "../../index.css"
import "./InvoiceTable.css";

const { RangePicker } = DatePicker;

const defaultFilters = {
    status: [],
    date: [null, null],
    customer: [],
    merchant: [],
    budget: [],
    category: [],
    attachment: null,
    amount: [null, null],
    invoiceNumber: [],
};

const countActiveFilters = (filters) => {
    let count = 0;
    if (filters.status.length > 0) count++;
    if (filters.date[0] || filters.date[1]) count++;
    if (filters.customer.length > 0) count++;
    if (filters.merchant.length > 0) count++;
    if (filters.budget.length > 0) count++;
    if (filters.category.length > 0) count++;
    if (filters.attachment !== null) count++;
    if (filters.amount[0] !== null || filters.amount[1] !== null) count++;
    if (filters.invoiceNumber.length > 0) count++;
    return count;
};

const toSelectOptions = (values) => values.map(v => ({ label: v, value: v }));

const searchFilter = (input, option) =>
    option.label.toLowerCase().includes(input.toLowerCase());

const multiOptionRender = (selectedValues) => (option) => (
    <div className="flex items-center gap-2">
        <Checkbox checked={selectedValues.includes(option.value)} onChange={() => {}} />
        <span>{option.label}</span>
    </div>
);

const InvoiceTable = () => {
    const toggleColumnRef = useRef();
    const data = dataInvoiceTable;

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [pendingFilters, setPendingFilters] = useState(defaultFilters);
    const [appliedFilters, setAppliedFilters] = useState(defaultFilters);

    const getUniqueValues = (key) => [...new Set(data.map(item => item[key]))];

    const filteredData = useMemo(() => {
        return data.filter(record => {
            if (appliedFilters.status.length > 0 && !appliedFilters.status.includes(record.status)) return false;
            if (appliedFilters.customer.length > 0 && !appliedFilters.customer.includes(record.customer)) return false;
            if (appliedFilters.merchant.length > 0 && !appliedFilters.merchant.includes(record.merchant)) return false;
            if (appliedFilters.budget.length > 0 && !appliedFilters.budget.includes(record.budget)) return false;
            if (appliedFilters.category.length > 0 && !appliedFilters.category.includes(record.category)) return false;
            if (appliedFilters.invoiceNumber.length > 0 && !appliedFilters.invoiceNumber.includes(record.invoiceNumber)) return false;
            if (appliedFilters.attachment !== null && record.attachment !== appliedFilters.attachment) return false;
            if (appliedFilters.date[0] || appliedFilters.date[1]) {
                const recordDate = record.date;
                if (appliedFilters.date[0] && recordDate < appliedFilters.date[0].format('YYYY-MM-DD')) return false;
                if (appliedFilters.date[1] && recordDate > appliedFilters.date[1].format('YYYY-MM-DD')) return false;
            }
            if (appliedFilters.amount[0] !== null && parseFloat(record.amount) < appliedFilters.amount[0]) return false;
            if (appliedFilters.amount[1] !== null && parseFloat(record.amount) > appliedFilters.amount[1]) return false;
            return true;
        });
    }, [appliedFilters]);

    const openDrawer = () => {
        setPendingFilters(appliedFilters);
        setDrawerOpen(true);
    };

    const handleApply = () => {
        setAppliedFilters(pendingFilters);
        setDrawerOpen(false);
    };

    const handleReset = () => {
        setPendingFilters(defaultFilters);
    };

    const setPending = (key, value) => {
        setPendingFilters(prev => ({ ...prev, [key]: value }));
    };

    const pendingCount = countActiveFilters(pendingFilters);
    const appliedCount = countActiveFilters(appliedFilters);

    const renderAttachmentButton = (attachment) => {
        if (attachment === "true") {
            return (
                <Button type="default" icon={<EyeIcon className="size-4 text-slate-600" />} size="small">
                    View
                </Button>
            );
        }
        return (
            <Button type="default" icon={<PlusIcon className="size-4 text-slate-600" />} size="small">
                Add
            </Button>
        );
    };

    const columns = [
        {
            title: "Invoice Number",
            dataIndex: "invoiceNumber",
            key: "invoiceNumber",
            width: 200,
            sorter: (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber),
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
        },
        {
            title: "Merchant",
            dataIndex: "merchant",
            key: "merchant",
        },
        {
            title: "Budget",
            dataIndex: "budget",
            key: "budget",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Attachment",
            dataIndex: "attachment",
            key: "attachment",
            render: (attachment) => renderAttachmentButton(attachment),
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
            render: (amount) => {
                const parsedAmount = parseFloat(amount);
                if (isNaN(parsedAmount)) return "NaN";
                return `SGD ${parsedAmount.toFixed(2)}`;
            },
            sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
    ];

    return (
        <>
            <div className="flex flex-col gap-2 p-3 bg-[#f7fafc] rounded-lg mt-3">
                <div className="flex items-center justify-between space-x-4 py-1">
                    {/* Left Group Control */}
                    <div className="flex items-center space-x-2">
                        <Button
                            className="justify-start border-1 border-blue-500 rounded-[4px] text-gray-900 font-normal pl-2 pr-3 shadow-sm"
                            type="default"
                            icon={<SparklesIcon className="size-4 text-blue-500" />}
                            size="medium"
                        >
                            Search data or customize view with Summit AI
                        </Button>

                        <Button
                            className="flex items-center font-normal rounded-[4px] px-3"
                            type="default"
                            icon={<EyeIcon className="size-4" />}
                            size="medium"
                        >
                            Change View
                        </Button>

                        <Button
                            className="flex items-center font-normal rounded-[4px]"
                            type="default"
                            icon={<TableCellsIcon className="size-4" />}
                            size="medium"
                        >
                            Columns
                        </Button>

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
                        <Button
                            className="flex items-center font-normal rounded-[4px]"
                            type={appliedCount > 0 ? "primary" : "default"}
                            icon={<FunnelIcon className="size-4" />}
                            size="medium"
                            onClick={openDrawer}
                        >
                            Filter{appliedCount > 0 ? ` (${appliedCount})` : ""}
                        </Button>

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
                    dataSource={filteredData}
                    rowKey="id"
                    pagination={{ pageSize: 10 }}
                    search={false}
                    options={false}
                />
            </div>

            <Drawer
                title="Filter"
                placement="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                mask={true}
                width={360}
                styles={{ body: { padding: '16px 20px' } }}
                footer={
                    <div className="flex items-center gap-2 py-1">
                        <Button
                            type="default"
                            block
                            size="large"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                        <Button
                            type="primary"
                            block
                            size="large"
                            onClick={handleApply}
                        >
                            Apply Filter{pendingCount > 0 ? ` (${pendingCount})` : ""}
                        </Button>
                    </div>
                }
            >
                <div className="flex flex-col gap-1">

                    {/* Status */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Status</p>
                        <Select
                            mode="multiple"
                            showSearch
                            allowClear
                            className="w-full"
                            placeholder="Select status"
                            options={toSelectOptions(getUniqueValues("status"))}
                            value={pendingFilters.status}
                            onChange={(val) => setPending("status", val)}
                            filterOption={searchFilter}
                            optionRender={multiOptionRender(pendingFilters.status)}
                            menuItemSelectedIcon={null}
                        />
                    </div>

                    {/* Invoice Date */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Invoice Date</p>
                        <RangePicker
                            className="w-full"
                            popupClassName="hide-picker-arrow"
                            value={pendingFilters.date}
                            onChange={(dates) => setPending("date", dates || [null, null])}
                        />
                    </div>

                    {/* Requester */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Requester</p>
                        <Select
                            mode="multiple"
                            showSearch
                            allowClear
                            className="w-full"
                            placeholder="Select requester"
                            options={toSelectOptions(getUniqueValues("customer"))}
                            value={pendingFilters.customer}
                            onChange={(val) => setPending("customer", val)}
                            filterOption={searchFilter}
                            optionRender={multiOptionRender(pendingFilters.customer)}
                            menuItemSelectedIcon={null}
                        />
                    </div>

                    {/* Merchant */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Merchant</p>
                        <Select
                            mode="multiple"
                            showSearch
                            allowClear
                            className="w-full"
                            placeholder="Select merchant"
                            options={toSelectOptions(getUniqueValues("merchant"))}
                            value={pendingFilters.merchant}
                            onChange={(val) => setPending("merchant", val)}
                            filterOption={searchFilter}
                            optionRender={multiOptionRender(pendingFilters.merchant)}
                            menuItemSelectedIcon={null}
                        />
                    </div>

                    {/* Budget */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Budget</p>
                        <Select
                            mode="multiple"
                            showSearch
                            allowClear
                            className="w-full"
                            placeholder="Select budget"
                            options={toSelectOptions(getUniqueValues("budget"))}
                            value={pendingFilters.budget}
                            onChange={(val) => setPending("budget", val)}
                            filterOption={searchFilter}
                            optionRender={multiOptionRender(pendingFilters.budget)}
                            menuItemSelectedIcon={null}
                        />
                    </div>

                    {/* Category */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Category</p>
                        <Select
                            mode="multiple"
                            showSearch
                            allowClear
                            className="w-full"
                            placeholder="Select category"
                            options={toSelectOptions(getUniqueValues("category"))}
                            value={pendingFilters.category}
                            onChange={(val) => setPending("category", val)}
                            filterOption={searchFilter}
                            optionRender={multiOptionRender(pendingFilters.category)}
                            menuItemSelectedIcon={null}
                        />
                    </div>

                    {/* Attachment */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Attachment</p>
                        <Radio.Group
                            value={pendingFilters.attachment}
                            onChange={(e) => setPending("attachment", e.target.value)}
                        >
                            <Radio.Button value={null}>Any</Radio.Button>
                            <Radio.Button value="true">Uploaded</Radio.Button>
                            <Radio.Button value="false">Missing</Radio.Button>
                        </Radio.Group>
                    </div>

                    {/* Amount */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Amount (SGD)</p>
                        <div className="flex items-center gap-2">
                            <InputNumber
                                className="w-full"
                                placeholder="Min"
                                min={0}
                                value={pendingFilters.amount[0]}
                                onChange={(val) => setPending("amount", [val, pendingFilters.amount[1]])}
                            />
                            <span className="text-gray-400 shrink-0">—</span>
                            <InputNumber
                                className="w-full"
                                placeholder="Max"
                                min={0}
                                value={pendingFilters.amount[1]}
                                onChange={(val) => setPending("amount", [pendingFilters.amount[0], val])}
                            />
                        </div>
                    </div>

                    {/* Invoice Number */}
                    <div className="py-2">
                        <p className="text-sm font-medium text-gray-700 mb-3">Invoice Number</p>
                        <Select
                            mode="multiple"
                            showSearch
                            allowClear
                            className="w-full"
                            placeholder="Select invoice number"
                            options={toSelectOptions(getUniqueValues("invoiceNumber"))}
                            value={pendingFilters.invoiceNumber}
                            onChange={(val) => setPending("invoiceNumber", val)}
                            filterOption={searchFilter}
                            optionRender={multiOptionRender(pendingFilters.invoiceNumber)}
                            menuItemSelectedIcon={null}
                        />
                    </div>

                </div>
            </Drawer>
        </>
    );
};

export default InvoiceTable;
