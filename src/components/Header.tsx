import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { ROUTES } from "../routes";

const Header = () => {
  const history = useHistory();

  const onClickCounter = () => {
    history.push(ROUTES.COUNTER);
  };

  const onClickEmployees = () => {
    history.push(ROUTES.EMPLOYEES);
  };

  return (
    <div className='header'>
      <Button onClick={onClickCounter}>Counter</Button>
      <Button onClick={onClickEmployees}>Employees</Button>
    </div>
  );
};

export default Header;
