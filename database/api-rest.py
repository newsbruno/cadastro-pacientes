#import pyodbc 
import sqlite3
from flask import Flask, request, jsonify 
from flask_cors import CORS 
import os.path
from validate_docbr import CPF

def connect_to_db():

    #server = 'db_sql.be3.co,1515' 
    #database = 'DB' 
    #username = 'teste.be3' 
    #password = 'ProcSeletivo#2020' 
    #conn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(BASE_DIR, "database.db")
    conn = sqlite3.connect(db_path)
    return conn

def create_db_table():
    try:
        conn = connect_to_db()
        conn.execute('''
            CREATE TABLE IF NOT EXISTS pacientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                prontuario TEXT NOT NULL,
                nome TEXT NOT NULL,
                sobrenome TEXT NOT NULL,
                dataNascimento TEXT NOT NULL,
                genero INTERGER NOT NULL,
                cpf TEXT NOT NULL,
                rg TEXT NOT NULL,
                ufRG TEXT NOT NULL,
                email TEXT NOT NULL,
                celular TEXT NOT NULL,
                telefonefixo TEXT NOT NULL,
                convenio TEXT NOT NULL,
                carteirinhaconvenio TEXT NOT NULL,
                validadecarteirinha TEXT NOT NULL
            );
        ''')

        conn.commit()
        print("Paciente table created successfully")
    except:
        print("Paciente table creation failed - Maybe table")
    finally:
        conn.close()


def get_pacientes():
    pacientes = []
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM pacientes")
        rows = cur.fetchall()

        for i in rows:
            paciente = {}
            paciente["id"] = i["id"]
            paciente["prontuario"] = i["prontuario"]
            paciente["nome"] = i["nome"]
            paciente["sobrenome"] = i["sobrenome"]
            paciente["dataNascimento"] = i["dataNascimento"]
            paciente["genero"] = i["genero"]
            paciente["cpf"] = i["cpf"]
            paciente["rg"] = i["rg"]
            paciente["ufRG"] = i["ufRG"]
            paciente["email"] = i["email"]
            paciente["celular"] = i["celular"]
            paciente["telefonefixo"] = i["telefonefixo"]
            paciente["convenio"] = i["convenio"]
            paciente["carteirinhaconvenio"] = i["carteirinhaconvenio"]
            paciente["validadecarteirinha"] = i["validadecarteirinha"]
            pacientes.append(paciente)

    except:
        pacientes = []

    return {"message":"Pacientes retornados com sucesso.", "data":pacientes}


def get_paciente_by_cpf(cpf):
    paciente = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM pacientes WHERE cpf = ?", 
                       (cpf,))
        row = cur.fetchone()

        paciente["id"] = row["id"]
        paciente["prontuario"] = row["prontuario"]
        paciente["nome"] = row["nome"]
        paciente["sobrenome"] = row["sobrenome"]
        paciente["dataNascimento"] = row["dataNascimento"]
        paciente["genero"] = row["genero"]
        paciente["cpf"] = row["cpf"]
        paciente["rg"] = row["rg"]
        paciente["ufRG"] = row["ufRG"]
        paciente["email"] = row["email"]
        paciente["celular"] = row["celular"]
        paciente["telefonefixo"] = row["telefonefixo"]
        paciente["convenio"] = row["convenio"]
        paciente["carteirinhaconvenio"] = row["carteirinhaconvenio"]
        paciente["validadecarteirinha"] = row["validadecarteirinha"]
    except:
        paciente = {}

    return paciente


