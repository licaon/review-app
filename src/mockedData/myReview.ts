interface IReview {
    reviewScore: number,
    reviewName: string,
    reviewComment: string
    reviewTime?: number,
}

let myReview: IReview = {
    reviewScore: 0,
    reviewName: '',
    reviewComment: '',
};

export const setMyReview = (data: IReview) => myReview = Object.assign({}, data, { reviewTime: (new Date()).getTime() });
export const getMyReview = () => myReview;