export interface ITableOptions {
    pageSize?: number;
    firstPage?: number;
    manualSorting?: boolean;
    manualPagination?: boolean;
}

export interface IUseTableProps {
    headers: any[];
    rows: any[];
    onPageChange?: (pageIndex: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    onColumnSorting?: (column: number) => void;
    options?: ITableOptions;
}

export type UseTableReturnValue = {
    rows: any[];
    pageIndex: number;
    setPageIndex: (index: number) => void;
    setPageSize: (index: number) => void;
    nextPage: () => void;
    prevPage: () => void;
};