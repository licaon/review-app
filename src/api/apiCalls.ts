import { setTimeout } from 'timers';
import { reviews } from 'mockedData/reviews';
import { async } from 'q';
import { IMyReview } from 'components/MyReview/MyReview';

let availableReview = (() => reviews)();

export const getFirmReviews = async (firmId:string) => {
    console.log(`Getting reviews for: ${firmId}`)
    await setTimeout(() => {}, 500);
    return availableReview;
}

export const saveMyReview = async ({ firmId, myReview }: { firmId: string, myReview: IMyReview }) => {
    console.log(`Save my review for: ${firmId}`)
    await setTimeout(() => {}, 500)
    Object.assign(availableReview, { myReview });
    return { success: true }
}