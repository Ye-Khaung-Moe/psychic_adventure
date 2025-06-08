import mysql.connector

def get_connection():
    connection = mysql.connector.connect(host='localhost', database='python_db', user='root', password='LouisYe2000#')
    return connection

def close_connection(connection):
    if connection:
        connection.close()

def get_hospital_name(hospital_id):
    #Fetch Hospital Name Using Hospital id 
    try: 
        connection = get_connection()
        cursor = connection.cursor()
        select_query = """select * from Hospital where Hospital_Id = %s"""
        cursor.execute(select_query, (hospital_id,))
        record = cursor.fetchone()
        return record[1]
    except (Exception, mysql.connector.Error) as error: 
        print("Error while gettting data",error)

def get_doctors(hospital_id): 
    try:
        hospital_name = get_hospital_name(hospital_id)
        connection = get_connection()
        cursor = connection.cursor()
        sql_select_query = """select * from Doctor where Hospital_Id = %s"""
        cursor.execute(sql_select_query, (hospital_id,))
        records = cursor.fetchall()

        print("Printing Doctor of", hospital_name, "Hospital")
        for row in records:
            print("Doctor ID:", row[0])
            print("Doctor Name:", row[1])
            print("Hospital ID:", row[2])
            print("Hospital Name:", hospital_name)
            print("Joing Date:", row[3])
            print("Speciality:", row[4])
            print("Salary:", row[5])
            print("Experience:", row[6], "\n")
        close_connection(connection)
    except(Exception, mysql.connector.Error) as error:
        print("Error while getting data", error)

print("Question 3: Getting Doctor list of given Hospital ID")
get_doctors(1)


         




