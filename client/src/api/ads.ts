import { api } from "./axios";
import type { AdsResponse } from "./ads.types";

interface AdsQueryParams {
    page?: number;
    category?: string;
    status?: string;
    minPrice?: number | string;
    maxPrice?: number | string;
}

export const AdsApi = {
    async getAds(params: AdsQueryParams) {
        const res = await api.get<AdsResponse>("/ads", {
            params
        });

        return res.data;
    }
};
