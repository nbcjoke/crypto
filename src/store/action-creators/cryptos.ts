import axios from "axios";
import { Dispatch } from "redux";

import { CryptosAction, CryptosActionTypes } from "../../types/cryptos";

// const BASE_URL = "https://api.coincap.io/v2/assets";

export const fetchCryptos = (limit: number, offset: number) => {
  return async (dispatch: Dispatch<CryptosAction>) => {
    try {
      dispatch({ type: CryptosActionTypes.GET_CRYPTOS_REQUEST });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?offset=${offset}&limit=${limit}`
      );
      dispatch({
        type: CryptosActionTypes.GET_CRYPTOS_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({ type: CryptosActionTypes.GET_CRYPTOS_FAIL, payload: "Error" });
    }
  };
};
