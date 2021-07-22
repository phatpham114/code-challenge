import { takeLatest, call, put } from "redux-saga/effects";

import fetchAPI from "../api/request";

import { EMPLOYEE } from "../api";

import {
  GET_EMPLOYEES_START,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  CREATE_EMPLOYEE_START,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAIL,
} from "../actions/employees";

function* getEmployees(action: any) {
  const { response, error } = yield call(fetchAPI, {
    url: EMPLOYEE.GET_EMPLOYEES(action.payload.page),
  });
  if (response) {
    yield put({ type: GET_EMPLOYEES_SUCCESS, data: response });
  } else {
    yield put({ type: GET_EMPLOYEES_FAIL, error: +error });
  }
}

function* createEmployee(action: any) {
  const { response, error } = yield call(fetchAPI, {
    url: EMPLOYEE.CREATE_EMPLOYEE(),
    method: "POST",
    payload: { body: action.payload },
  });
  if (response) {
    yield put({ type: CREATE_EMPLOYEE_SUCCESS, data: response });
  } else {
    yield put({ type: CREATE_EMPLOYEE_FAIL, error: +error });
  }
}

export default function* employeeWatcher() {
  yield takeLatest(GET_EMPLOYEES_START, getEmployees);
  yield takeLatest(CREATE_EMPLOYEE_START, createEmployee);
}
