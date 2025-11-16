export interface Ad {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    categoryId: number;
    priority: string;
    createdAt: string;
    updatedAt: string;
    images: string[];
    status: "pending" | "approved" | "rejected";
}

export interface AdsPagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

export interface AdsResponse {
    ads: Ad[];
    pagination: AdsPagination;
}
