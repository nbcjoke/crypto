export interface CryptosRankState {
  cryptosRank: any[];
  isLoading: boolean;
  errors: null | string;
}

export enum CryptosRankActionTypes {
  GET_CRYPTOS_RANK_REQUEST = "GET_CRYPTOS_RANK_REQUEST",
  GET_CRYPTOS_RANK_SUCCESS = "GET_CRYPTOS_RANK_SUCCESS",
  GET_CRYPTOS_RANK_FAIL = "GET_CRYPTOS_RANK_FAIL",
}

interface GetCryptosRankRequestAction {
  type: CryptosRankActionTypes.GET_CRYPTOS_RANK_REQUEST;
}

interface GetCryptosRankSuccessAction {
  type: CryptosRankActionTypes.GET_CRYPTOS_RANK_SUCCESS;
  payload: any[];
}

interface GetCryptosRankFailAction {
  type: CryptosRankActionTypes.GET_CRYPTOS_RANK_FAIL;
  payload: string;
}

export type CryptosRankAction =
  | GetCryptosRankRequestAction
  | GetCryptosRankSuccessAction
  | GetCryptosRankFailAction;
