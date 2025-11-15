// import { useState } from "react";
// import {
//     Box,
//     Typography,
//     Button,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     SelectChangeEvent,
//     Stack
// } from "@mui/material";
// import { ageRatingFilter, countryFilter, yearFilter } from "../../utils/utils";
//
// export interface FilterValues {
//     year?: string;
//     country?: string;
//     ageRating?: string;
// }
//
// interface FiltersProps {
//     onFiltersChange: (filters: FilterValues) => void;
//     onPageReset: () => void;
// }
//
// const Filters = ({ onFiltersChange, onPageReset }: FiltersProps) => {
//     const [filters, setFilters] = useState<FilterValues>({});
//
//     const handleFilterChange = (filterName: keyof FilterValues, value: string) => {
//         const newFilters = {
//             ...filters,
//             [filterName]: value || undefined,
//         };
//
//         setFilters(newFilters);
//         onFiltersChange(newFilters);
//         onPageReset();
//     };
//
//     const resetFilters = () => {
//         setFilters({});
//         onFiltersChange({});
//         onPageReset();
//     };
//
//     return (
//         <Box sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 2 }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>
//                 Фильтры
//             </Typography>
//
//             <Stack spacing={2}>
//                 <FormControl fullWidth size="small">
//                     <InputLabel>Год выпуска</InputLabel>
//                     <Select
//                         value={filters.year || ""}
//                         label="Год выпуска"
//                         onChange={(e: SelectChangeEvent) =>
//                             handleFilterChange("year", e.target.value)
//                         }
//                     >
//                         <MenuItem value="">
//                             <em>Не выбрано</em>
//                         </MenuItem>
//                         {yearFilter.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//
//                 <FormControl fullWidth size="small">
//                     <InputLabel>Страна</InputLabel>
//                     <Select
//                         value={filters.country || ""}
//                         label="Страна"
//                         onChange={(e: SelectChangeEvent) =>
//                             handleFilterChange("country", e.target.value)
//                         }
//                     >
//                         <MenuItem value="">
//                             <em>Не выбрано</em>
//                         </MenuItem>
//                         {countryFilter.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//
//                 <FormControl fullWidth size="small">
//                     <InputLabel>Возрастной рейтинг</InputLabel>
//                     <Select
//                         value={filters.ageRating || ""}
//                         label="Возрастной рейтинг"
//                         onChange={(e: SelectChangeEvent) =>
//                             handleFilterChange("ageRating", e.target.value)
//                         }
//                     >
//                         <MenuItem value="">
//                             <em>Не выбрано</em>
//                         </MenuItem>
//                         {ageRatingFilter.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//
//                 <Button
//                     onClick={resetFilters}
//                     variant="outlined"
//                     color="primary"
//                     sx={{ mt: 1 }}
//                 >
//                     Сбросить фильтры
//                 </Button>
//             </Stack>
//         </Box>
//     );
// };
//
// export default Filters;