import { Router } from "./routes/Router";
import { Navigation } from "./components/Navigation";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import { UserProvider } from "./shared/provider/UserProvider";

export const App = () => {
  return (
    <UserProvider>
      <GlobalStyles />
      <Router>
        <Navigation />
      </Router>
    </UserProvider>
  );
};
