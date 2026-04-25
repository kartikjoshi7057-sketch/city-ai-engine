import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

# Sample dataset
data = {
    "traffic_count":[100,150,300,400,120,250],
    "rain":[0,0,1,1,0,1],
    "congestion":[0,0,1,1,0,1]
}

df = pd.DataFrame(data)

X = df[["traffic_count","rain"]]
y = df["congestion"]

model = DecisionTreeClassifier()
model.fit(X,y)

# Save model
joblib.dump(model, "traffic_model.pkl")

print("Model trained and saved!")