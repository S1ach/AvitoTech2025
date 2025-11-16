import { Card, CardContent } from "@mui/material";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import type { CategoriesMap } from "../../api/stats";

interface Props {
    categories: CategoriesMap;
}

export function CategoryChart({ categories }: Props) {
    const data = Object.entries(categories).map(([name, value]) => ({
        name,
        value
    }));

    const colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336", "#9c27b0", "#00bcd4"];

    return (
        <Card>
            <CardContent>

                <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
                            {data.map((_, i) => (
                                <Cell key={i} fill={colors[i % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
