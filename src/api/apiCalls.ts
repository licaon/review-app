import axios from 'axios';

import { POST_FIRM_DATA } from 'constants/api';
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
    const formData = new FormData();
    formData.set('score', String(myReview.reviewScore));
    formData.set('companyId', firmId);
    formData.set('comment', myReview.reviewComment || '');
    formData.set('userName', myReview.reviewerName || '');

    const response = await axios.post(POST_FIRM_DATA,
        formData,
        {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-HITTA-DEVICE-NAME': 'MOBILE_WEB',
            'X-HITTA-SHARED-IDENTIFIER': 15188693697264027,

        }
    });
    if (/'^2'/.test(String(response.status))) {
        Object.assign(availableReview, { myReview });
    }
    return { success: true }
};