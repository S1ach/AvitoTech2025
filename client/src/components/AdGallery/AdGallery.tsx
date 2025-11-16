import { Card, CardContent, Typography, Stack, CardMedia } from "@mui/material";

interface Props {
    images?: string[];
}

export const AdGallery = ({ images }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography fontWeight={600} sx={{ mb: 1 }}>
                    Галерея ({images?.length || 0})
                </Typography>

                <Stack direction="row" spacing={2}>
                    {images?.map((src, i) => (
                        <CardMedia
                            key={i}
                            component="img"
                            src={src}
                            sx={{
                                width: 200,
                                height: 150,
                                objectFit: "cover",
                                borderRadius: 1
                            }}
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};
