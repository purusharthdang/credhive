import { SetStateAction, Dispatch } from "react"

export interface DashboardHeaderTypes {
    setIsFilterPanelOpen: Dispatch<SetStateAction<boolean>>
    setSearchText: Dispatch<SetStateAction<string>>
    searchText: string
    isFilteredResults: boolean
    resetFilters: () => void;
}