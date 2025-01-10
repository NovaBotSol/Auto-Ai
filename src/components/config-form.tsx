import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

interface Field {
  label: string;
  type: string;
  name: string;
  options?: { value: string; label: string; }[];
  placeholder?: string;
  conditional?: keyof FormData;
}

interface FormData {
  [key: string]: string | boolean | string[];
  riskTolerance: string;
  maxLossPerTrade: string;
  dailyLossLimit: string;
  tradingGoals: string[];
  stopLoss: string;
  takeProfit: string;
  trailingStop: boolean;
  whaleTracking: boolean;
  whaleMinimumAmount: string;
  snipeNewTokens: boolean;
  buyDips: boolean;
  dipPercentage: string;
}

const ConfigurationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    riskTolerance: '',
    maxLossPerTrade: '',
    dailyLossLimit: '',
    tradingGoals: [],
    stopLoss: '',
    takeProfit: '',
    trailingStop: false,
    whaleTracking: false,
    whaleMinimumAmount: '',
    snipeNewTokens: false,
    buyDips: false,
    dipPercentage: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const steps: { title: string; fields: Field[] }[] = [
    {
      title: "Risk Profile",
      fields: [
        {
          label: "Risk Tolerance",
          type: "select",
          name: "riskTolerance",
          options: [
            { value: "conservative", label: "Conservative (1-2% per trade)" },
            { value: "moderate", label: "Moderate (3-5% per trade)" },
            { value: "aggressive", label: "Aggressive (6-10% per trade)" }
          ]
        },
        {
          label: "Maximum Loss Per Trade (%)",
          type: "number",
          name: "maxLossPerTrade",
          placeholder: "Enter percentage"
        },
        {
          label: "Daily Loss Limit (SOL)",
          type: "number",
          name: "dailyLossLimit",
          placeholder: "Enter amount in SOL"
        }
      ]
    },
    {
      title: "Trading Strategy",
      fields: [
        {
          label: "Trading Goals",
          type: "multiSelect",
          name: "tradingGoals",
          options: [
            { value: "snipe", label: "Snipe New Token Launches" },
            { value: "dips", label: "Buy Price Dips" },
            { value: "trend", label: "Follow Market Trends" },
            { value: "whale", label: "Mirror Whale Movements" },
            { value: "momentum", label: "Trade on Price Momentum" },
            { value: "volume", label: "Track Volume Spikes" },
            { value: "arbitrage", label: "Cross-DEX Arbitrage" },
            { value: "breakout", label: "Trade Breakout Patterns" },
            { value: "resistance", label: "Buy at Support Levels" }
          ]
        }
      ]
    },
    {
      title: "Technical Parameters",
      fields: [
        {
          label: "Stop-Loss (%)",
          type: "number",
          name: "stopLoss",
          placeholder: "Enter percentage"
        },
        {
          label: "Take-Profit (%)",
          type: "number",
          name: "takeProfit",
          placeholder: "Enter percentage"
        },
        {
          label: "Use Trailing Stop",
          type: "checkbox",
          name: "trailingStop"
        }
      ]
    },
    {
      title: "Advanced Settings",
      fields: [
        {
          label: "Track Whale Wallets",
          type: "checkbox",
          name: "whaleTracking"
        },
        {
          label: "Minimum Whale Transaction (SOL)",
          type: "number",
          name: "whaleMinimumAmount",
          placeholder: "Enter amount in SOL",
          conditional: "whaleTracking"
        },
        {
          label: "Snipe New Token Launches",
          type: "checkbox",
          name: "snipeNewTokens"
        },
        {
          label: "Buy Price Dips",
          type: "checkbox",
          name: "buyDips"
        },
        {
          label: "Dip Percentage Threshold",
          type: "number",
          name: "dipPercentage",
          placeholder: "Enter percentage",
          conditional: "buyDips"
        }
      ]
    }
  ];

  const handleMultiSelect = (name: string, value: string) => {
    setFormData(prev => {
      const currentValues = prev[name] as string[];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [name]: currentValues.filter(v => v !== value)
        };
      }
      return {
        ...prev,
        [name]: [...currentValues, value]
      };
    });
  };

  const validateStep = (step: number) => {
    const currentFields = steps[step - 1].fields;
    for (const field of currentFields) {
      if (field.conditional && !formData[field.conditional]) {
        continue;
      }
      const value = formData[field.name];
      if (field.type === 'multiSelect' && (!value || (value as string[]).length === 0)) {
        return false;
      }
      if (value === '' || value === undefined) {
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Final configuration:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-slate-800 rounded-lg p-6">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`w-full ${
                  index < steps.length - 1 ? 'relative' : ''
                }`}
              >
                <div 
                  className={`h-2 rounded-full ${
                    index + 1 <= currentStep
                      ? 'bg-fuchsia-500'
                      : 'bg-slate-600'
                  }`}
                />
                <div className="mt-2 text-center text-sm text-slate-400">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current step form fields */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {steps[currentStep - 1].title}
          </h2>
          
          <div className="space-y-6">
            {steps[currentStep - 1].fields.map((field: Field, index) => {
              if (field.conditional && !formData[field.conditional]) {
                return null;
              }

              return (
                <div key={index} className="space-y-2">
                  <label className="block text-white">
                    {field.label}
                  </label>
                  
                  {field.type === 'select' && field.options && (
                    <select
                      name={field.name}
                      value={formData[field.name] as string}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700 text-white rounded-lg p-3 border border-slate-600"
                    >
                      <option value="">Select an option</option>
                      {field.options.map((option, i) => (
                        <option key={i} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === 'multiSelect' && field.options && (
                    <div className="space-y-2">
                      {field.options.map((option, i) => (
                        <div key={i} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`${field.name}-${option.value}`}
                            checked={(formData[field.name] as string[]).includes(option.value)}
                            onChange={() => handleMultiSelect(field.name, option.value)}
                            className="mr-2"
                          />
                          <label 
                            htmlFor={`${field.name}-${option.value}`}
                            className="text-slate-300"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  {field.type === 'number' && (
                    <input
                      type="number"
                      name={field.name}
                      value={formData[field.name] as string}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full bg-slate-700 text-white rounded-lg p-3 border border-slate-600"
                    />
                  )}

                  {field.type === 'checkbox' && (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name={field.name}
                        checked={formData[field.name] as boolean}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-slate-300">Enable</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg ${
              currentStep === 1
                ? 'bg-slate-600 cursor-not-allowed'
                : 'bg-slate-700 hover:bg-slate-600'
            } text-white`}
          >
            Previous
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              disabled={!validateStep(currentStep)}
              className={`px-6 py-3 rounded-lg ${
                validateStep(currentStep)
                  ? 'bg-cyan-400 hover:bg-cyan-500 text-black'
                  : 'bg-cyan-400/50 cursor-not-allowed text-black/50'
              }`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!validateStep(currentStep)}
              className={`px-6 py-3 rounded-lg ${
                validateStep(currentStep)
                  ? 'bg-cyan-400 hover:bg-cyan-500 text-black'
                  : 'bg-cyan-400/50 cursor-not-allowed text-black/50'
              } flex items-center`}
            >
              <span>Activate Bot</span>
              <Check className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationForm;
