import api from './api';
import { PAIRS } from '../utils/pairs';

export const tradeExecution = {
  // Get available pairs
  getPairs: () => {
    return Object.keys(PAIRS).map(symbol => ({
      symbol,
      ...PAIRS[symbol],
    }));
  },

  // Get pairs by category
  getPairsByCategory: (category) => {
    return Object.keys(PAIRS)
      .filter(symbol => PAIRS[symbol].category === category)
      .map(symbol => ({
        symbol,
        ...PAIRS[symbol],
      }));
  },

  // Execute market order
  marketOrder: async (symbol, orderType, volume) => {
    const pair = PAIRS[symbol];
    if (!pair) throw new Error('Pair not found');

    try {
      const response = await api.post('/api/trade/execute', {
        symbol,
        order_type: orderType, // 'buy' or 'sell'
        volume,
        platform: pair.platform,
      });
      return response.data;
    } catch (error) {
      console.error('Trade execution failed:', error);
      throw error;
    }
  },

  // Get open positions
  getPositions: async () => {
    try {
      const response = await api.get('/api/trade/positions');
      return response.data;
    } catch (error) {
      console.error('Get positions failed:', error);
      throw error;
    }
  },

  // Close position
  closePosition: async (positionId) => {
    try {
      const response = await api.post(`/api/trade/close/${positionId}`);
      return response.data;
    } catch (error) {
      console.error('Close position failed:', error);
      throw error;
    }
  },
};
