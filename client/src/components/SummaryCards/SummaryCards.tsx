import { Box, Card, CardContent, Typography } from "@mui/material";

export function SummaryCards({ data }: { data: any }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 3
            }}
        >
            <Card sx={{ flex: "1 1 100px" }}>
                <CardContent>
                    <Typography variant="subtitle1">Проверено</Typography>
                    <Typography variant="h5">{data.totalReviewed}</Typography>
                </CardContent>
            </Card>

            <Card sx={{ flex: "1 1 250px" }}>
                <CardContent>
                    <Typography variant="subtitle1">Одобрено</Typography>
                    <Typography variant="h5">{data.approvedPercentage}%</Typography>
                </CardContent>
            </Card>

            <Card sx={{ flex: "1 1 250px" }}>
                <CardContent>
                    <Typography variant="subtitle1">Отклонено</Typography>
                    <Typography variant="h5">{data.rejectedPercentage}%</Typography>
                </CardContent>
            </Card>

            <Card sx={{ flex: "1 1 100px" }}>
                <CardContent>
                    <Typography variant="subtitle1" >Ср. время</Typography>
                    <Typography variant="h5">{data.averageReviewTime} мин</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
