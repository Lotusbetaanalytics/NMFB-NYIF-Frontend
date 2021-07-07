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
      return { loading: false, success: true };
    case USER_ACCEPT_TERMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userRejectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REJECT_TERMS_REQUEST:
      return { loading: true };
    case USER_REJECT_TERMS_SUCCESS:
      return { loading: false, success: true };
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
      return { loading: false, success: true };
    case USER_UPDATE_BANK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
