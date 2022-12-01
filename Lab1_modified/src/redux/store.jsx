import { Provider } from "react-redux";
import { personReducer } from "./reducers/personReducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(personReducer);

//App全体でStore(redux)の情報を使えるようにしました
export const AppProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
