export const getPaginatedRows = (rows: any, pageSize: number, pageIndex: number) => {
    const paginatedRows = [];
    for (let i = pageIndex * pageSize; i < (pageIndex + 1) * pageSize; i++) {
        if (rows[i] !== undefined) {
            paginatedRows.push(rows[i]);
        }
    }

    return paginatedRows;
};
