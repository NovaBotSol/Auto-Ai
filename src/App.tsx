import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutoAIWebsite from './components/auto-ai-website';
import ConfigurationForm from './components/config-form';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoAIWebsite />} />
        <Route path="/configure" element={<ConfigurationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;