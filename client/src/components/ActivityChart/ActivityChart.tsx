import { Card, CardContent } from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    YAxis,
    Legend
} from "recharts";
import type { ActivityPoint } from "../../api/stats";

interface Props {
    data: ActivityPoint[];
}

export function ActivityChart({ data }: Props) {
    return (
        <Card>
            <CardContent>

                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={data}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="approved" name="Одобрено" fill="#4CAF50" />
                        <Bar dataKey="rejected" name="Отклонено" fill="#F44336" />
                        <Bar dataKey="requestChanges" name="На доработку" fill="#FB8C00" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
