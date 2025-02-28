export interface Project {
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    slug?: {
        current: string;
    }
    image: {
    asset: {
        url: string;
        };
    };
    position?: number;
}

export interface PrevNext {
    next?: string;
    prev?: string

}
