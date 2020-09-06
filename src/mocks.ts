import { Restaurant, RestaurantImpl, Review } from './models/restaurant';

/**
 * Generates a set of mock Restaurants
 */
export function generateMockRestaurants(howMany: number): Restaurant[] {
    if (howMany <= 0) {
        throw Error(`expecting a number greater than 0, but got ${howMany}`);
    }
    const restaurants: Restaurant[] = [];

    for (let i = 0; i < howMany; i++) {
        const name =
            getRandomItem(MOCK_DATA.words) +
            ' ' +
            getRandomItem(MOCK_DATA.words);
        const category = getRandomItem(MOCK_DATA.categories);
        const city = getRandomItem(MOCK_DATA.cities);
        const description = getRandomItem(MOCK_DATA.descriptions);
        const price = Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
        const photoID = Math.floor(Math.random() * 22) + 1;
        const photoUrl = 'https://storage.googleapis.com/firestorequickstarts.appspot.com/food_' + photoID + '.png';

        restaurants.push(new RestaurantImpl(
            i,
            name,
            category,
            city,
            price,
            description,
            photoUrl,
            generateMockRatings()
        ));
    }

    return restaurants;
};

/**
 * Adds a set of mock Ratings to the given Restaurant.
 */
export function generateMockRatings(): Review[] {
    const reviews: Review[] = [];
    for (let r = 0; r < 5 * Math.random(); r++) {
        const rating = getRandomItem(MOCK_DATA.ratings);
        reviews.push({
            ...rating,
            userName: 'Bot (Web)',
            timestamp: new Date()
        } as Review);
    }
    return reviews;
};

function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
};

const MOCK_DATA = {
    words: [
        'Bar',
        'Fire',
        'Grill',
        'Drive Thru',
        'Place',
        'Best',
        'Spot',
        'Prime',
        'Eatin\''
    ],
    cities: [
        'Albuquerque',
        'Arlington',
        'Atlanta',
        'Austin',
        'Baltimore',
        'Boston',
        'Charlotte',
        'Chicago',
        'Cleveland',
        'Colorado Springs',
        'Columbus',
        'Dallas',
        'Denver',
        'Detroit',
        'El Paso',
        'Fort Worth',
        'Fresno',
        'Houston',
        'Indianapolis',
        'Jacksonville',
        'Kansas City',
        'Las Vegas',
        'Long Island',
        'Los Angeles',
        'Louisville',
        'Memphis',
        'Mesa',
        'Miami',
        'Milwaukee',
        'Nashville',
        'New York',
        'Oakland',
        'Oklahoma',
        'Omaha',
        'Philadelphia',
        'Phoenix',
        'Portland',
        'Raleigh',
        'Sacramento',
        'San Antonio',
        'San Diego',
        'San Francisco',
        'San Jose',
        'Tucson',
        'Tulsa',
        'Virginia Beach',
        'Washington'
    ],
    categories: [
        'Brunch',
        'Burgers',
        'Coffee',
        'Deli',
        'Dim Sum',
        'Indian',
        'Italian',
        'Mediterranean',
        'Mexican',
        'Pizza',
        'Ramen',
        'Sushi'
    ],
    ratings: [
        {
            star: 1,
            comment: 'Would never eat here again!'
        },
        {
            star: 2,
            comment: 'Not my cup of tea.'
        },
        {
            star: 3,
            comment: 'Exactly okay :/'
        },
        {
            star: 4,
            comment: 'Actually pretty good, would recommend!'
        },
        {
            star: 5,
            comment: 'This is my favorite place. Literally.'
        }
    ],
    descriptions: [
        'A seafood restaurant in Sea World',
        'Bacon is red, steak can be blue',
        `World's leading restaurant of fried chicken`,
        'Open bar every Monday 7am - 9am',
        'The finest Pizzeria in town',
        'Authentic NY-style bagels with real cream cheese',
        `We don't take reservations`,
        'Absolute Guest Satisfaction.',
        'A restaurant with a mission to end world hunger',
        'Great food, big portions and cheap prices',
        'Chic restaurant that offers karaoke'
    ]
};