export const PAIRS = {
  // ============================================
  // FOREX MAJORS (7)
  // ============================================
  EURUSD: { name: 'EUR/USD', category: 'Forex', platform: 'oanda' },
  GBPUSD: { name: 'GBP/USD', category: 'Forex', platform: 'oanda' },
  USDJPY: { name: 'USD/JPY', category: 'Forex', platform: 'oanda' },
  AUDUSD: { name: 'AUD/USD', category: 'Forex', platform: 'oanda' },
  USDCAD: { name: 'USD/CAD', category: 'Forex', platform: 'oanda' },
  USDCHF: { name: 'USD/CHF', category: 'Forex', platform: 'oanda' },
  NZDUSD: { name: 'NZD/USD', category: 'Forex', platform: 'oanda' },

  // ============================================
  // FOREX CROSSES (12)
  // ============================================
  EURGBP: { name: 'EUR/GBP', category: 'Forex', platform: 'oanda' },
  EURJPY: { name: 'EUR/JPY', category: 'Forex', platform: 'oanda' },
  GBPJPY: { name: 'GBP/JPY', category: 'Forex', platform: 'oanda' },
  AUDJPY: { name: 'AUD/JPY', category: 'Forex', platform: 'oanda' },
  EURAUD: { name: 'EUR/AUD', category: 'Forex', platform: 'oanda' },
  GBPAUD: { name: 'GBP/AUD', category: 'Forex', platform: 'oanda' },
  EURCHF: { name: 'EUR/CHF', category: 'Forex', platform: 'oanda' },
  GBPCHF: { name: 'GBP/CHF', category: 'Forex', platform: 'oanda' },
  EURCAD: { name: 'EUR/CAD', category: 'Forex', platform: 'oanda' },
  AUDCAD: { name: 'AUD/CAD', category: 'Forex', platform: 'oanda' },
  CADJPY: { name: 'CAD/JPY', category: 'Forex', platform: 'oanda' },
  NZDJPY: { name: 'NZD/JPY', category: 'Forex', platform: 'oanda' },

  // ============================================
  // COMMODITIES (8)
  // ============================================
  XAUUSD: { name: 'Gold', category: 'Commodities', platform: 'oanda' },
  XAGUSD: { name: 'Silver', category: 'Commodities', platform: 'oanda' },
  WTI: { name: 'WTI Oil', category: 'Commodities', platform: 'oanda' },
  BRENT: { name: 'Brent Oil', category: 'Commodities', platform: 'oanda' },
  NATGAS: { name: 'Natural Gas', category: 'Commodities', platform: 'oanda' },
  COPPER: { name: 'Copper', category: 'Commodities', platform: 'oanda' },
  PLATINUM: { name: 'Platinum', category: 'Commodities', platform: 'oanda' },
  PALLADIUM: { name: 'Palladium', category: 'Commodities', platform: 'oanda' },

  // ============================================
  // INDICES (15)
  // ============================================
  SPX500: { name: 'S&P 500', category: 'Indices', platform: 'oanda' },
  NAS100: { name: 'NASDAQ 100', category: 'Indices', platform: 'oanda' },
  DAX40: { name: 'DAX 40', category: 'Indices', platform: 'oanda' },
  FTSE100: { name: 'FTSE 100', category: 'Indices', platform: 'oanda' },
  JP225: { name: 'Nikkei 225', category: 'Indices', platform: 'oanda' },
  HK50: { name: 'Hang Seng 50', category: 'Indices', platform: 'oanda' },
  DXY: { name: 'US Dollar Index', category: 'Indices', platform: 'oanda' },
  EURO50: { name: 'Euro Stoxx 50', category: 'Indices', platform: 'oanda' },
  UK100: { name: 'UK 100', category: 'Indices', platform: 'oanda' },
  GER30: { name: 'Germany 30', category: 'Indices', platform: 'oanda' },
  JPN225: { name: 'Japan 225', category: 'Indices', platform: 'oanda' },
  AUS200: { name: 'Australia 200', category: 'Indices', platform: 'oanda' },
  NZX50: { name: 'New Zealand 50', category: 'Indices', platform: 'oanda' },
  HSI50: { name: 'HSI 50', category: 'Indices', platform: 'oanda' },
  SG30: { name: 'Singapore 30', category: 'Indices', platform: 'oanda' },

  // ============================================
  // US STOCKS (30)
  // ============================================
  AAPL: { name: 'Apple', category: 'Stocks', platform: 'oanda' },
  MSFT: { name: 'Microsoft', category: 'Stocks', platform: 'oanda' },
  GOOGL: { name: 'Alphabet', category: 'Stocks', platform: 'oanda' },
  AMZN: { name: 'Amazon', category: 'Stocks', platform: 'oanda' },
  TSLA: { name: 'Tesla', category: 'Stocks', platform: 'oanda' },
  NVDA: { name: 'NVIDIA', category: 'Stocks', platform: 'oanda' },
  META: { name: 'Meta', category: 'Stocks', platform: 'oanda' },
  JPM: { name: 'JPMorgan', category: 'Stocks', platform: 'oanda' },
  VTI: { name: 'Vanguard Total', category: 'Stocks', platform: 'oanda' },
  SPY: { name: 'SPDR S&P 500', category: 'Stocks', platform: 'oanda' },
  QQQ: { name: 'Invesco QQQ', category: 'Stocks', platform: 'oanda' },
  BAC: { name: 'Bank of America', category: 'Stocks', platform: 'oanda' },
  WMT: { name: 'Walmart', category: 'Stocks', platform: 'oanda' },
  JNJ: { name: 'Johnson & Johnson', category: 'Stocks', platform: 'oanda' },
  VZ: { name: 'Verizon', category: 'Stocks', platform: 'oanda' },
  WFC: { name: 'Wells Fargo', category: 'Stocks', platform: 'oanda' },
  KO: { name: 'Coca-Cola', category: 'Stocks', platform: 'oanda' },
  NFLX: { name: 'Netflix', category: 'Stocks', platform: 'oanda' },
  DIS: { name: 'Disney', category: 'Stocks', platform: 'oanda' },
  PYPL: { name: 'PayPal', category: 'Stocks', platform: 'oanda' },
  INTC: { name: 'Intel', category: 'Stocks', platform: 'oanda' },
  CSCO: { name: 'Cisco', category: 'Stocks', platform: 'oanda' },
  ORCL: { name: 'Oracle', category: 'Stocks', platform: 'oanda' },
  IBM: { name: 'IBM', category: 'Stocks', platform: 'oanda' },
  GE: { name: 'General Electric', category: 'Stocks', platform: 'oanda' },
  F: { name: 'Ford', category: 'Stocks', platform: 'oanda' },
  GM: { name: 'General Motors', category: 'Stocks', platform: 'oanda' },
  BA: { name: 'Boeing', category: 'Stocks', platform: 'oanda' },
  MCD: { name: "McDonald's", category: 'Stocks', platform: 'oanda' },
  SBUX: { name: 'Starbucks', category: 'Stocks', platform: 'oanda' },

  // ============================================
  // EUROPEAN STOCKS (15)
  // ============================================
  ASML: { name: 'ASML', category: 'Stocks', platform: 'oanda' },
  SAP: { name: 'SAP', category: 'Stocks', platform: 'oanda' },
  NVO: { name: 'Novo Nordisk', category: 'Stocks', platform: 'oanda' },
  NESN: { name: 'Nestlé', category: 'Stocks', platform: 'oanda' },
  NOVN: { name: 'Novartis', category: 'Stocks', platform: 'oanda' },
  ROG: { name: 'Roche', category: 'Stocks', platform: 'oanda' },
  AZN: { name: 'AstraZeneca', category: 'Stocks', platform: 'oanda' },
  GSK: { name: 'GSK', category: 'Stocks', platform: 'oanda' },
  BATS: { name: 'British American Tobacco', category: 'Stocks', platform: 'oanda' },
  DGE: { name: 'Diageo', category: 'Stocks', platform: 'oanda' },
  HSBC: { name: 'HSBC', category: 'Stocks', platform: 'oanda' },
  BP: { name: 'BP', category: 'Stocks', platform: 'oanda' },
  SHEL: { name: 'Shell', category: 'Stocks', platform: 'oanda' },
  TTEF: { name: 'TotalEnergies', category: 'Stocks', platform: 'oanda' },
  SAN: { name: 'Sanofi', category: 'Stocks', platform: 'oanda' },

  // ============================================
  // ASIAN STOCKS (10)
  // ============================================
  TSM: { name: 'TSMC', category: 'Stocks', platform: 'oanda' },
  9984: { name: 'SoftBank', category: 'Stocks', platform: 'oanda' },
  9983: { name: 'Fast Retailing', category: 'Stocks', platform: 'oanda' },
  BABA: { name: 'Alibaba', category: 'Stocks', platform: 'oanda' },
  TCEHY: { name: 'Tencent', category: 'Stocks', platform: 'oanda' },
  005930: { name: 'Samsung', category: 'Stocks', platform: 'oanda' },
  HDB: { name: 'HDFC Bank', category: 'Stocks', platform: 'oanda' },
  BIDU: { name: 'Baidu', category: 'Stocks', platform: 'oanda' },
  JD: { name: 'JD.com', category: 'Stocks', platform: 'oanda' },
  NTDOY: { name: 'Nintendo', category: 'Stocks', platform: 'oanda' },

  // ============================================
  // CRYPTOCURRENCIES (20)
  // ============================================
  BTCUSD: { name: 'Bitcoin', category: 'Crypto', platform: 'cryptomus' },
  ETHUSD: { name: 'Ethereum', category: 'Crypto', platform: 'cryptomus' },
  SOLUSD: { name: 'Solana', category: 'Crypto', platform: 'cryptomus' },
  BNBUSD: { name: 'BNB', category: 'Crypto', platform: 'cryptomus' },
  XRPUSD: { name: 'XRP', category: 'Crypto', platform: 'cryptomus' },
  ADAUSD: { name: 'Cardano', category: 'Crypto', platform: 'cryptomus' },
  AVAXUSD: { name: 'Avalanche', category: 'Crypto', platform: 'cryptomus' },
  MATICUSD: { name: 'Polygon', category: 'Crypto', platform: 'cryptomus' },
  DOTUSD: { name: 'Polkadot', category: 'Crypto', platform: 'cryptomus' },
  LINKUSD: { name: 'Chainlink', category: 'Crypto', platform: 'cryptomus' },
  DOGEUSD: { name: 'Dogecoin', category: 'Crypto', platform: 'cryptomus' },
  SHIBUSD: { name: 'Shiba Inu', category: 'Crypto', platform: 'cryptomus' },
  ATOMUSD: { name: 'Cosmos', category: 'Crypto', platform: 'cryptomus' },
  FILUSD: { name: 'Filecoin', category: 'Crypto', platform: 'cryptomus' },
  LTCUSD: { name: 'Litecoin', category: 'Crypto', platform: 'cryptomus' },
  EOSUSD: { name: 'EOS', category: 'Crypto', platform: 'cryptomus' },
  XLMUSD: { name: 'Stellar', category: 'Crypto', platform: 'cryptomus' },
  ALGOUSD: { name: 'Algorand', category: 'Crypto', platform: 'cryptomus' },
  VETUSD: { name: 'VeChain', category: 'Crypto', platform: 'cryptomus' },
  ICPUSD: { name: 'Internet Computer', category: 'Crypto', platform: 'cryptomus' },
};

