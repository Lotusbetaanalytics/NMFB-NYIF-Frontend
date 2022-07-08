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
  USER_UPDATE_DETAILS_REQUEST,
  USER_UPDATE_DETAILS_SUCCESS,
  USER_UPDATE_DETAILS_FAIL,
  USER_UPDATE_BANK_RESET,
  USER_ADD_NEWBANK_REQUEST,
  USER_ADD_NEWBANK_SUCCESS,
  USER_ADD_NEWBANK_FAIL,
  USER_ADD_NEWBANK_RESET,
} from "../constants/bvnConstants";

export const userValidateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_BVN_VALIDATION_REQUEST:
      return { loading: true };
    case USER_BVN_VALIDATION_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_BVN_VALIDATION_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userAcceptReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ACCEPT_TERMS_REQUEST:
      return { loading: true };
    case USER_ACCEPT_TERMS_SUCCESS:
      return { loading: false, success: true, userAccept: action.payload };
    case USER_ACCEPT_TERMS_FAIL:
      return { loading: false, error: action.payload };
    case USER_ACCEPT_TERMS_RESET:
      return { userAccept: {} };
    default:
      return state;
  }
};

export const userRejectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REJECT_TERMS_REQUEST:
      return { loading: true };
    case USER_REJECT_TERMS_SUCCESS:
      return { loading: false, success: true, userAccept: action.payload };
    case USER_REJECT_TERMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateBankReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_BANK_REQUEST:
      return { loading: true };
    case USER_UPDATE_BANK_SUCCESS:
      return { loading: false, success: true, userBank: action.payload };
    case USER_UPDATE_BANK_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_BANK_RESET:
      return { userBank: {} };
    default:
      return state;
  }
};

export const updateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_DETAILS_REQUEST:
      return { loading: true };
    case USER_UPDATE_DETAILS_SUCCESS:
      return { loading: false, success: true, userUpdate: action.payload };
    case USER_UPDATE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateNewBankReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_NEWBANK_REQUEST:
      return { loading: true };
    case USER_ADD_NEWBANK_SUCCESS:
      return { loading: false, success: true, newBank: action.payload };
    case USER_ADD_NEWBANK_FAIL:
      return { loading: false, error: action.payload };
    case USER_ADD_NEWBANK_RESET:
      return { newBank: {} };
    default:
      return state;
  }
};
