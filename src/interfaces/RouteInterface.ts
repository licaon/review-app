export interface IMatch {
    params: IMatchParams;
    isExact: boolean;
    path: string;
    url: string;
  }

export interface IMatchParams {
    firmId: string;
}
