export class Pagination {
    private readonly pageSize: number;
    private readonly page: number;

    constructor(page: number, pageSize: number, defaultPageSize: number) {
        this.page = 1;
        this.pageSize = defaultPageSize;

        const hasPage = page !== undefined && page !== null && page > 0;
        if (hasPage) {
            this.page = page;
        }

        const hasPageSize =
            pageSize !== undefined && pageSize !== null && pageSize > 0;
        if (hasPageSize) {
            this.pageSize = pageSize;
        }
    }

    getPage(): number {
        return this.page;
    }

    getPageSize(): number {
        return this.pageSize;
    }

    getSkip(): number {
        return this.getPageSize() * (this.getPage() - 1);
    }
}
    
