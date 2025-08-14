import yfinance as yf
import pandas as pd

# Download HBL stock data for the past year
symbols = ['HBL.KA', 'HBL.PSX', 'HBL', '6052.PSX']  # Try different symbols
start_date = '2024-08-12'
end_date = '2025-08-12'

hbl_data = None

for symbol in symbols:
    try:
        print(f"Trying symbol: {symbol}")
        hbl_data = yf.download(symbol, start=start_date, end=end_date, progress=False)
        
        if not hbl_data.empty:
            print(f"Success! Found data for {symbol}")
            print(f"Data shape: {hbl_data.shape}")
            print(f"Date range: {hbl_data.index[0]} to {hbl_data.index[-1]}")
            
            # Save to CSV
            hbl_data.to_csv('hbl_stock_data.csv')
            print(f'HBL stock data saved to hbl_stock_data.csv')
            break
        else:
            print(f"No data found for {symbol}")
    except Exception as e:
        print(f"Error with {symbol}: {e}")

if hbl_data is None or hbl_data.empty:
    print("Could not find HBL data with any of the tried symbols.")
    print("You may need to:")
    print("1. Check the correct symbol for HBL on Yahoo Finance")
    print("2. Download data manually from PSX website")
    print("3. Use a different data source")