def get_paciente_by_id(id):
    paciente = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM pacientes WHERE id = ?", 
                       (id,))
        row = cur.fetchone()

        paciente["id"] = row["id"]
        paciente["prontuario"] = row["prontuario"]
        paciente["nome"] = row["nome"]
        paciente["sobrenome"] = row["sobrenome"]
        paciente["dataNascimento"] = row["dataNascimento"]
        paciente["genero"] = row["genero"]
        paciente["cpf"] = row["cpf"]
        paciente["rg"] = row["rg"]
        paciente["ufRG"] = row["ufRG"]
        paciente["email"] = row["email"]
        paciente["celular"] = row["celular"]
        paciente["telefonefixo"] = row["telefonefixo"]
        paciente["convenio"] = row["convenio"]
        paciente["carteirinhaconvenio"] = row["carteirinhaconvenio"]
        paciente["validadecarteirinha"] = row["validadecarteirinha"]
    except:
        paciente = {}

    return paciente


def update_paciente(paciente):
    updated_paciente = {}
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("UPDATE pacientes SET prontuario = ?, nome = ?, sobrenome = ?, dataNascimento = ?, genero = ?, cpf = ?, rg = ?, ufRG = ?, email = ?, celular = ?, telefonefixo = ?, convenio = ?, carteirinhaconvenio = ?, validadecarteirinha = ? WHERE id = ? " ,
        (paciente['prontuario'] , paciente['nome'] , paciente['sobrenome'] , paciente['dataNascimento'] , paciente['genero'],paciente['cpf'],paciente['rg'],paciente['ufRG'],paciente['email'],paciente['celular'],paciente['telefonefixo'],paciente['convenio'],paciente['carteirinhaconvenio'],paciente['validadecarteirinha'],paciente['id']))
        conn.commit()

        updated_paciente = get_paciente_by_id(paciente["id"])

    except:
        conn.rollback()
        updated_paciente = {}
    finally:
        conn.close()

    return {"message":" O paciente " + paciente['nome'] + " foi atualizado com sucesso! ", "data":updated_paciente}


def insert_paciente(paciente):
    inserted_paciente = {}
    cpf = CPF()
    if cpf.validate(paciente['cpf']):
        check_cpf_paciente = get_paciente_by_cpf(paciente['cpf'])
        if bool(check_cpf_paciente):
            return {"message":"Este cpf já existe", "data":""}
        else:
            try:
                conn = connect_to_db()
                cur = conn.cursor()
                cur.execute("INSERT INTO pacientes (prontuario, nome, sobrenome, dataNascimento, genero, cpf, rg, ufRG, email, celular, telefonefixo, convenio, carteirinhaconvenio, validadecarteirinha) VALUES (?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?) " ,
                (paciente['prontuario'] , paciente['nome'] , paciente['sobrenome'] , paciente['dataNascimento'] , paciente['genero'],paciente['cpf'],paciente['rg'],paciente['ufRG'],paciente['email'],paciente['celular'],paciente['telefonefixo'],paciente['convenio'],paciente['carteirinhaconvenio'],paciente['validadecarteirinha']))
                conn.commit()
                inserted_paciente = get_paciente_by_id(cur.lastrowid)
            except:
                conn().rollback()

            finally:
                conn.close()
        
        return {"message":"O paciente " + paciente['nome'] + " foi salvo com sucesso!", "data": inserted_paciente}
    else:
         return {"message":"Este cpf não é válido", "data":""}


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

#Get pacientes
@app.route('/api/pacientes', methods=['GET'])
def api_get_pacientes():
    create_db_table()
    return jsonify(get_pacientes())

#Get pacientes by id
@app.route('/api/pacientes/<id>', methods=['GET'])
def api_get_paciente(id):
    create_db_table()
    return jsonify(api_get_paciente(id))

#Post adicionar pacientes
@app.route('/api/pacientes/add',  methods = ['POST'])
def api_add_pacientes():
    create_db_table()
    paciente = request.get_json()
    return jsonify(insert_paciente(paciente))

#Put atualizar pacientes
@app.route('/api/pacientes/update',  methods = ['PUT'])
def api_update_paciente():
    create_db_table()
    paciente = request.get_json()
    return jsonify(update_paciente(paciente))

if __name__ == "__main__":
    #app.debug = True
    #app.run(debug=True)
    app.run(host='192.168.1.6') #run app