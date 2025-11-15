import { api } from "./axios";
import type { AdsResponse } from "./ads.types";

export const AdsApi = {
    async getAds(page: number = 1) {
        const res = await api.get<AdsResponse>("/ads", {
            params: { page }
        });

        return res.data;
    }
};
