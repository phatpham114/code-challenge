const GET_EMPLOYEES_START = "GET_EMPLOYEES_START";
const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
const GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL";

const CREATE_EMPLOYEE_START = "CREATE_EMPLOYEE_START";
const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
const CREATE_EMPLOYEE_FAIL = "CREATE_EMPLOYEE_FAIL";

export const getEmployeesStart = (payload: {
  page?: number;
  limit?: number;
}) => ({
  type: GET_EMPLOYEES_START,
  payload,
});

export const createEmployeesStart = (payload: {
  name?: string | null;
  email?: string | null;
  position?: string | null;
}) => ({
  type: CREATE_EMPLOYEE_START,
  payload,
});

export {
  GET_EMPLOYEES_START,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  CREATE_EMPLOYEE_START,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAIL,
};
