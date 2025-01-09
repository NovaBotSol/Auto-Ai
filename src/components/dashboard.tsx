import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Settings, TrendingUp, Clock, Activity, Lock, XCircle } from 'lucide-react';

const Dashboard = () => {
  const [keyInput, setKeyInput] = useState('');
  const [showError, setShowError] = useState(false);
  
  // Empty performance data for inactive state
  const emptyPerformanceData = [
    { timestamp: '00:00', value: 0 },
    { timestamp: '04:00', value: 0 },
    { timestamp: '08:00', value: 0 },
    { timestamp: '12:00', value: 0 },
    { timestamp: '16:00', value: 0 },
    { timestamp: '20:00', value: 0 }
  ];

  const handleActivate = () => {
    setShowError(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Key Input Section */}
        <div className="mb-8 bg-slate-800 rounded-lg p-6">
          <div className="max-w-md mx-auto">
            <div className="flex items-center mb-4">
              <Lock className="text-slate-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Activate Your Bot</h2>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your AUTOAI key"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                className="w-full bg-slate-700 text-white rounded-lg p-3 border border-slate-600"
              />
              <button 
                onClick={handleActivate}
                className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 hover:from-fuchsia-600 hover:to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Activate
              </button>
            </div>
            
            {showError && (
              <div className="mt-4 p-4 bg-fuchsia-900/50 border border-fuchsia-800 rounded-lg flex items-start">
                <XCircle className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-fuchsia-200">
                  Error: your AUTOAI key is incorrect. Please contact support if error persists.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Inactive Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-slate-400">Total Profit/Loss</h3>
              <TrendingUp className="text-fuchsia-400" />
            </div>
            <p className="text-2xl font-bold text-white">0.00 SOL</p>
            <p className="text-sm text-slate-500">Inactive</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-slate-400">Active Time</h3>
              <Clock className="text-cyan-400" />
            </div>
            <p className="text-2xl font-bold text-white">0h 0m</p>
            <p className="text-sm text-slate-500">Inactive</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-slate-400">Success Rate</h3>
              <Activity className="text-fuchsia-400" />
            </div>
            <p className="text-2xl font-bold text-white">0%</p>
            <p className="text-sm text-slate-500">No trades yet</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-slate-400">Available Balance</h3>
              <Settings className="text-cyan-400" />
            </div>
            <p className="text-2xl font-bold text-white">0.00 SOL</p>
            <p className="text-sm text-slate-500">Bot not activated</p>
          </div>
        </div>

        {/* Inactive Performance Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Performance</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={emptyPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    dataKey="timestamp" 
                    stroke="#22d3ee"
                    tick={{ fill: '#334155' }}
                    strokeWidth={2}
                  />
                  <YAxis 
                    stroke="#22d3ee"
                    tick={{ fill: '#334155' }}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#22d3ee"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inactive Recent Trades */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Trades</h2>
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Lock className="mx-auto text-slate-400 mb-2 w-8 h-8" />
                <p className="text-slate-400">No trading activity yet</p>
                <p className="text-sm text-slate-500">Activate your bot to start trading</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inactive Bot Controls */}
        <div className="mt-6 bg-slate-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Bot Status</h2>
              <p className="text-slate-500 mt-1">Inactive</p>
            </div>
            <div>
              <button 
                className="bg-slate-700 text-slate-400 px-6 py-3 rounded-lg cursor-not-allowed"
                disabled
              >
                Bot Controls Locked
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;