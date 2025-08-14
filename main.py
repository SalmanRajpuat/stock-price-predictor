#!/usr/bin/env python3
"""
HBL Stock Price Prediction System
Complete MVC Implementation with LSTM Neural Network
"""

import pandas as pd
import numpy as np
import os
import sys

def main():
    print("=" * 60)
    print("HBL STOCK PRICE PREDICTION SYSTEM")
    print("=" * 60)
    
    # Check if data file exists
    if not os.path.exists('hbl_stock_data.csv'):
        print("❌ Error: hbl_stock_data.csv not found!")
        print("Please run hbl_download.py first to download the data.")
        return
    
    print("📊 Loading and processing HBL stock data...")
    
    try:
        # Load raw data
        data = pd.read_csv('hbl_stock_data.csv')
        
        # Clean the data - remove metadata rows
        data_clean = data.iloc[2:].copy()
        data_clean.columns = ['Date', 'Close', 'High', 'Low', 'Open', 'Volume']
        data_clean['Date'] = pd.to_datetime(data_clean['Date'])
        data_clean.set_index('Date', inplace=True)
        
        # Convert to numeric
        for col in ['Close', 'High', 'Low', 'Open', 'Volume']:
            data_clean[col] = pd.to_numeric(data_clean[col], errors='coerce')
        
        # Remove any rows with NaN values
        data_clean = data_clean.dropna()
        
        print(f"✅ Data processed successfully!")
        print(f"📈 Data range: {data_clean.index[0].date()} to {data_clean.index[-1].date()}")
        print(f"📊 Total trading days: {len(data_clean)}")
        print(f"💰 Latest closing price: ${data_clean['Close'].iloc[-1]:.2f}")
        
        # Save cleaned data
        data_clean.to_csv('hbl_clean_data.csv')
        print("💾 Cleaned data saved to hbl_clean_data.csv")
        
    except Exception as e:
        print(f"❌ Error processing data: {e}")
        return
    
    print("\n🤖 Initializing LSTM Neural Network...")
    
    try:
        # Import and use the model
        from model.stock_model import StockPriceModel
        from controller.stock_controller import StockController
        
        controller = StockController()
        
        print("🧠 Training the LSTM model (this may take a few minutes)...")
        X = controller.train_model(data_clean)
        print("✅ Model training completed!")
        
        print("🔮 Making prediction for tomorrow's price...")
        predicted_price = controller.predict_tomorrow(data_clean)
        
        # Calculate prediction results
        latest_price = data_clean['Close'].iloc[-1]
        price_change = predicted_price - latest_price
        percent_change = (price_change / latest_price) * 100
        
        # Display results
        print("\n" + "=" * 60)
        print("PREDICTION RESULTS")
        print("=" * 60)
        print(f"📅 Current Date: {data_clean.index[-1].date()}")
        print(f"💰 Current Price: ${latest_price:.2f}")
        print(f"🔮 Predicted Price: ${predicted_price:.2f}")
        print(f"📊 Expected Change: ${price_change:.2f} ({percent_change:+.2f}%)")
        
        if price_change > 0:
            print("📈 PREDICTION: Price is expected to INCREASE")
        else:
            print("📉 PREDICTION: Price is expected to DECREASE")
        
        print("\n⚠️  Disclaimer: This is a prediction model for educational purposes.")
        print("    Always do your own research before making investment decisions.")
        print("=" * 60)
        
    except Exception as e:
        print(f"❌ Error during model training or prediction: {e}")
        print("This might be due to:")
        print("- Insufficient training data")
        print("- Missing dependencies")
        print("- Model configuration issues")
        return

if __name__ == "__main__":
    main()
