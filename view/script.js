// HBL Stock Predictor JavaScript

class StockPredictor {
    constructor() {
        this.stockData = null;
        this.initializeEventListeners();
        this.loadInitialData();
    }

    initializeEventListeners() {
        const predictBtn = document.getElementById('predict-btn');
        const refreshBtn = document.getElementById('refresh-data-btn');
        const downloadBtn = document.getElementById('download-new-data-btn');

        predictBtn.addEventListener('click', () => this.generatePrediction());
        refreshBtn.addEventListener('click', () => this.refreshData());
        downloadBtn.addEventListener('click', () => this.downloadNewData());
    }

    async loadInitialData() {
        try {
            // Simulate loading CSV data (in a real scenario, you'd need a backend)
            // For now, we'll use mock data based on the structure of your CSV
            this.stockData = await this.loadMockData();
            this.updateCurrentDataDisplay();
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError('Failed to load stock data');
        }
    }

    async loadMockData() {
        // This simulates the data from your hbl_clean_data.csv
        // In a real implementation, you'd fetch this from your Python backend
        return {
            currentPrice: 265.65,
            lastUpdated: '2025-08-11',
            prices: [
                265.65, 264.30, 266.15, 263.80, 267.20,
                265.45, 264.90, 266.80, 265.30, 264.70,
                266.00, 265.85, 264.40, 266.30, 265.90,
                264.15, 267.10, 266.40, 265.20, 264.85,
                266.70, 265.15, 264.95, 266.45, 265.35,
                264.60, 266.85, 265.75, 264.25, 266.95
            ],
            highs: [268.50, 267.20, 268.80, 266.90, 269.10],
            lows: [263.20, 262.80, 264.10, 261.90, 265.30]
        };
    }

    updateCurrentDataDisplay() {
        const data = this.stockData;
        
        document.getElementById('current-price').textContent = `$${data.currentPrice.toFixed(2)}`;
        document.getElementById('last-updated').textContent = data.lastUpdated;
        
        // Calculate weekly and monthly changes
        const weeklyChange = this.calculatePercentageChange(data.prices[data.prices.length - 8], data.currentPrice);
        const monthlyChange = this.calculatePercentageChange(data.prices[0], data.currentPrice);
        
        this.updateChangeDisplay('weekly-change', weeklyChange);
        this.updateChangeDisplay('monthly-change', monthlyChange);
    }

    calculatePercentageChange(oldPrice, newPrice) {
        return ((newPrice - oldPrice) / oldPrice) * 100;
    }

    updateChangeDisplay(elementId, change) {
        const element = document.getElementById(elementId);
        const isPositive = change >= 0;
        
        element.textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
        element.className = `value ${isPositive ? 'positive' : 'negative'}`;
    }

    async generatePrediction() {
        this.showLoading(true);
        
        try {
            // Simulate prediction calculation
            await this.delay(2000); // Simulate processing time
            
            const prediction = this.calculatePrediction();
            this.displayPredictionResults(prediction);
            
        } catch (error) {
            console.error('Prediction error:', error);
            this.showError('Failed to generate prediction');
        } finally {
            this.showLoading(false);
        }
    }

