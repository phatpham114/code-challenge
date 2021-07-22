import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import usePrevious from "../../hooks/usePrevious";

import { RootState } from "../../store";
import { createEmployeesStart } from "../../actions/employees";

const validation: any = {
  name: (val: string) => {
    if (val !== null && !val.length) {
      return "Required";
    }
    return null;
  },
  email: (val: string) => {
    if (val !== null && !val.length) {
      return "Required";
    }
    return null;
  },
  position: (val: string) => {
    if (val !== null && !val.length) {
      return "Required";
    }
    return null;
  },
};

const CreateEmployeeModal: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [position, setPosition] = useState(null);

  const { loadingCreate } = useSelector(
    (state: RootState) => state.employees,
    shallowEqual
  );

  const onChangeInput = (
    setValue: any,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  const onSave = () => {
    dispatch(createEmployeesStart({ name, email, position }));
  };

  const handleClose = () => {
    !!onClose && onClose();
  };

  const isErrorName = validation.name(name);
  const isErrorEmail = validation.email(email);
  const isErrorPosition = validation.position(position);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      maxWidth="xs"
      open>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent dividers>
        <FormControl fullWidth error={!!isErrorName}>
          <InputLabel htmlFor="field-name">Name</InputLabel>
          <Input
            id="field-name"
            name="name"
            value={name}
            onChange={onChangeInput.bind(this, setName)}
            aria-describedby="field-name-text"
          />
          <FormHelperText id="field-name-text">{isErrorName}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!isErrorEmail}>
          <InputLabel htmlFor="field-email">Email</InputLabel>
          <Input
            id="field-email"
            name="email"
            value={email}
            onChange={onChangeInput.bind(this, setEmail)}
            aria-describedby="field-email-text"
          />
          <FormHelperText id="field-email-text">{isErrorEmail}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!isErrorPosition}>
          <InputLabel htmlFor="field-position">Position</InputLabel>
          <Input
            id="field-position"
            name="position"
            value={position}
            onChange={onChangeInput.bind(this, setPosition)}
            aria-describedby="field-position-text"
          />
          <FormHelperText id="field-position-text">
            {isErrorPosition}
          </FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={onSave}
          disabled={
            loadingCreate || isErrorName || isErrorEmail || isErrorPosition
          }>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEmployeeModal;
