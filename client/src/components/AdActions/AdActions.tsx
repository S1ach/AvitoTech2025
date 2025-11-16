import { Stack, Button } from "@mui/material";
import { AdsApi } from "../../api/ads";
import type { Ad } from "../../api/ads.types";

interface Props {
    id: number;
    status: string;
    onUpdated: (ad: Ad) => void;
}

export const AdActions = ({ id, status, onUpdated }: Props) => {
    const handleApprove = async () => {
        const res = await AdsApi.approve(id);
        onUpdated(res.ad);
    };

    const handleReject = async () => {
        const res = await AdsApi.reject(id, "Запрещенный товар", "Комментарий модератора");

        onUpdated(res.ad);
    };

    const handleRequestChanges = async () => {
        const res = await AdsApi.reject(id, "Запрещенный товар", "Комментарий модератора");
        onUpdated(res.ad);
    };

    return (
        <Stack direction="row" spacing={2}>
            <Button
                variant="contained"
                color="success"
                onClick={handleApprove}
                disabled={status === "approved"}
            >
                Одобрить
            </Button>

            <Button
                variant="contained"
                color="error"
                onClick={handleReject}
                disabled={status === "rejected"}
            >
                Отклонить
            </Button>

            <Button
                variant="outlined"
                color="warning"
                onClick={handleRequestChanges}
            >
                Доработка
            </Button>
        </Stack>
    );
};
