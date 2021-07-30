const path = require('path');
const caminhoArq = path.resolve(__dirname,'../','../','database.db')

const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database(caminhoArq);

const CONSULTA_SCHEMA = `
CREATE TABLE IF NOT EXISTS CONSULTAS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    TITULO VARCHAR(64),
    NOME_DR VARCHAR(64),
    NOME_PACIENTE VARCHAR(64),
    DESCRICAO VARCHAR(64),
    STATUS VARCHAR(64),
    DATA_CONSULTA VARCHAR(64),
    ID_PACIENTE INTEGER
  
);`;

const ADD_CONSULTAS_DATA = `INSERT INTO CONSULTAS (TITULO,NOME_DR,NOME_PACIENTE, DESCRICAO, STATUS, DATA_CONSULTA,ID_PACIENTE) VALUES
('Consulta','Dr_Zangado','Lucas', 'Consulta agendada para seguda-feira', 'Manhã', '2021-07-20', 3),
('Consulta','Dr_Amorin','Dayanne', 'Consulta agendada para terça-feira', 'Tarde', '2021-07-21', 5),
('Consulta','Dr_Aracy','Vanessa', 'Consulta agendada para quarta-feira', 'Manhã', '2021-07-22', 7),
('Consulta','Dra_Livia','Pedro' ,'Consulta agendada para quinta-feira', 'Tarde', '2021-07-23', 9)`

function criaTabelaConsultas() {
    bd.run(CONSULTA_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de consultas");
    });
}


function populaTabelaConsultas() {
    bd.run(ADD_CONSULTAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Consultas");console.log(error)
    });
}

bd.serialize( ()=> {

    criaTabelaConsultas();
    populaTabelaConsultas();
});
