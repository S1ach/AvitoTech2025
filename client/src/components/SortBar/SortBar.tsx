import { Box, TextField, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

interface SortProps {
    sortBy: string;
    sortOrder: string;
    onChange: (patch: { sortBy?: string; sortOrder?: string; search?: string }) => void;
}

export const SortBar = ({ sortBy, sortOrder, onChange }: SortProps) => {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearch = useDebounce(searchValue, 500);

    useEffect(() => {
        onChange({ search: debouncedSearch || undefined });
    }, [debouncedSearch]);

    return (
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>


            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Сортировка</InputLabel>
                <Select
                    value={sortBy}
                    label="Сортировка"
                    onChange={(e) => onChange({ sortBy: e.target.value })}
                >
                    <MenuItem value="createdAt">По дате</MenuItem>
                    <MenuItem value="price">По цене</MenuItem>
                    <MenuItem value="priority">По приоритету</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Порядок</InputLabel>
                <Select
                    value={sortOrder}
                    label="Порядок"
                    onChange={(e) => onChange({ sortOrder: e.target.value })}
                >
                    <MenuItem value="asc">Возрастание</MenuItem>
                    <MenuItem value="desc">Убывание</MenuItem>
                </Select>
            </FormControl>

            <TextField
                size="small"
                label="Поиск"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{ flexGrow: 1, maxWidth: "100%" }}
            />
        </Box>
    );
};
