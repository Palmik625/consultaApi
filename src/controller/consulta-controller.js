const ConsultasDAO = require('../DAO/consulta-DAO')
const Consultas = require('../model/consulta-model')


module.exports = (app,bd) =>{
    const consultasBanco = new ConsultasDAO(bd)

    app.get("/consultas", async (req, res)=>{
        try{
            const resposta = await consultasBanco.getAllConsultas();
            res.json({ result: resposta });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        });

    app.get("/consultas/:id", async (req, res) => {
        let { id } = req.params;
        try {
          if (parseInt(id)) {
            let resposta = await consultasBanco.getAllConsulta(id);
            if (resposta) res.json( resposta );
            else {
              throw new Error("Nenhuma consulta encontrada");
            }
          } else {
            throw new Error("é esperado um ID tipo INT, tente novamente");
          }
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
      
      app.post("/consultas", async (req, res) => {
        const { titulo,nome_dr,nome_paciente, descricao, status,data_consulta, id_Paciente} = req.body;
        let newConsultas = new Consultas(titulo,nome_dr,nome_paciente, descricao, status,data_consulta,id_Paciente);
        try {
          await consultasBanco.insertConsultas(newConsultas);
          res.status(201).json({
            message: "Consultas inserida com sucesso",
            error: false,
          });
        } catch (err) {
          res.status(500).json({
            message: "Erro ao inserir ",Consultas,
            serverLog: err.message,
            error: true,
          });
        }
      });

      app.delete("/consultas/:id", async (req, res) => {
        const { id } = req.params;
        try {
          await consultasBanco.deleteConsultas(id);
          res.status(200).json({
            message: "Consultas deletada com sucesso",
            error: false,
          });
        } catch (err) {
          res.status(500).json({
            message: "Erro ao deletar consultas",
            serverLog: err.message,
            error: true,
          });
        }
      });

      app.put("/consultas/:id", async (req, res) => {
        const {titulo,nome_dr,nome_paciente, descricao, status,data_consulta,id_paciente} = req.body;
    
        const { id } = req.params;
    
        try {
          await consultasBanco.updateConsultas( titulo,nome_dr,nome_paciente, descricao, status,data_consulta,id_paciente);
          res.status(200).json({
            message: "consultas atualizada com sucesso",
            error: false,
          });
        } catch (err) {
          res.status(500).json({
            message: "Erro ao atualizar a consultas",
            serverLog: err.message,
            error: true,
          });
        }
      });
    };