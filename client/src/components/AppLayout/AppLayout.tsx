import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../../config/muiTheme';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function AppLayout() {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
                    <Outlet />
                </Container>

                <Footer/>
            </Box>
        </ThemeProvider>
    );
}