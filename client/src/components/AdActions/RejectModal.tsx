import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
    Box,
    Typography
} from "@mui/material";
import { useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (reason: string, comment?: string) => void;
}

const REASONS = [
    "Запрещенный товар",
    "Неверная категория",
    "Некорректное описание",
    "Проблемы с фото",
    "Подозрение на мошенничество"
];

export const RejectModal = ({ open, onClose, onSubmit }: Props) => {
    const [selected, setSelected] = useState("");
    const [custom, setCustom] = useState("");

    const handleSelect = (reason: string) => {
        setSelected(reason);
        setCustom("");
    };

    const handleSubmit = () => {
        const finalReason = selected === "custom" ? custom : selected;
        if (!finalReason.trim()) return;

        onSubmit(finalReason);
        setSelected("");
        setCustom("");
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Отклонение</DialogTitle>

            <DialogContent>
                <Typography sx={{ mb: 1 }}>Причина:</Typography>

                <Box sx={{ border: "1px solid #ccc", borderRadius: 1, p: 2 }}>
                    <FormGroup>
                        {REASONS.map((reason) => (
                            <FormControlLabel
                                key={reason}
                                control={
                                    <Checkbox
                                        checked={selected === reason}
                                        onChange={() => handleSelect(reason)}
                                    />
                                }
                                label={reason}
                            />
                        ))}

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selected === "custom"}
                                    onChange={() => {
                                        setSelected("custom");
                                        setCustom("");
                                    }}
                                />
                            }
                            label="Другое:"
                        />

                        {selected === "custom" && (
                            <TextField
                                size="small"
                                fullWidth
                                sx={{ mt: 1 }}
                                placeholder="Введите свою причину..."
                                value={custom}
                                onChange={(e) => setCustom(e.target.value)}
                            />
                        )}
                    </FormGroup>
                </Box>
            </DialogContent>

            <DialogActions sx={{ pr: 2, pb: 2 }}>
                <Button onClick={onClose} variant="contained">Отмена</Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleSubmit}
                    disabled={!selected && !custom}
                >
                    Отправить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
