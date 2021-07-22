import { all } from "redux-saga/effects";

import employeesWatcher from "./employees";

export default function* actionWatcher() {
  yield all([employeesWatcher()]);
}
