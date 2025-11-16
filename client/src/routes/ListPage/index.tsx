import { useEffect, useState } from "react";
import { Box, Typography, Pagination, Stack, CircularProgress } from "@mui/material";
import Filter from "../../components/Filter/Filter";
import { SortBar } from "../../components/SortBar/SortBar";


import type { Ad } from "../../api/ads.types";
import { AdsApi } from "../../api/ads";
import { ListingCard } from "../../components/ListingCard/ListingCard";
export function ListPage() {
    const [items, setItems] = useState<Ad[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState<Filter>({});

    const loadPage = (pageNumber: number) => {
        setLoading(true);

        AdsApi.getAds({
            page: pageNumber,
            ...filters
        })
            .then((data) => {

                console.log("ADS API RESPONSE:", data);

                setItems(data.ads);
                setTotalPages(data.pagination.totalPages);
                setTotalItems(data.pagination.totalItems);
            })
            .finally(() => {
                setLoading(false);
            });
    };



    useEffect(() => {
        loadPage(page);
    }, [page]);

    useEffect(() => {
        setPage(1);
        loadPage(1);
    }, [filters]);

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        if (value !== page) setPage(value);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Список объявлений:
            </Typography>

            <SortBar
                sortBy={filters.sortBy || "createdAt"}
                sortOrder={filters.sortOrder || "desc"}
                onChange={(patch) =>
                    setFilters((prev) => ({ ...prev, ...patch }))
                }
            />

            <Box sx={{ display: "flex", gap: 3 }}>
                <Box sx={{ flex: 1 }}>
                    {loading && !items.length ? (
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {items.map((item) => (
                                    <ListingCard
                                        key={item.id}
                                        id={String(item.id)}
                                        title={item.title}
                                        price={item.price}
                                        category={item.category}
                                        date={item.createdAt}
                                        status={item.status}
                                        priority={item.priority}
                                        image={item.images?.[0] || null}
                                    />
                                ))}
                            </Box>

                            {totalPages > 1 && (
                                <Stack sx={{ mt: 3 }} alignItems="center">
                                    <Pagination
                                        count={totalPages}
                                        page={page}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Stack>
                            )}

                            <Typography sx={{ mt: 3 }} textAlign="center">
                                Всего: {totalItems} объявлений
                            </Typography>
                        </>
                    )}
                </Box>

                <Box sx={{ width: 300 }}>
                    <Filter
                        onFiltersChange={(f) =>
                            setFilters((prev) => ({ ...prev, ...f }))
                        }
                        onPageReset={() => setPage(1)}
                    />
                </Box>
            </Box>
        </Box>
    );
}
