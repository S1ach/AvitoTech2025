import { Box, Button, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

import imageError from "../../assets/images/ponchik-1000.webp";

export function ErrorPage() {
    const error = useRouteError();

    let title = "Что-то пошло не так";
    let description = "Произошла непредвиденная ошибка. Попробуй обновить страницу.";
    let statusCode: number | undefined;

    if (isRouteErrorResponse(error)) {
        statusCode = error.status;
        if (error.status === 404) {
            title = "Страница не найдена";
            description = "Похоже, такой страницы нет или она была удалена.";
        }
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                flexDirection: "column"
            }}
        >
            <Box
                component="img"
                src={imageError}
                alt="Ошибка"
                sx={{
                    maxWidth: 500,
                    mb: 5,
                    width: "100%"
                }}
            />

            <Box
                sx={{
                    maxWidth: 480,
                    textAlign: "center"
                }}
            >
                {statusCode && (
                    <Typography
                        variant="h1"
                        sx={{ fontSize: 64, fontWeight: 700, mb: 1 }}
                    >
                        {statusCode}
                    </Typography>
                )}

                <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {title}
                </Typography>

                <Typography sx={{ mb: 3, opacity: 0.8 }}>
                    {description}
                </Typography>

                <Button
                    variant="contained"
                    component={Link}
                    to="/list"
                    sx={{ mr: 1.5 }}
                >
                    На список объявлений
                </Button>

                <Button
                    variant="outlined"
                    onClick={() => window.location.reload()}
                >
                    Обновить страницу
                </Button>
            </Box>
        </Box>
    );
}