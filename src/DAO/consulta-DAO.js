
class ConsultaDAO {
    constructor(db) {
      this.db = db;
    }
  
    getAllConsulta() {
      return new Promise((resolve, reject) => {
        this.db.all("Select * from CONSULTA", (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
  
    getAllConsulta(idPaciente) {
      return new Promise((resolve, reject) => {
        this.db.get("Select * from CONSULTA where IDPACIENTE = ?", idPaciente, (err, rows) => {
            console.log(rows)
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
  
    insertConsulta(consulta) {
        console.log(consulta)
      return new Promise((resolve, reject) => {
        this.db.run(
          `INSERT INTO CONSULTA (TITULO,NOME_DR,NOME_PACIENTE, DESCRICAO, STATUS, DATA_CONSULTA, ID_PACIENTE) VALUES (?,?,?,?,?,?,?)`,
          Object.values(consulta),
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });
    }
  
    deleteConsulta(idPaciente) {
      return new Promise((resolve, reject) => {
        this.db.run(`delete from  where CONSULTAS IdPACIENTE = ?`, idPaciente, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }

    updateConsultas( titulo,nome_dr,nome_paciente,descricao,status,data_consulta,id_paciente) {
      if (titulo || nome_dr || nome_paciente || descricao || status || data_consulta || id_paciente ) {
        let virgula = false
        let newArray = []
        let sql = 'UPDATE CONSULTAS SET '
        if(titulo){
          sql = sql + ' TITULO = ?'
          virgula = true
          newArray.push(titulo)
        }
        if(descricao){
          if(virgula)
            sql = sql  +',DESCRICAO = ?'
          else{
            sql = sql  +'DESCRICAO = ?'
            virgula = true
          }
          newArray.push(descricao)
        }
        if(status){
          if(virgula)
            sql = sql  +',STATUS = ?'
          else{
            sql = sql  +'STATUS = ?'
            virgula = true
          }
          newArray.push(status)
        }
        sql = sql + 'WHERE IDPACIENTE = ?'
        newArray.push(id)
        return new Promise((resolve, reject) => {
          this.db.run(sql, newArray, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
      else
      throw new Error('Nenhum atributo ( titulo,nome_dr,nome_paciente, descricao, status, data_consulta,id_paciente) enviado')
    }
  }
  
  module.exports = ConsultaDAO;
  