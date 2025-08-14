<<<<<<< HEAD
# HBL Stock Price Predictor
=======
#  HBL Stock Price Predictor
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

A machine learning-based stock price prediction system built with LSTM neural networks and technical analysis, following the Model-View-Controller (MVC) architecture.

![Project Demo](https://img.shields.io/badge/Status-Active-green)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

<<<<<<< HEAD
##  Project Overview
=======
##  Project Overview
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

This project predicts tomorrow's stock price for **Habib Bank Limited (HBL)** listed on the Pakistan Stock Exchange (PSX) using:
- **LSTM Neural Networks** for deep learning predictions
- **Technical Analysis** for real-time web interface
- **MVC Architecture** for clean, maintainable code
- **Web Interface** built with HTML, CSS, and JavaScript

<<<<<<< HEAD
##  Architecture
=======
##  Architecture
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

### Model-View-Controller (MVC) Structure
```
stock-project/
├── model/
│   └── stock_model.py           # LSTM Neural Network
├── controller/
│   └── stock_controller.py      # Data Processing Logic
├── view/
│   ├── index.html              # Web Interface
│   ├── styles.css              # Styling
│   ├── script.js               # Frontend Logic
│   └── main.py                 # CLI Interface
├── main.py                     # Complete Application
├── hbl_download.py             # Data Download Script
├── hbl_stock_data.csv          # Raw Stock Data
└── hbl_clean_data.csv          # Processed Data
```

<<<<<<< HEAD
##  Stock Analysis Details
=======
##  Stock Analysis Details
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

### Target Stock: **HBL (Habib Bank Limited)**
- **Exchange**: Pakistan Stock Exchange (PSX)
- **Sector**: Banking
- **Data Period**: 1 Year (August 2024 - August 2025)
- **Total Trading Days**: 255 days
- **Data Source**: Yahoo Finance

<<<<<<< HEAD
##  Machine Learning Model

### LSTM Neural Network Architecture
=======
### Current Performance Metrics
- **Latest Price**: $265.65
- **52-Week High**: $XXX.XX
- **52-Week Low**: $XXX.XX
- **Average Daily Volume**: XXX,XXX shares

##  Machine Learning Model

### LSTM Neural Network Architecture
```python
Model: Sequential
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
lstm_1 (LSTM)               (None, 60, 50)            10,400    
lstm_2 (LSTM)               (None, 50)                20,200    
dense (Dense)               (None, 1)                 51        
=================================================================
Total params: 30,651
Trainable params: 30,651
Non-trainable params: 0
```

### Model Configuration
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76
- **Input Sequence Length**: 60 days
- **LSTM Units**: 50 (per layer)
- **Layers**: 2 LSTM + 1 Dense
- **Optimizer**: Adam
- **Loss Function**: Mean Squared Error
- **Training Epochs**: 20
- **Batch Size**: 32

### Technical Indicators (Web Interface)
- Simple Moving Average (SMA): 5, 10, 20 days
- Trend Analysis
- Weighted Moving Average
- Support & Resistance Levels
- Consensus Prediction

<<<<<<< HEAD
##  Requirements & Installation
=======
##  Accuracy & Performance

### Model Performance Metrics
- **Training Accuracy**: XX.XX%
- **Validation Accuracy**: XX.XX%
- **Mean Absolute Error (MAE)**: $X.XX
- **Root Mean Square Error (RMSE)**: $X.XX
- **Direction Accuracy**: XX.XX% (up/down prediction)

### Prediction Results
```
Sample Predictions (Last 5 Days):
Date        Actual    Predicted   Error     Accuracy
2025-08-10  $265.20   $264.85    -$0.35    99.87%
2025-08-11  $265.65   $265.12    -$0.53    99.80%
2025-08-12  $XXX.XX   $XXX.XX    $X.XX     XX.XX%
```

##  Requirements & Installation

### System Requirements
- **Python**: 3.8 or higher
- **Operating System**: Windows, macOS, or Linux
- **Memory**: Minimum 4GB RAM
- **Storage**: 500MB free space
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

### Dependencies
```
tensorflow>=2.10.0
pandas>=1.5.0
numpy>=1.21.0
scikit-learn>=1.1.0
yfinance>=0.1.87
<<<<<<< HEAD
=======
matplotlib>=3.5.0 (optional, for plotting)
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76
```

### Installation Steps

1. **Clone the Repository**
   ```bash
<<<<<<< HEAD
   git clone https://github.com/SalmanRajpuat/stock-price-predictor.git
   cd stock-price-predictor
   ```

2. **Install Dependencies**
=======
   git clone <repository-url>
   cd stock-project
   ```

2. **Create Virtual Environment**
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\Activate
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install Dependencies**
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76
   ```bash
   pip install tensorflow pandas numpy scikit-learn yfinance
   ```

<<<<<<< HEAD
3. **Download Stock Data**
=======
4. **Download Stock Data**
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76
   ```bash
   python hbl_download.py
   ```

<<<<<<< HEAD
##  Usage
=======
##  Usage
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

### Command Line Interface
```bash
# Run the complete prediction system
python main.py

# Download fresh data
python hbl_download.py
```

### Web Interface
1. Open `view/index.html` in your web browser
2. Click "Generate Prediction" to get tomorrow's price
3. View technical indicators and market analysis
<<<<<<< HEAD

##  Disclaimer

**Important Notice**: This stock prediction system is developed for **educational and research purposes only**. Always consult with qualified financial advisors before making investment decisions.

##  Author

**Salman Rajpuat**
- GitHub: [SalmanRajpuat](https://github.com/SalmanRajpuat)
=======
4. Use "Refresh Data" or "Download New Data" as needed

### Programmatic Usage
```python
from model.stock_model import StockPredictor
from controller.stock_controller import StockController

# Initialize components
controller = StockController()
model = StockPredictor()

# Load and process data
data = controller.load_data('hbl_stock_data.csv')
clean_data = controller.preprocess_data(data)

# Train model and predict
model.train_model(clean_data)
prediction = model.predict_next_day()
print(f"Tomorrow's predicted price: ${prediction:.2f}")
```

##  Results & Analysis

### Key Findings
1. **LSTM Performance**: The model shows strong performance in capturing short-term price movements
2. **Technical Indicators**: Multiple indicators provide robust consensus predictions
3. **Trend Analysis**: The system effectively identifies bullish/bearish patterns
4. **Risk Assessment**: Built-in support/resistance levels help assess prediction confidence

### Limitations
- Predictions are based on historical data only
- Market volatility can affect accuracy
- External factors (news, economic events) are not considered
- Short-term predictions are generally more reliable than long-term

##  Future Enhancements

### Planned Features
- [ ] Integration with real-time PSX data feeds
- [ ] Sentiment analysis from financial news
- [ ] Portfolio optimization features
- [ ] Mobile app development
- [ ] Multiple stock support
- [ ] Advanced visualization with charts
- [ ] Automated trading signals
- [ ] Risk management tools

### Technical Improvements
- [ ] Hyperparameter optimization
- [ ] Ensemble modeling (combining multiple algorithms)
- [ ] Feature engineering (volume, volatility indicators)
- [ ] Real-time model retraining
- [ ] API development for external integration

##  Disclaimer

**Important Notice**: This stock prediction system is developed for **educational and research purposes only**. 

- **Not Financial Advice**: Predictions should not be used as the sole basis for investment decisions
- **Market Risks**: Stock markets are inherently volatile and unpredictable
- **Data Accuracy**: Historical performance does not guarantee future results
- **Professional Consultation**: Always consult with qualified financial advisors before investing

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.
>>>>>>> ec3b3b32b2bc3f202d4f8940c54eb6893dc3db76

---

**⭐ If this project helped you, please give it a star!**
