import api from './api';

export const cryptoDeposit = {
  // Generate deposit address for user
  generateAddress: async (currency) => {
    try {
      const response = await api.post('/api/deposit/address', {
        currency: currency, // USDT, BTC, BNB, ETH, SOL
      });
      return response.data;
    } catch (error) {
      console.error('Deposit address generation failed:', error);
      throw error;
    }
  },

  // Check deposit status
  checkStatus: async (transactionId) => {
    try {
      const response = await api.get(`/api/deposit/status/${transactionId}`);
      return response.data;
    } catch (error) {
      console.error('Deposit status check failed:', error);
      throw error;
    }
  },

  // Get deposit history
  getHistory: async () => {
    try {
      const response = await api.get('/api/deposit/history');
      return response.data;
    } catch (error) {
      console.error('Deposit history fetch failed:', error);
      throw error;
    }
  },

  // Withdraw crypto
  withdraw: async (currency, amount, address, network) => {
    try {
      const response = await api.post('/api/withdraw', {
        currency,
        amount,
        address,
        network, // TRC20, ERC20, BEP20, etc.
      });
      return response.data;
    } catch (error) {
      console.error('Withdrawal failed:', error);
      throw error;
    }
  },

  // Get withdrawal history
  getWithdrawHistory: async () => {
    try {
      const response = await api.get('/api/withdraw/history');
      return response.data;
    } catch (error) {
      console.error('Withdrawal history fetch failed:', error);
      throw error;
    }
  },

  // Get crypto balances
  getBalances: async () => {
    try {
      const response = await api.get('/api/crypto/balances');
      return response.data;
    } catch (error) {
      console.error('Crypto balances fetch failed:', error);
      throw error;
    }
  },
};
