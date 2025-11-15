import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export interface ListingCardProps {
    id: string;
    title: string;
    price: number;
    category: string;
    date: string;
    image?: string | null;
}

export const ListingCard = ({
                                id,
                                title,
                                price,
                                category,
                                date,
                                image
                            }: ListingCardProps) => {
    return (
        <Card
            variant="outlined"
            sx={{
                display: "flex",
                gap: 2,
                p: 2,
                alignItems: "center",
                borderRadius: 2
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


            <CardContent sx={{ flex: 1, p: 0 }}>
                <Typography variant="subtitle1" fontWeight={600}>
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
                    <span>{price.toLocaleString()} ₽</span>
                    <span>{category}</span>
                    <span>{date}</span>
                </Box>
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
