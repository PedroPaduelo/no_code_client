
import { AuthProvider } from './Context/AuthContext';
import { FlowProvider } from './Context/FlowContext';
import { WKFProvider } from './Context/WKF/WKFContext';

import { BrowserRouter } from "react-router-dom";
import Routes from './routes/routes';


function App() {
  return (
    <AuthProvider>
      <FlowProvider>
        <WKFProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter> 
        </WKFProvider>
      </FlowProvider>
    </AuthProvider>
  );
}

export default App;
