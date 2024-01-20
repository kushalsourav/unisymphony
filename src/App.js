import NavigateBar from "./components/NavigateBar/NavigateBar";
import ContextProvider from "./contexts/ContextProvider";
import Router from "./router/Router";


function App() {
  return (
      <ContextProvider>
          <Router />
          <NavigateBar />
      </ContextProvider>
  );
}

export default App;
