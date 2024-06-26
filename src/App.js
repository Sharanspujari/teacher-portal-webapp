import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      
      {/* wrapping  <ErrorBoudary/> component to catch any error occured in its child component */}
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
