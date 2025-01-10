import { useNavigate } from 'react-router-dom';
import { ArrowRight, LineChart, Shield, Zap, Bot } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed top-0 w-full bg-slate-900 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">AUTO AI</span>
            <img 
              src="/Images/logo.png" 
              alt="Auto AI Logo" 
              className="h-10 w-10 object-contain" 
            />
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://x.com/TradeWithAutoAI" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/AutoAiCommunity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
              </svg>
            </a>
            <button 
              onClick={() => navigate('/configure')}
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Automate Your Crypto Trading with AI
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Configure your personal AI trading bot to execute strategies on the Solana blockchain. Set your preferences once, and let AUTO AI handle the rest.
          </p>
          <button 
            onClick={() => navigate('/configure')}
            className="bg-cyan-400 hover:bg-cyan-500 text-black text-lg px-8 py-4 rounded-lg inline-flex items-center"
          >
            Start Trading <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: <Bot className="w-12 h-12 text-cyan-400" />,
      title: "Custom AI Configuration",
      description: "Tailor your trading bot's behavior to match your strategy and risk tolerance."
    },
    {
      icon: <Zap className="w-12 h-12 text-fuchsia-400" />,
      title: "Automated Execution",
      description: "Let your AI execute trades 24/7 based on your predefined parameters."
    },
    {
      icon: <LineChart className="w-12 h-12 text-cyan-400" />,
      title: "Performance Tracking",
      description: "Monitor your bot's performance with detailed analytics and insights."
    },
    {
      icon: <Shield className="w-12 h-12 text-fuchsia-400" />,
      title: "Risk Management",
      description: "Set stop-loss and take-profit levels to protect your investments."
    }
  ];

  return (
    <div className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-700 p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Configure AI",
      description: "Set your trading preferences and risk parameters."
    },
    {
      number: "02",
      title: "Activate Bot",
      description: "Launch your AI bot and let it execute your strategy."
    },
    {
      number: "03",
      title: "Monitor Progress",
      description: "Track performance and adjust settings as needed."
    }
  ];

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default App;
