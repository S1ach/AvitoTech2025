import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { StatsPeriod } from "../../api/stats";

interface Props {
    period: StatsPeriod;
    onChange: (v: StatsPeriod) => void;
}

export function PeriodSelector({ period, onChange }: Props) {
    return (
        <ToggleButtonGroup
            exclusive
            value={period}
            onChange={(_, v) => v && onChange(v)}
            sx={{ mb: 3 }}
        >
            <ToggleButton value="today">Сегодня</ToggleButton>
            <ToggleButton value="week">Неделя</ToggleButton>
            <ToggleButton value="month">Месяц</ToggleButton>
        </ToggleButtonGroup>
    );
}
