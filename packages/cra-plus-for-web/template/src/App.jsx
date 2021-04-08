import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "store/index"
import AppRouter from "router/AppRouter"

import Button from "components/Button"

function App() {
  return (
    <div>
     <h2>CRA Plus for web</h2>
     <Button />
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
