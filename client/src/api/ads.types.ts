export interface Ad {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    status: string;
    createdAt: string;

    images: string[];

    seller: {
        id: number;
        name: string;
        avatar?: string;
        rating: number;
    };

    moderationHistory: Array<{
        id: number;
        action: "approved" | "rejected" | "changesRequested";
        moderator: string;
        comment?: string;
        timestamp: string;
    }>;
}
