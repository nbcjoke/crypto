export interface CryptoDetailsState {
  cryptoDetails:
    | {
        name: string;
        changePercent24Hr: string;
        explorer: string;
        priceUsd: string;
        rank: string;
        supply: string;
        symbol: string;
        volumeUsd24Hr: string;
        vwap24Hr: string;
        maxSupply: string;
      }
    | undefined;
  isLoading: boolean;
  errors: null | string;
}

export enum CryptoDetailsActionTypes {
  GET_CRYPTO_DETAILS_REQUEST = "GET_CRYPTO_DETAILS_REQUEST",
  GET_CRYPTO_DETAILS_SUCCESS = "GET_CRYPTO_DETAILS_SUCCESS",
  GET_CRYPTO_DETAILS_FAIL = "GET_CRYPTO_DETAILS_FAIL",
}

interface GetCryptoDetailsRequestAction {
  type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_REQUEST;
}

interface GetCryptoDetailsSuccessAction {
  type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_SUCCESS;
  payload: {
    name: string;
    changePercent24Hr: string;
    explorer: string;
    priceUsd: string;
    rank: string;
    supply: string;
    symbol: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
    maxSupply: string;
  };
}

interface GetCryptoDetailsFailAction {
  type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_FAIL;
  payload: string;
}

export type CryptoDetailsAction =
  | GetCryptoDetailsRequestAction
  | GetCryptoDetailsSuccessAction
  | GetCryptoDetailsFailAction;
