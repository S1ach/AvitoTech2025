import { Card, CardContent } from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";
import type { CategoriesMap } from "../../api/stats";

interface Props {
    categories: CategoriesMap;
}

export function CategoryBarChart({ categories }: Props) {
    const data = Object.entries(categories).map(([name, value]) => ({
        name,
        value,
    }));

    const categoryColors: Record<string, string> = {
        "Недвижимость": "#4caf50",
        "Электроника": "#2196f3",
        "Животные": "#ff9800",
        "Транспорт": "#f44336",
        "Услуги": "#9c27b0",
        "Работа": "#00bcd4",
        "Для дома": "#8bc34a",
        "Хобби": "#795548"
    };

    const fallback = [
        "#4caf50",
        "#2196f3",
        "#ff9800",
        "#f44336",
        "#9c27b0",
        "#00bcd4"
    ];

    return (
        <Card>
            <CardContent>


                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            interval={0}
                        />
                        <YAxis />
                        <Tooltip />


                        <Bar dataKey="value" name="Количество">
                            {data.map((entry, i) => (
                                <Cell
                                    key={i}
                                    fill={
                                        categoryColors[entry.name] ??
                                        fallback[i % fallback.length]
                                    }
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
