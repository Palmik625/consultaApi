class Consulta{

    constructor(titulo,nomeDr,nomePaciente,descricao,status,dataConsulta,idMedico,idPaciente){
        this.titulo = titulo;
        this.nomeDr = nomeDr;
        this.nomePaciente = nomePaciente;
        this.descricao = descricao;
        this.status = status;
        this.dataConsulta =dataConsulta; moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        this.idMedico = idMedico;
        this.idPaciente = idPaciente;
       
       
    }
}
module.exports = Consulta;