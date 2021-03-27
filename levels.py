import pandas as pd
df = pd.read_csv("levels/level1.csv", sep="\t")
print(df.head(10))
rooms = []
for index, row in df.iterrows():
    print(row["no"])
    rooms.append({
        "no": row["no"],
        "doors": row["doors"],
        "score": row["score"]
    })


print(rooms)