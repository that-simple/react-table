import { useMemo, useState } from "react";
import { IUseTableProps, UseTableReturnValue } from "./useTable.types.ts";
import { runMiddlewares } from "../middleware/Middleware.ts";
import { getPaginatedRows } from "../helpers/rows.ts";

export const useTable = ({ rows, options }: IUseTableProps): UseTableReturnValue => {
    const [pageIndex, setPageIndex] = useState(options?.firstPage ?? 0);
    const [pageSize, setPageSize] = useState(options?.pageSize ?? 10);

    const paginatedRows = useMemo(
        () => (options?.manualPagination ? rows : getPaginatedRows(rows, pageSize, pageIndex)),
        [rows, pageSize, pageIndex, options?.manualPagination]
    );

    const nextPage = () => {
        const maxPage = rows?.length / pageSize;
        if (maxPage > pageIndex + 1) {
            setPageIndex(pageIndex + 1);
        }
    };

    const prevPage = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    };

    return runMiddlewares({
        rows: paginatedRows,
        pageIndex,
        setPageIndex,
        setPageSize,
        nextPage,
        prevPage,
    });
};
