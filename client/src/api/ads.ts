import { api } from "./axios";
import type { AdsResponse, Ad } from "./ads.types";

export const AdsApi = {
    async getAds(params: any) {
        const res = await api.get<AdsResponse>("/ads", { params });
        return res.data;
    },

    async getAd(id: number | string) {
        const res = await api.get<Ad>(`/ads/${id}`);
        return res.data;
    },

    async approve(id: number | string) {
        const res = await api.post(`/ads/${id}/approve`);
        return res.data;
    },

    async reject(id: number | string, reason: string, comment?: string) {
        const res = await api.post(`/ads/${id}/reject`, { reason, comment });
        return res.data;
    },

    async requestChanges(id: number | string, reason: string, comment?: string) {
        const res = await api.post(`/ads/${id}/request-changes`, { reason, comment });
        return res.data;
    }
};
