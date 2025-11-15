import { useParams } from 'react-router-dom';

export function ItemPage() {
    const { id } = useParams<{ id: string }>();

    return <div>Детальная страница объявления {id}</div>;
}
