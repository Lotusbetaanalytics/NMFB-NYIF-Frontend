import axios from "axios";
import {
  USER_BVN_VALIDATION_FAIL,
  USER_BVN_VALIDATION_REQUEST,
  USER_BVN_VALIDATION_SUCCESS,
  USER_ACCEPT_TERMS_FAIL,
  USER_ACCEPT_TERMS_REQUEST,
  USER_ACCEPT_TERMS_SUCCESS,
  USER_REJECT_TERMS_FAIL,
  USER_REJECT_TERMS_REQUEST,
  USER_REJECT_TERMS_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_BANK_FAIL,
  USER_UPDATE_BANK_REQUEST,
  USER_UPDATE_BANK_SUCCESS,
} from "../constants/bvnConstants";

export const validateBvn = (bvn) => async (dispatch) => {
  try {
    dispatch({ type: USER_BVN_VALIDATION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer",
      { bvn },
      config
    );

    dispatch({
      type: USER_BVN_VALIDATION_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_BVN_VALIDATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const acceptTerms = (Id, offeracceptance) => async (dispatch) => {
  try {
    dispatch({ type: USER_ACCEPT_TERMS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer/acceptoffer",
      { Id, offeracceptance },
      config
    );

    dispatch({
      type: USER_ACCEPT_TERMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ACCEPT_TERMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const rejectTerms = (Id, offeracceptance) => async (dispatch) => {
  try {
    dispatch({ type: USER_REJECT_TERMS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer/acceptoffer",
      { Id, offeracceptance },
      config
    );

    dispatch({
      type: USER_REJECT_TERMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REJECT_TERMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const updateBank =
  (Id, UpdatedBankName, UpdatedAccountNumber) => async (dispatch) => {
    try {
      dispatch({ type: USER_UPDATE_BANK_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://nyif1.azurewebsites.net/api/offer/updateaccount",
        { Id, UpdatedBankName, UpdatedAccountNumber },
        config
      );

      dispatch({
        type: USER_UPDATE_BANK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_BANK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
