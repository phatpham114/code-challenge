/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { RootState } from "../../store";
import { Employee } from "../../models/employees";

import { getEmployeesStart } from "../../actions/employees";

import Pagination from "./Pagination";
import CreateEmployee from "./CreateEmployee";

const Employees: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, employees } = useSelector(
    (state: RootState) => state.employees,
    shallowEqual
  );

  const getEmployeesCb = useCallback(() => {
    dispatch(getEmployeesStart({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    getEmployeesCb();
  }, []);

  const renderEmployees = useMemo(() => {
    if (loading) {
      return [...Array(5)].map((e: number, i: number) => (
        <tr key={e}>
          <td>
            <div className="skeleton" />
          </td>
          <td>
            <div className="skeleton" />
          </td>
          <td>
            <div className="skeleton" />
          </td>
        </tr>
      ));
    }
    if (!employees.length) {
      return (
        <tr>
          <td className="no-data" colSpan={3}>
            No data
          </td>
        </tr>
      );
    }
    return employees.map((e: Employee, i: number) => (
      <tr key={e.id}>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.position}</td>
      </tr>
    ));
  }, [loading, employees]);

  return (
    <div className="employees">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{renderEmployees}</tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <CreateEmployee />
            </td>
          </tr>
        </tfoot>
      </table>
      <Pagination />
    </div>
  );
};

export default Employees;
