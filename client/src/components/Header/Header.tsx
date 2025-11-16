import { AppBar, Button, Toolbar, Box, Typography, Link as MUILink } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BarChartIcon from '@mui/icons-material/BarChart';

const Header = () => {
    const location = useLocation();
    const isRoot = location.pathname === '/' || location.pathname === '/list';
    const isStats = location.pathname === '/stats';

    return (
        <AppBar position="static" elevation={0} sx={{ borderBottom: '1px solid #e5e5e5' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MUILink
                        component={RouterLink}
                        to="/list"
                        underline="none"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Typography variant="h6" fontWeight={600} color="primary">
                            AvitoTech
                        </Typography>
                    </MUILink>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {!isRoot && (
                        <Button
                            component={RouterLink}
                            to="/list"
                            variant="contained"
                            size="medium"
                            startIcon={<ArrowBackIcon />}
                            sx={{ minWidth: 'auto', px: 2 }}
                        >
                            К списку
                        </Button>
                    )}

                    {!isStats && (
                        <Button
                            component={RouterLink}
                            to="/stats"
                            variant="contained"
                            size="medium"
                            startIcon={<BarChartIcon />}
                            sx={{ minWidth: 'auto', px: 2 }}
                        >
                            Статистика
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;