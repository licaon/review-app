import { reviews } from 'mockedData/reviews';
import { MyReview } from 'components/MyReview/MyReview';

const timeout = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const generateRandomNumber = (minValue: number , maxValue: number): number => {
    let randomNumber = Math.random() * (maxValue - minValue) + minValue;
    return Math.floor(randomNumber);
};

let availableReview = (() => reviews)();

export const getFirmReviews = async (firmId: string): Promise<any> => {
    const waitFor = generateRandomNumber(500,2000);
    console.log(`Getting reviews for: ${firmId}, it will take ${waitFor}ms`);
    await timeout(waitFor);
    return availableReview;
};

export const saveMyReview = async ({ firmId, myReview }: { firmId: string; myReview: MyReview }): Promise<{ success: boolean }> => {
    const waitFor = generateRandomNumber(500,2000);
    console.log(`Save my review for: ${firmId}, it will take: ${waitFor}ms`);
    await timeout(waitFor);
    Object.assign(availableReview, { myReview });
    return { success: true }
};