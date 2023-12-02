import { Dispatch, SetStateAction } from "react";
import { Filters } from "../../interfaces/filters";

export interface searchAndFilterTypes {
    filters : Filters;
    setFilters: Dispatch<SetStateAction<Filters>>
}