    calculatePrediction() {
        const prices = this.stockData.prices;
        const currentPrice = this.stockData.currentPrice;
        
        // Technical analysis calculations
        const sma5 = this.calculateSMA(prices, 5);
        const sma10 = this.calculateSMA(prices, 10);
        const sma20 = this.calculateSMA(prices, 20);
        
        // Trend analysis
        const last5Days = prices.slice(-5);
        const trend = (last5Days[4] - last5Days[0]) / 4;
        const trendPrediction = currentPrice + trend;
        
        // Weighted moving average
        const weights = [1, 2, 3, 4, 5];
        const recentPrices = prices.slice(-5);
        const weightedSum = recentPrices.reduce((sum, price, index) => sum + price * weights[index], 0);
        const weightSum = weights.reduce((sum, weight) => sum + weight, 0);
        const weightedAvg = weightedSum / weightSum;
        
        // Consensus prediction
        const predictions = [sma5, sma10, weightedAvg, trendPrediction];
        const consensus = predictions.reduce((sum, pred) => sum + pred, 0) / predictions.length;
        
        // Support and resistance
        const recentHighs = this.stockData.highs;
        const recentLows = this.stockData.lows;
        const supportLevel = Math.min(...recentLows);
        const resistanceLevel = Math.max(...recentHighs);
        
        const priceChange = consensus - currentPrice;
        const percentChange = (priceChange / currentPrice) * 100;
        
        let outlook;
        if (percentChange > 2) outlook = '🚀 STRONG BULLISH';
        else if (percentChange > 0) outlook = '📈 BULLISH';
        else if (percentChange > -2) outlook = '📉 BEARISH';
        else outlook = '🔻 STRONG BEARISH';
        
        return {
            predictedPrice: consensus,
            priceChange,
            percentChange,
            outlook,
            indicators: {
                sma5,
                sma10,
                sma20,
                trendPrediction,
                supportLevel,
                resistanceLevel
            }
        };
    }

    calculateSMA(prices, period) {
        const relevantPrices = prices.slice(-period);
        return relevantPrices.reduce((sum, price) => sum + price, 0) / period;
    }

    displayPredictionResults(prediction) {
        const resultsDiv = document.getElementById('prediction-results');
        
        // Update main prediction
        document.getElementById('predicted-price').textContent = `$${prediction.predictedPrice.toFixed(2)}`;
        
        const changeElement = document.getElementById('price-change');
        changeElement.textContent = `${prediction.priceChange >= 0 ? '+' : ''}${prediction.priceChange.toFixed(2)} (${prediction.percentChange >= 0 ? '+' : ''}${prediction.percentChange.toFixed(2)}%)`;
        changeElement.className = `price-change ${prediction.priceChange >= 0 ? 'positive' : 'negative'}`;
        
        document.getElementById('market-outlook').textContent = prediction.outlook;
        
        // Update technical indicators
        const indicators = prediction.indicators;
        document.getElementById('sma-5').textContent = `$${indicators.sma5.toFixed(2)}`;
        document.getElementById('sma-10').textContent = `$${indicators.sma10.toFixed(2)}`;
        document.getElementById('sma-20').textContent = `$${indicators.sma20.toFixed(2)}`;
        document.getElementById('trend-prediction').textContent = `$${indicators.trendPrediction.toFixed(2)}`;
        document.getElementById('support-level').textContent = `$${indicators.supportLevel.toFixed(2)}`;
        document.getElementById('resistance-level').textContent = `$${indicators.resistanceLevel.toFixed(2)}`;
        
        // Update prediction card styling
        const predictionCard = document.querySelector('.prediction-card');
        predictionCard.className = `prediction-card ${prediction.priceChange >= 0 ? 'bullish' : 'bearish'}`;
        
        // Show results
        resultsDiv.style.display = 'block';
    }

    async refreshData() {
        document.getElementById('refresh-data-btn').textContent = '🔄 Refreshing...';
        
        try {
            await this.delay(1500);
            
            // Simulate small price fluctuation
            this.stockData.currentPrice += (Math.random() - 0.5) * 2;
            this.updateCurrentDataDisplay();
            
            this.showSuccess('Data refreshed successfully!');
        } catch (error) {
            this.showError('Failed to refresh data');
        } finally {
            document.getElementById('refresh-data-btn').textContent = '🔄 Refresh Data';
        }
    }

    async downloadNewData() {
        document.getElementById('download-new-data-btn').textContent = '📥 Downloading...';
        
        try {
            await this.delay(3000);
            
            // In a real implementation, this would trigger the Python script
            this.showSuccess('New data downloaded! Data has been updated.');
            await this.loadInitialData();
            
        } catch (error) {
            this.showError('Failed to download new data');
        } finally {
            document.getElementById('download-new-data-btn').textContent = '📥 Download New Data';
        }
    }

    showLoading(show) {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = show ? 'flex' : 'none';
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        // Simple notification (you could enhance this with a proper notification system)
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1001;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#48bb78' : '#f56565'};
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new StockPredictor();
});

// Add slide-in animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
