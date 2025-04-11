import firebase_admin
from firebase_admin import credentials, firestore
from helpers import get_password_hash
from models import User, UserInDB
cred = credentials.Certificate('./serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

class DB:
    def __init__(self):
        self.db = db
    
    def get_all_questions(self):
        pass

    def get_question_by_id(self,id:int):
        pass

    def get_users(self,):
        pass

    def get_user_by_username(self,username:str):
        doc_ref = db.collection("users").document(username)
        doc = doc_ref.get()
        if doc.exists:
            return doc.to_dict()
        else:
            return False

    def register_user(self,data: User):
        hashed_password = get_password_hash(data.password)
        store_data = UserInDB(username=data.username,
                              email=data.email,
                              full_name=data.full_name,
                              disabled=False,
                              hashed_password=hashed_password)
        doc_ref = db.collection("users").document(data.username)
        res = doc_ref.set(store_data.model_dump())
        return res

if __name__ == "__main__":
    db_class = DB()
    user = User(username="Abhi",email="Something",full_name="something",disabled=False,password="something")
    # res = db_class.register_user(user)
    # res = db_class.get_user_by_username("Abhi")
    # print(res)