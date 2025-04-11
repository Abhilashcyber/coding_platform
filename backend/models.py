from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
    disabled:bool | None = None
    password: str | None = None

class UserInDB(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
    disabled:bool | None = None
    hashed_password: str

