import { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { useStats } from "../../hooks/useStats";
import type { StatsPeriod } from "../../api/stats";

import { PeriodSelector } from "../../components/PeriodSelector/PeriodSelector";
import { SummaryCards } from "../../components/SummaryCards/SummaryCards";
import { ActivityChart } from "../../components/ActivityChart/ActivityChart";
import { CategoryChart } from "../../components/CategoryChart/CategoryChart";

export function StatsPage() {
    const [period, setPeriod] = useState<StatsPeriod>("today");

    const { summary, activity, categories, loading } = useStats(period);

    if (loading || !summary) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" mb={3}>
                Статистика
            </Typography>

            <PeriodSelector period={period} onChange={setPeriod} />

            <SummaryCards data={summary} />

            <Typography variant="h6" sx={{ mb: 2, fontSize:"16px"}}>
                График активности
            </Typography>
            <ActivityChart data={activity} />

            <Typography variant="h6" sx={{ mb: 2, fontSize:"16px", mt: 4 }}>
                Распределение категорий
            </Typography>
            <CategoryChart categories={categories} />
        </Box>
    );
}
