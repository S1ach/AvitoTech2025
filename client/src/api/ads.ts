import { api } from "./axios";
import type { AdsResponse, Ad } from "./ads.types";

export interface AdsQueryParams {
    page?: number;
    limit?: number;
    status?: string | string[];
    categoryId?: number | string;
    minPrice?: number | string;
    maxPrice?: number | string;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
}

export const AdsApi = {
    async getAds(params: AdsQueryParams) {
        const res = await api.get<AdsResponse>("/ads", { params });
        return res.data;
    },

    async getAd(id: string | number) {
        const res = await api.get<Ad>(`/ads/${id}`);
        return res.data;
    },

    async approve(id: string | number) {
        const res = await api.post<{ message: string; ad: Ad }>(`/ads/${id}/approve`);
        return res.data;
    },

    async reject(id: string | number, reason: string, comment?: string) {
        const res = await api.post<{ message: string; ad: Ad }>(
            `/ads/${id}/reject`,
            { reason, comment }
        );
        return res.data;
    },

    async requestChanges(id: string | number, reason: string, comment?: string) {
        const res = await api.post<{ message: string; ad: Ad }>(
            `/ads/${id}/request-changes`,
            { reason, comment }
        );
        return res.data;
    }
};
