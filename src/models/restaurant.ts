export interface Restaurant {
    name: string;
    category: string;
    city: string;
    price: Price;
    description: string;
    photoUrl: string;

    reviews: Review[];
    averageStar: number;
}

export interface Review {
    star: Star;
    comment: string;
    userName: string;
    timestamp: Date;
}

export type Price = 1 | 2 | 3 | 4;
export type Star = 0 | 1 | 2 | 3 | 4 | 5;

export class RestaurantImpl implements Restaurant {
    constructor(
        public name: string,
        public category: string,
        public city: string,
        public price: Price,
        public description: string,
        public photoUrl: string,
        public reviews: Review[]
    ) {}

    get averageStar(): Star {
        if (this.reviews.length === 0) {
            return 0;
        }

        let total = 0;
        for (const review of this.reviews) {
            total += review.star;
        }

        return Math.floor(total / this.reviews.length) as Star;
    }
}