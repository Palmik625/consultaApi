const ConsultaDAO = require('../DAO/consulta-DAO')
const Consulta = require('../model/consulta-model')
module.exports = (app,bd) =>{
    const DaoCOnsulta = new ConsultaDAO(bd)

    app.get('/consulta', async (req, res)=>{
        try{
            const mpostraConsulta = await DaoCOnsulta.MostrarConsulta()
                res.status(200).json(mostrarConsulta)
        }catch(e){
            res.status(400).json(e)
        }
    })

    app.get('/consulta/:ID', async (req,res)=>{
        
        try{
            const id = req.params.ID;
            const mostrarUmaConsulta = await DaoConsulta.MostrarUmaConsulta(id)
            res.status(200).json(mostrarUmaConsulta)
            }catch(e){
                res.status().json(e)
            }
    })

    app.post('/consulta', async (req,res)=>{
        const { titulo,nome_dr,nome_paciente,descricao,status,data_Consulta,id_pacciente} = req.body;
        const newConsulta = new Consulta (TITULO,NOME_DR,Nome_PACIENTE, DESCRICAO, STATUS, DATA_CONSULTA,ID_PACIENTE);

        try{
            const inserirConsulta = await DaoConsulta.NovaConsulta(newConsulta)
            res.status(200).json(inserirConsulta)
        }catch(e){
            res.status(500).json(e)
        }
    })

    app.delete('/consulta/:', async (req,res)=>{
        const teste = req.params
        
        try{
           const deletarConsulta = await DaoConsulta.DeletarConsulta()
           res.status(200).json(deletarConsulta)
        }catch(e){
            res.status(500).json(e)
        }
    })

    app.put('/consulta/:idPaciente', async (req,res)=>{
        const teste = req.params.idPaciente
        const body = req.body
        const responda = [body.titulo,body.nome_dr,body.nome_paciente,body.descricao,body.status,body.data_Consulta,body.id_paciente]
    

        try{
            const alterarConsulta = await DaoConsulta.AlterarConsulta(teste,responda)
            res.status(200).json(alterarConsulta)
        }catch(e){
            res.status(500).json(e)
        }

    })
}