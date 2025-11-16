import { Avatar, Card, CardContent, Typography, Divider } from "@mui/material";

interface Seller {
    name: string;
    rating: string;
    totalAds: number;
    registeredAt: string;
}

interface ProfileProps {
    seller: Seller;
}

export const Profile = ({ seller }: ProfileProps) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography fontWeight={600} sx={{ mb: 1,  display: "flex", alignItems: "center", gap: '10px' }}>
                    <Avatar />
                    Продавец: {seller.name}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {seller.rating && (
                    <Typography sx={{ mb: 1 }}>
                        ⭐ Рейтинг: {seller.rating}
                    </Typography>
                )}

                <Typography sx={{ mb: 1 }}>
                    Объявлений: {seller.totalAds}
                </Typography>

                <Typography sx={{ opacity: 0.8 }}>
                    На сайте с {new Date(seller.registeredAt).getFullYear()} года
                </Typography>
            </CardContent>
        </Card>
    );
};
