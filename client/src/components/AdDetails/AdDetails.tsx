import { Card, CardContent, Typography } from "@mui/material";

interface Seller {
    name: string;
    rating?: string;
    totalAds?: number;
    registeredAt?: string;
}

interface ItemDetails {
    description: string;
    seller?: Seller;
}

interface Props {
    item: ItemDetails;
}

export const AdDetails = ({ item }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography fontWeight={600} sx={{ mb: 1, fontSize: '20' }}>
                    Полное описание
                </Typography>

                <Typography sx={{ mb: 1 }}>{item.description}</Typography>



                {/*<Typography>*/}
                {/*    Продавец: {item.seller?.name} {item.seller?.rating && `| ⭐ ${item.seller.rating}`}*/}
                {/*</Typography>*/}

                {/*{item.seller && (*/}
                {/*    <Typography>*/}
                {/*        {item.seller.totalAds} объявлений | На сайте:{" "}*/}
                {/*        {item.seller.registeredAt &&*/}
                {/*            new Date(item.seller.registeredAt).getFullYear()}*/}
                {/*    </Typography>*/}
                {/*)}*/}
            </CardContent>
        </Card>
    );
};
