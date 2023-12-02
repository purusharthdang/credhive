export interface Filters {
    loanAmount: number;
    date: {
        startDate: Date,
        endDate: Date
    };
    isActive: boolean
}