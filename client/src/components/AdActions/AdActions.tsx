import { useState } from "react";
import { Stack, Button } from "@mui/material";
import { AdsApi } from "../../api/ads";
import type { Ad } from "../../api/ads.types";
import { RejectModal } from "./RejectModal";

interface Props {
    id: number;
    status: string;
    onUpdated: (ad: Ad) => void;
}

export const AdActions = ({ id, status, onUpdated }: Props) => {
    const [rejectOpen, setRejectOpen] = useState(false);

    const handleApprove = async () => {
        const res = await AdsApi.approve(id);
        onUpdated(res.ad);
    };

    const handleRejectSubmit = async (reason: string, comment?: string) => {
        const res = await AdsApi.reject(id, reason, comment ?? "");
        onUpdated(res.ad);
    };

    const handleRequestChanges = async () => {
        const res = await AdsApi.requestChanges(
            id,
            "Некорректное описание",
            "Пожалуйста, исправьте детали"
        );
        onUpdated(res.ad);
    };

    return (
        <>
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
                    onClick={() => setRejectOpen(true)}
                    disabled={status === "rejected"}
                >
                    Отклонить
                </Button>

                <Button
                    variant="contained"
                    color="warning"
                    onClick={handleRequestChanges}
                >
                    Доработка
                </Button>
            </Stack>

            <RejectModal
                open={rejectOpen}
                onClose={() => setRejectOpen(false)}
                onSubmit={handleRejectSubmit}
            />
        </>
    );
};
