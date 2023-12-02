export const today = new Date();
export const oneMonthAgo = new Date(new Date().setDate(today.getDate()-30));
export const DEFAULT_FILTERS_VALUE = {
    isActive: true,
    loanAmount: 100,
    date: {
        startDate: oneMonthAgo,
        endDate: today
    }
}