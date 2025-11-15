import { useEffect, useState } from "react";
import { Box, Typography, Pagination, Stack, CircularProgress } from "@mui/material";

import type { Ad } from "../../api/ads.types";
import { AdsApi } from "../../api/ads";
import { ListingCard } from "../../components/ListingCard/ListingCard";

export function ListPage() {
    const [items, setItems] = useState<Ad[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);


    const loadPage = (pageNumber: number) => {
        setLoading(true);

        AdsApi.getAds(pageNumber)
            .then((data) => {
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

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        if (value === page) return;
        setPage(value);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "600" }}>
                Список объявлений:
            </Typography>

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
                                image={item.images?.length ? item.images[0] : null}
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

                    <Typography sx={{ opacity: 0.8, mt:3}} textAlign="center">
                        Всего: {totalItems} объявлений
                    </Typography>
                </>
            )}
        </Box>
    );
}
