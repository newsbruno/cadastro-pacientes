import pyodbc 

def connect_to_db():

    conn =  pyodbc.connect('''DRIVER={SQL Server};
                  SERVER=db_sql.be3.co;
                  PORT=1515;
                  DATABASE=DB;
                  UID=teste.be3;
                  PWD=ProcSeletivo#2020;
               ''')

    return conn

def create_db_table():
    try:
        conn = connect_to_db()
        conn.execute('''
            CREATE TABLE users (
                user_id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                country TEXT NOT NULL
            );
        ''')

        conn.commit()
        print("User table created successfully")
    except:
        print("User table creation failed - Maybe table")
    finally:
        conn.close()



cursor = connect_to_db()
cursor.execute('SHOW TABLES;')

for i in cursor:
    print(i)