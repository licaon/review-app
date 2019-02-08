export interface Match {
    params: MatchParams;
    isExact: boolean;
    path: string;
    url: string;
}

export interface MatchParams {
    firmId: string;
}
