import { AnyAction } from "redux";

import {
  GET_EMPLOYEES_START,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  CREATE_EMPLOYEE_START,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAIL,
} from "../actions/employees";

type TState = {
  loading: boolean;
  employees: any;
  error: any;

  loadingCreate: boolean;
  errorCreate: any;
};

const initialState: TState = {
  loading: false,
  employees: [],
  error: null,

  loadingCreate: false,
  errorCreate: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_EMPLOYEES_START:
      return { ...state, loading: true };
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, loading: false, employees: action.data };
    case GET_EMPLOYEES_FAIL:
      return { ...state, loading: false, error: action.error };

    case CREATE_EMPLOYEE_START:
      return { ...state, loadingCreate: true };
    case CREATE_EMPLOYEE_SUCCESS:
      return { ...state, loadingCreate: false };
    case CREATE_EMPLOYEE_FAIL:
      return { ...state, loadingCreate: false, errorCreate: action.error };
    default:
      return state;
  }
};

export default reducer;
