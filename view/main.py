# View: Simple CLI for user interaction
from controller.stock_controller import StockController

if __name__ == "__main__":
    print("Stock Price Predictor")
    filepath = input("Enter path to your CSV file with stock prices: ")
    controller = StockController()
    data = controller.load_data(filepath)
    print("Training model...")
    controller.train_model(data)
    print("Model trained.")
    pred = controller.predict_tomorrow(data)
    print(f"Predicted price for tomorrow: {pred:.2f}")
