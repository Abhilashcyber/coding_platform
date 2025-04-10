import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate('./serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

class DB:
    def __init__(self):
        self.db = db
    
    def get_all_questions():
        pass

    def get_question_by_id(id:int):
        pass

    def get_users():
        pass

    def get_user_by_email(email:str):
        pass
