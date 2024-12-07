import React from 'react';
import { useReactTable } from '@tanstack/react-table'

const DataTable = () => {
    // Define columns
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the key in the data
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Country',
                accessor: 'country',
            },
        ],
        []
    );

    // Define data
    const data = React.useMemo(
        () => [
            { name: 'John Doe', age: 28, country: 'USA' },
            { name: 'Jane Smith', age: 34, country: 'UK' },
            { name: 'Kumar Patel', age: 45, country: 'India' },
            { name: 'Emily Johnson', age: 22, country: 'Canada' },
        ],
        []
    );

    // Use the useTable hook
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useReactTable(
        {
            columns,
            data,
        },
        useSortBy // Hook to enable sorting
    );

    return (
        <div className="overflow-x-auto">
            <table {...getTableProps()} className="table-auto w-full border-collapse">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="px-4 py-2 border-b cursor-pointer"
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} className="px-4 py-2 border-b">
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;