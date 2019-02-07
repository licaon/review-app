import { reviews } from 'mockedData/reviews';
import { IMyReview } from 'components/MyReview/MyReview';

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateRandomNumber = (min_value: number , max_value:number) => {
    let random_number = Math.random() * (max_value - min_value) + min_value;
    return Math.floor(random_number);
};

let availableReview = (() => reviews)();

export const getFirmReviews = async (firmId:string) => {
    const waitFor = generateRandomNumber(500,2000);
    console.log(`Getting reviews for: ${firmId}, it will take ${waitFor}ms`);
    await timeout(waitFor);
    return availableReview;
};

export const saveMyReview = async ({ firmId, myReview }: { firmId: string, myReview: IMyReview }) => {
    const waitFor = generateRandomNumber(500,2000);
    console.log(`Save my review for: ${firmId}, it will take: ${waitFor}ms`);
    await timeout(waitFor);
    Object.assign(availableReview, { myReview });
    return { success: true }
};