
class GuardarSolicitacao {
    constructor (axios, ip, port) {
        this.axios = axios;
        this.ip = ip;
        this.port = port;
    }

    create (solicitacao) {
        this.axios.post(`http://${this.ip}:${this.port}/guardar-solicitacao`, solicitacao)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    findAll () {
        this.axios.get(`http://${this.ip}:${this.port}/guardar-solicitacao`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    findGuardarSolicitacaoByEmail (email) {
        this.axios.get(`http://${this.ip}:${this.port}/guardar-solicitacao/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
}
module.exports = GuardarSolicitacao;