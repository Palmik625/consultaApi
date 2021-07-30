class Consulta{

    constructor(TITULO,NOME_DR,Nome_Paciente, DESCRICAO, STATUS, DATA_CONSULTA,ID_PACIENTE){
        this.titulo = titulo;
        this.nomeDr = nomeDr;
        this.nomePaciente = nomePaciente;
        this.descricao = descricao;
        this.status = status;
        this.dataCriacao = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        this.idPaciente = idPaciente;
       
       
    }
}
module.exports = Consulta;