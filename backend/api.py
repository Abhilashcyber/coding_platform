from datetime import timedelta
from typing import Annotated
from fastapi import Depends, FastAPI, HTTPException,status
from fastapi.security import OAuth2PasswordRequestForm
from backend.auth import authenticate_user, create_access_token
from backend.models import Token,User
from backend.db import DB
from dotenv import load_dotenv
import os
#command to run the api server : uvicorn api:app --reload
app = FastAPI()
db = DB()
load_dotenv()
base = "/api"

@app.get(base)
def hello():
    return {"message": "Hello world"}

@app.post(base+"/register")
def register(data: User):
    user = db.get_user_by_username(data.username)
    if user:
        return {"message": "User with that username already exists"}
    res = db.register_user(data)
    if res:
        return {"message": "Registered user succesfully"}
    else:
        return {"message": "Registration of user was unsuccessful"}

@app.post("/token")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=os.getenv("ACCESS_TOKEN_EXP_TIME"))
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")

