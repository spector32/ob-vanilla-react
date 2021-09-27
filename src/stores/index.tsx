import { createContext, useContext } from "react";
import localForage from "localforage";
import { configurePersistable } from "mobx-persist-store";

import { Users } from "./users";
// import { configure } from 'mobx';

configurePersistable({
  storage: localForage,
  stringify: false,
  debugMode: false,
});

// configure({
// 	enforceActions: 'always',
// 	computedRequiresReaction: true,
// 	reactionRequiresObservable: true,
// 	observableRequiresReaction: true,
// 	disableErrorBoundaries: false
// });

class Store {
  users: Users;

  constructor() {
    this.users = new Users();

    // Session data
    // this.routerData = new RouterData();
  }
}

const store = new Store();
const StoreContext = createContext(new Store());

export default store;
export const StoreProvider = ({
  children,
  store,
}: {
  children: React.ReactElement | any[];
  store: Store;
}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export const useStore = () => useContext(StoreContext);
