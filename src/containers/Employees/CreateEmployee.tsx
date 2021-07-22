import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useSnackbar } from "notistack";

import usePrevious from "../../hooks/usePrevious";
import { RootState } from "../../store";

import CreateEmployeeModal from "./CreateEmployeeModal";

const CreateEmployee: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { loadingCreate, errorCreate } = useSelector(
    (state: RootState) => state.employees,
    shallowEqual
  );

  const prevLoadingCreate = usePrevious(loadingCreate);

  useEffect(() => {
    if (prevLoadingCreate && !loadingCreate) {
      if (!!errorCreate) {
        enqueueSnackbar("Something went wrong", { variant: "error" });
      } else {
        enqueueSnackbar("Created a employee", { variant: "success" });
        onClose();
      }
    }
  }, [loadingCreate]);

  const onOpen = () => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="btn-new" onClick={onOpen}>
        + New
      </div>
      {isOpenModal && <CreateEmployeeModal onClose={onClose} />}
    </>
  );
};

export default CreateEmployee;
