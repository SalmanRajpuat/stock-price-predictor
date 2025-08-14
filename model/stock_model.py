# Model: Handles data processing and prediction logic
# LSTM-based stock price predictor

import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

class StockPriceModel:
    def __init__(self):
        self.scaler = MinMaxScaler(feature_range=(0, 1))
        self.model = None

    def preprocess(self, data):
        # Assumes 'Close' column for prices
        data = data[['Close']]
        scaled = self.scaler.fit_transform(data)
        return scaled

    def create_sequences(self, data, seq_length=60):
        X, y = [], []
        for i in range(seq_length, len(data)):
            X.append(data[i-seq_length:i, 0])
            y.append(data[i, 0])
        return np.array(X), np.array(y)

    def build_model(self, input_shape):
        model = Sequential()
        model.add(LSTM(50, return_sequences=True, input_shape=input_shape))
        model.add(LSTM(50))
        model.add(Dense(1))
        model.compile(optimizer='adam', loss='mean_squared_error')
        self.model = model

    def train(self, X_train, y_train, epochs=20, batch_size=32):
        self.model.fit(X_train, y_train, epochs=epochs, batch_size=batch_size, verbose=0)

    def predict_next(self, last_sequence):
        pred = self.model.predict(np.array([last_sequence]))
        return self.scaler.inverse_transform(pred)[0][0]
