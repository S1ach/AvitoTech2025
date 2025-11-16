import { Card, CardContent, Typography, Box, Divider} from "@mui/material";
import { moderationActionMap } from "../../utils/moderationActionMap";


interface ModerationEntry {
    id: number;
    moderatorName: string;
    action: string;
    reason?: string;
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

                {history.map((entry) => {

                    return (
                        <Box key={entry.id} sx={{ mb: 1.5 }}>
                            <Divider sx={{ my: 2 }} />
                            <Typography sx={{ fontWeight: "700" }}>
                                Модератор: {entry.moderatorName}
                            </Typography>

                            <Typography>
                                {new Date(entry.timestamp).toLocaleString()}
                            </Typography>

                            <Typography>
                                Статус: {moderationActionMap[entry.action] || entry.action}
                            </Typography>

                            {entry.reason && (
                                <Typography>
                                    Причина: {entry.reason}
                                </Typography>
                            )}

                            {entry.comment && (
                                <Typography sx={{ mt: "2px", opacity: 0.8 }}>
                                    Комментарий: {entry.comment}
                                </Typography>
                            )}
                        </Box>
                    );
                })}
            </CardContent>
        </Card>
    );
};
