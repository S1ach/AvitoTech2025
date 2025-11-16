import { Card, CardContent, Typography, Box } from "@mui/material";

interface ModerationEntry {
    id: number;
    moderatorName: string;
    action: string;
    comment?: string;
    timestamp: string;
}

interface Props {
    history?: ModerationEntry[];
}

export const ModerationHistory = ({ history }: Props) => {
    if (!history?.length) return null;

    return (
        <Card variant="outlined" sx={{ backgroundColor: "#fffbe6" }}>
            <CardContent>
                <Typography fontWeight={600} sx={{ mb: 1 }}>
                    История модерации
                </Typography>

                {history.map((entry) => (
                    <Box key={entry.id} sx={{ mb: 1.5 }}>
                        <Typography>Модератор: {entry.moderatorName}</Typography>
                        <Typography>
                            {new Date(entry.timestamp).toLocaleString()}
                        </Typography>
                        <Typography>Статус: {entry.action}</Typography>
                        {entry.comment && (
                            <Typography sx={{ opacity: 0.8 }}>
                                Комментарий: {entry.comment}
                            </Typography>
                        )}
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};
