import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
    typography: { fontFamily: 'Roboto, sans-serif' },
    palette: {
        primary: {
            main: '#0968f6',
            light: '#4d94ff',
            dark: '#0040c3'
        },
        secondary: {
            main: '#f57c00',
            light: '#ffad42',
            dark: '#bb4d00'
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff'
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#666666'
        }
    },
    shape: { borderRadius: 5 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 5,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                    borderBottom: '1px solid #eee',
                    color: '#000',
                },
            },
        },
        MuiContainer: {
            defaultProps: { maxWidth: 'lg' },
        },
    },
});