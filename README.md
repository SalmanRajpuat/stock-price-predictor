# HBL Stock Price Predictor

A machine learning-based stock price prediction system built with LSTM neural networks and technical analysis, following the Model-View-Controller (MVC) architecture.

![Project Demo](https://img.shields.io/badge/Status-Active-green)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 Project Overview

This project predicts tomorrow's stock price for **Habib Bank Limited (HBL)** listed on the Pakistan Stock Exchange (PSX) using:
- **LSTM Neural Networks** for deep learning predictions
- **Technical Analysis** for real-time web interface
- **MVC Architecture** for clean, maintainable code
- **Web Interface** built with HTML, CSS, and JavaScript

## 🏗️ Architecture

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

## 📊 Stock Analysis Details

### Target Stock: **HBL (Habib Bank Limited)**
- **Exchange**: Pakistan Stock Exchange (PSX)
- **Sector**: Banking
- **Data Period**: 1 Year (August 2024 - August 2025)
- **Total Trading Days**: 255 days
- **Data Source**: Yahoo Finance

## 🧠 Machine Learning Model

### LSTM Neural Network Architecture
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

## 🛠️ Requirements & Installation

### Dependencies
```
tensorflow>=2.10.0
pandas>=1.5.0
numpy>=1.21.0
scikit-learn>=1.1.0
yfinance>=0.1.87
```

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SalmanRajpuat/stock-price-predictor.git
   cd stock-price-predictor
   ```

2. **Install Dependencies**
   ```bash
   pip install tensorflow pandas numpy scikit-learn yfinance
   ```

3. **Download Stock Data**
   ```bash
   python hbl_download.py
   ```

## 🚀 Usage

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

## ⚠️ Disclaimer

**Important Notice**: This stock prediction system is developed for **educational and research purposes only**. Always consult with qualified financial advisors before making investment decisions.

## 👨‍💻 Author

**Salman Rajpuat**
- GitHub: [SalmanRajpuat](https://github.com/SalmanRajpuat)

---

**⭐ If this project helped you, please give it a star!**
