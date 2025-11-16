import axios from "axios";

export type StatsPeriod = "today" | "week" | "month";

export interface StatsSummary {
    totalReviewed: number;
    totalReviewedToday: number;
    totalReviewedThisWeek: number;
    totalReviewedThisMonth: number;
    approvedPercentage: number;
    rejectedPercentage: number;
    requestChangesPercentage: number;
    averageReviewTime: number;
}

export interface ActivityPoint {
    date: string;
    approved: number;
    rejected: number;
    requestChanges: number;
}

export type CategoriesMap = Record<string, number>;

const API = "/api/v1";

export const StatsApi = {
    async getSummary(period: StatsPeriod): Promise<StatsSummary> {
        const res = await axios.get(`${API}/stats/summary`, {
            params: { period }
        });
        return res.data;
    },

    async getActivity(period: StatsPeriod): Promise<ActivityPoint[]> {
        const res = await axios.get(`${API}/stats/chart/activity`, {
            params: { period }
        });
        return res.data;
    },

    async getCategories(period: StatsPeriod): Promise<CategoriesMap> {
        const res = await axios.get(`${API}/stats/chart/categories`, {
            params: { period }
        });
        return res.data;
    }
};
