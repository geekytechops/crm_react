import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Leads from './Leads';
// import LeadsMain from './LeadsMain';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/leads" element={<Leads />} />
          {/* <Route path="/LeadsMain" element={<LeadsMain />} /> */}
        </Routes>        
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
