export function formatRelativeTime(dateStr: string) {
    const date = new Date(dateStr);
    const diffMs = Date.now() - date.getTime();

    const sec = Math.floor(diffMs / 1000);
    const min = Math.floor(sec / 60);
    const hour = Math.floor(min / 60);
    const day = Math.floor(hour / 24);

    if (sec < 60) return "только что";
    if (min < 60) return `${min} мин назад`;
    if (hour < 24) return `${hour} ч назад`;
    if (day < 7) return `${day} дн назад`;

    return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(date);
}
