import env from "./domain";

const EMPLOYEE = {
  GET_EMPLOYEES: (page: number, limit: number = 5): string =>
    `${env}/users/getUsers?page=${page}&limit=${limit}`,
  CREATE_EMPLOYEE: (): string => `${env}/users/getUsers`,
};

export { EMPLOYEE };
