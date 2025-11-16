import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Stack } from "@mui/material";

import { AdsApi } from "../../api/ads";
import type { Ad } from "../../api/ads.types";

import { AdGallery } from "../../components/AdGallery/AdGallery";
import { ModerationHistory } from "../../components/ModerationHistory/ModerationHistory";
import { AdDetails } from "../../components/AdDetails/AdDetails";
import { AdActions } from "../../components/AdActions/AdActions";
import { Profile } from "../../components/Profile/Profile";

export function ItemPage() {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Ad | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        AdsApi.getAd(id)
            .then((data) => setItem(data))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ p: 3, textAlign: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!item) {
        return (
            <Box sx={{ p: 3 }}>
                <Typography variant="h5">Объявление не найдено</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ mb: 1, fontWeight: 300, fontSize: 16 }}>
                Объявления
            </Typography>

            <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, fontSize: 32 }}>
                Детальная страница объявления: #{item.id}
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>

                <Box sx={{ flex: 1 }}>
                    <Stack spacing={3}>
                        <AdGallery images={item.images} />
                        <AdDetails item={item} />
                        <ModerationHistory history={item.moderationHistory} />
                        <AdActions
                            id={item.id}
                            status={item.status}
                            onUpdated={(updated) => setItem(updated)}
                        />
                    </Stack>
                </Box>
                
                <Box sx={{ width: 280, flexShrink: 0 }}>
                    <Profile seller={item.seller} />
                </Box>

            </Box>
        </Box>
    );
}
