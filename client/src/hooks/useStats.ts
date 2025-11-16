import { useEffect, useState } from "react";
import { StatsApi } from "../api/stats";
import type {
    StatsPeriod,
    StatsSummary,
    ActivityPoint,
    CategoriesMap
} from "../api/stats";

export function useStats(period: StatsPeriod) {
    const [summary, setSummary] = useState<StatsSummary | null>(null);
    const [activity, setActivity] = useState<ActivityPoint[]>([]);
    const [categories, setCategories] = useState<CategoriesMap>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;

        setLoading(true);

        Promise.all([
            StatsApi.getSummary(period),
            StatsApi.getActivity(period),
            StatsApi.getCategories(period)
        ]).then(([s, a, c]) => {
            if (ignore) return;

            setSummary(s);
            setActivity(a);
            setCategories(c);
            setLoading(false);
        });

        return () => {
            ignore = true;
        };
    }, [period]);

    return { summary, activity, categories, loading };
}
