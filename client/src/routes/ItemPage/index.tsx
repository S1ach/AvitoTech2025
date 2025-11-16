import { useParams } from 'react-router-dom';
import {Typography} from "@mui/material";

export function ItemPage() {
    const { id } = useParams<{ id: string }>();

    return(<>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "600" }}>Объявления</Typography>
        <h2>Детальная страница объявления: #{id}</h2>
            </>)
}
