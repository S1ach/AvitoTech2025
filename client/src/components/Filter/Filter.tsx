import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Stack
} from "@mui/material";

import { categoryFilter, moderationStatusFilter } from "../../utils/filters";

export interface FilterValues {
    categoryId?: string;
    status?: string;
    minPrice?: string | number;
    maxPrice?: string | number;
}

interface FiltersProps {
    onFiltersChange: (filters: FilterValues) => void;
    onPageReset: () => void;
}

const Filters = ({ onFiltersChange, onPageReset }: FiltersProps) => {
    const [filters, setFilters] = useState<FilterValues>({});

    useEffect(() => {
        const saved = localStorage.getItem("filters");
        if (saved) {
            const parsed = JSON.parse(saved);
            setFilters(parsed);
            onFiltersChange(parsed);
        }
    }, []);

    const update = (patch: Partial<FilterValues>) => {
        setFilters((prev) => {
            const next = { ...prev, ...patch };
            const cleaned = Object.fromEntries(
                Object.entries(next).filter(([_, v]) => v !== undefined && v !== "")
            ) as FilterValues;

            localStorage.setItem("filters", JSON.stringify(cleaned));
            onFiltersChange(cleaned);
            onPageReset();
            return cleaned;
        });
    };

    const resetAll = () => {
        setFilters({});
        onFiltersChange({});
        onPageReset();
        localStorage.removeItem("filters");
    };

    return (
        <Box sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Фильтры
            </Typography>

            <Stack spacing={2}>
                <FormControl fullWidth size="small">
                    <InputLabel>Категория</InputLabel>
                    <Select
                        value={filters.categoryId || ""}
                        label="Категория"
                        onChange={(e) => update({ categoryId: e.target.value })}
                    >
                        {categoryFilter.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value}>
                                {opt.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                    <InputLabel>Статус</InputLabel>
                    <Select
                        value={filters.status || ""}
                        label="Статус"
                        onChange={(e) => update({ status: e.target.value })}
                    >
                        {moderationStatusFilter.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value}>
                                {opt.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    size="small"
                    label="Цена от"
                    type="number"
                    value={filters.minPrice || ""}
                    onChange={(e) => update({ minPrice: e.target.value })}
                />

                <TextField
                    size="small"
                    label="Цена до"
                    type="number"
                    value={filters.maxPrice || ""}
                    onChange={(e) => update({ maxPrice: e.target.value })}
                />

                <Button variant="outlined" onClick={resetAll}>
                    Сбросить
                </Button>
            </Stack>
        </Box>
    );
};

export default Filters;
