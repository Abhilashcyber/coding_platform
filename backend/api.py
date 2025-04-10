from fastapi import FastAPI
#command to run the api server : uvicorn api:app --reload
app = FastAPI()
base = "/api"

@app.get(base)
def hello():
    return {"message": "Hello world"}

