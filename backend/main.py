from fastapi import FastAPI
import random

app = FastAPI()


@app.get("/hello")
async def root():
    data = []
    for i in range(10000):
        tempdata = []
        for j in range(random.randint(0, 20)):
            tempdata.append([random.uniform(-90, 90),random.uniform(-90,90)])
        data.append(tempdata)

    return data