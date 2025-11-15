import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 3,
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid #eee',
                textAlign: 'left'
            }}
        >
            <Typography variant="body2" color="text.secondary">
                Made by Timur Gilmanov 2025 ✺◟(◉ᓀ◉)◞✺
            </Typography>
        </Box>
    );
};

export default Footer;