import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { formatRelativeTime } from "../../utils/formatRelativeTime";
import { statusMap } from "../../utils/statusMap";




export interface ListingCardProps {
    id: string;
    title: string;
    price: number;
    category: string;
    date: string;
    image?: string | null;
    status: string;
}

export const ListingCard = ({
                                id,
                                title,
                                price,
                                category,
                                date,
                                image,
    status,
                            }: ListingCardProps) => {
    const formattedDate = formatRelativeTime(date);

    return (
        <Card
            component={Link}
            to={`/item/${id}`}
            variant="outlined"
            sx={{
                display: "flex",
                gap: 2,
                p: 2,
                alignItems: "center",
                borderRadius: 2,
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                transition: "0.15s",
                "&:hover": {
                    boxShadow: 3
                }
            }}
        >


            {image ? (
                <CardMedia
                    component="img"
                    src={image}
                    alt={category}
                    sx={{
                        width: 200,
                        height: 150,
                        borderRadius: 1,
                        objectFit: "cover"
                    }}
                />
            ) : (
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        backgroundColor: "#eee"
                    }}
                />
            )}


            <CardContent sx={{ flex: 1, p: 0  }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{fontSize: 20}}>
                    {title}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        mt: 0.5,
                        color: "text.secondary",
                        fontSize: 14
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 16,
                            color: "primary.main"
                        }}
                    >
                        {price.toLocaleString()} ₽
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        {category}
                    </Typography>

                    <Typography sx={{ color: "text.secondary" }}>
                        {formattedDate}
                    </Typography>
                </Box>

                <Typography variant="subtitle1" fontWeight={300} sx={{fontSize: 14, color: "text.secondary" }}>
                    Статус: {statusMap[status] || "—"}
                </Typography>
            </CardContent>


            <Button
                variant="contained"
                color="primary"
                component={Link}
                size="large"
                to={`/item/${id}`}
                sx={{ whiteSpace: "nowrap",
                mr: "10px",}}
            >
                Открыть →
            </Button>
        </Card>
    );
};