// ============================================
// CATEGORIES
// ============================================
export const CATEGORIES = {
  Forex: ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD', 'USDCHF', 'NZDUSD', 
          'EURGBP', 'EURJPY', 'GBPJPY', 'AUDJPY', 'EURAUD', 'GBPAUD', 'EURCHF', 
          'GBPCHF', 'EURCAD', 'AUDCAD', 'CADJPY', 'NZDJPY'],
  Commodities: ['XAUUSD', 'XAGUSD', 'WTI', 'BRENT', 'NATGAS', 'COPPER', 'PLATINUM', 'PALLADIUM'],
  Indices: ['SPX500', 'NAS100', 'DAX40', 'FTSE100', 'JP225', 'HK50', 'DXY', 'EURO50', 
            'UK100', 'GER30', 'JPN225', 'AUS200', 'NZX50', 'HSI50', 'SG30'],
  Stocks: ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'JPM', 'VTI', 'SPY', 
           'QQQ', 'BAC', 'WMT', 'JNJ', 'VZ', 'WFC', 'KO', 'NFLX', 'DIS', 'PYPL', 
           'INTC', 'CSCO', 'ORCL', 'IBM', 'GE', 'F', 'GM', 'BA', 'MCD', 'SBUX',
           'ASML', 'SAP', 'NVO', 'NESN', 'NOVN', 'ROG', 'AZN', 'GSK', 'BATS', 'DGE',
           'HSBC', 'BP', 'SHEL', 'TTEF', 'SAN', 'TSM', '9984', '9983', 'BABA', 'TCEHY'],
  Crypto: ['BTCUSD', 'ETHUSD', 'SOLUSD', 'BNBUSD', 'XRPUSD', 'ADAUSD', 'AVAXUSD', 
           'MATICUSD', 'DOTUSD', 'LINKUSD', 'DOGEUSD', 'SHIBUSD', 'ATOMUSD', 
           'FILUSD', 'LTCUSD', 'EOSUSD', 'XLMUSD', 'ALGOUSD', 'VETUSD', 'ICPUSD'],
};
