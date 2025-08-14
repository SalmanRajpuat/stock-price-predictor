# Controller: Handles data flow between Model and View
import pandas as pd
from model.stock_model import StockPriceModel

class StockController:
    def __init__(self):
        self.model = StockPriceModel()

    def load_data(self, filepath):
        data = pd.read_csv(filepath)
        return data

    def train_model(self, data):
        scaled = self.model.preprocess(data)
        X, y = self.model.create_sequences(scaled)
        X = X.reshape((X.shape[0], X.shape[1], 1))
        self.model.build_model((X.shape[1], 1))
        self.model.train(X, y)
        return X

    def predict_tomorrow(self, data):
        scaled = self.model.preprocess(data)
        last_sequence = scaled[-60:].reshape(1, 60, 1)[0]
        return self.model.predict_next(last_sequence)
