import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Filter } from "src/models/filter";

const filterSlice = createSlice({
    name: "filter",
    initialState: "all" as Filter,
    reducers: {
        setFilter: (_state, action: PayloadAction<Filter>) => action.payload,
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
