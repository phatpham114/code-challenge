/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { getEmployeesStart } from "../../actions/employees";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch(getEmployeesStart({ page: currentPage }));
  }, [currentPage]);

  const onPrevious = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <span
        className={`${currentPage === 1 ? "btn-disabled" : ""} btn-previous`}
        onClick={onPrevious}>
        Previous
      </span>
      <span>{currentPage}</span>
      <span className="btn-next" onClick={onNext}>
        Next
      </span>
    </div>
  );
};

export default Pagination;
