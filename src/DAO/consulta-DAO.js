class ConsultasDAO {
    constructor(db) {
      this.db = db;
    }
  
    getAllConsultas() {
      return new Promise((resolve, reject) => {
        this.db.all("Select * from CONSULTAS", (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }

    getConsultas(id) {
        return new Promise((resolve, reject) => {
          this.db.get("Select * from CONSULTAS  where ID = ?", id, (err, rows) => {
              console.log(rows)
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }

      insertConsultas(consulta) {
        console.log(consulta)
      return new Promise((resolve, reject) => {
        this.db.run(
          `INSERT INTO CONSULTAS (TITULO,NOME_DR,NOME_PACIENTE DESCRICAO, STATUS, DATA_CONSULTA,ID_MEDICO, ID_PACIENTE) VALUES (?,?,?,?,?,?,?)`,
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

    
    deleteConsultas(consultaId) {
        return new Promise((resolve, reject) => {
          this.db.run(`delete from CONSULTAS where id = ?`, consultaId, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }

      

    updateConsultas(id, titulo,nome_Dr,nome_Paciente, descricao, status,data_consulta,id_Medico,id_Paciente) {
        if (titulo || nome_Dr|| nome_Paciente || descricao || status || data_consulta ||id_Medico || id_Paciente) {
          let virgula = false
          let newArray = []
          let sql = 'UPDATE CONSULTAS SET '
          if(titulo){
            sql = sql + ' TITULO = ?'
            virgula = true
            newArray.push(titulo)
          }
          if(nome_Dr){
            if(virgula)
              sql = sql  +',Nome_DR = ?'
            else{
              sql = sql  +'NOME_DR = ?'
              virgula = true
            }
            newArray.push(nome_Dr)
          }
          if(nome_Paciente){
            if(virgula)
              sql = sql  +',NOME_PACIENTE = ?'
            else{
              sql = sql  +'NOME_PACIENTE = ?'
              virgula = true
            }
            newArray.push(nome_Paciente)
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
          if(data_consulta){
            if(virgula)
              sql = sql  +',DATA_CONSULTA = ?'
            else{
              sql = sql  +'DATA_CONSULTA = ?'
              virgula = true
            }
            newArray.push(data_consulta)
          }
          if(id_Medico){
            if(virgula)
              sql = sql  +',ID_MEDICO = ?'
            else{
              sql = sql  +'ID_MEDICO = ?'
              virgula = true
            }
            newArray.push(id_Medico)
          }
          if(id_Paciente){
            if(virgula)
              sql = sql  +',ID_PACIENTE = ?'
            else{
              sql = sql  +'ID_PACIENTE = ?'
              virgula = true
            }
            newArray.push(id_Paciente)
          }
        
          sql = sql + 'WHERE id = ?'
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
        throw new Error('Nenhum atributo (id, titulo,nomedr,nomepaciente, descricao, status, dataconsulta,idpaciente) enviado')
      }
    }
    
    module.exports = ConsultasDAO;