import { Provider } from "react-redux";
import { store } from "./store/index";

//App全体でStore(redux)の情報を使えるようにしました
export const AppProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
