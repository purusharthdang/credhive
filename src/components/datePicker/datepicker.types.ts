import { Filters } from "../../interfaces/filters";

export interface DatePickerTypes {
    onDateRangeChange: (startDate: Date, endDate: Date) => void;
    defaultValue: Filters['date'];
}