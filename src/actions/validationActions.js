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
  USER_ACCEPT_TERMS_RESET,
  USER_UPDATE_DETAILS_FAIL,
  USER_UPDATE_DETAILS_SUCCESS,
  USER_UPDATE_DETAILS_REQUEST,
  USER_UPDATE_BANK_RESET,
  USER_ADD_NEWBANK_REQUEST,
  USER_ADD_NEWBANK_SUCCESS,
  USER_ADD_NEWBANK_FAIL,
  USER_ADD_NEWBANK_RESET,
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
      "https://nyif1.azurewebsites.net/api/offer/getuser",
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

export const acceptTerms = (bvn, name, offeracceptance) => async (dispatch) => {
  try {
    dispatch({ type: USER_ACCEPT_TERMS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer/acceptoffer",
      { bvn, name, offeracceptance },
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

export const rejectTerms = (bvn, name, offeracceptance) => async (dispatch) => {
  try {
    dispatch({ type: USER_REJECT_TERMS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer/acceptoffer",
      { bvn, name, offeracceptance },
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
  dispatch({ type: USER_ACCEPT_TERMS_RESET });
  dispatch({ type: USER_UPDATE_BANK_RESET });
  dispatch({ type: USER_ADD_NEWBANK_RESET });
};

export const updateBank = (Id, bankname, accountnumber) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_BANK_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer/otheraccount",
      { Id, bankname, accountnumber },
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

export const updateDetails = (bvn) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_DETAILS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://nyif1.azurewebsites.net/api/offer/updateuserdetails",
      { bvn },
      config
    );

    dispatch({
      type: USER_UPDATE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const newBankDetails =
  (Id, bankname, accountnumber) => async (dispatch) => {
    try {
      dispatch({ type: USER_ADD_NEWBANK_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://nyif1.azurewebsites.net/api/offer/updateaccount",
        { Id, bankname, accountnumber },
        config
      );

      dispatch({
        type: USER_ADD_NEWBANK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_ADD_NEWBANK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
