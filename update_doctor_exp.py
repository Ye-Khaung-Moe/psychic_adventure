import mysql.connector
import datetime
from dateutil.relativedelta import relativedelta

def get_connection():
    connection = mysql.connector.connect(host='localhost', database='python_db', user='root', password='LouisYe2000#')
    return connection

def close_connection(connection):
    if connection:
        connection.close()
    
def update_doctor_experience(doctor_id):
    try:
        #Get joining date 
        connection = get_connection()
        cursor = connection.cursor()
        select_query = """select Joining_Date from Doctor where Doctor_Id = %s"""
        cursor.execute(select_query, (doctor_id,))
        joining_date = cursor.fetchone()

        #calculate experience in year 
        joining_date_1 = datetime.datetime.strptime(''.join(map(str, joining_date)), '%Y-%m-%d')
        today_date = datetime.datetime.now()
        experience = relativedelta(today_date, joining_date_1).years

        #Update doctor exp now 
        connection = get_connection()
        cursor = connection.cursor()
        select_query = """update Doctor set Experience = %s where Doctor_Id = %s"""
        cursor.execute(select_query, (experience, doctor_id))
        connection.commit()
        print("Doctor ID:", doctor_id, "Experience:", experience, "years")
        close_connection(connection)
    except(Exception, mysql.connector.Error) as error:
        print("Error occur while getting data",error)

print("Question 4: Calcuate & Update Doctor Experience")
update_doctor_experience(102)

