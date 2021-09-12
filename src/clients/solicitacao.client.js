
class Solicitacao {
    constructor (axios, ip, port) {
        this.axios = axios;
        this.ip = ip;
        this.port = port;
    }

    create (email) {
        this.axios.post(`http://${this.ip}:${this.port}/solicitacao`, email)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    findAll () {
        this.axios.get(`http://${this.ip}:${this.port}/solicitacao`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    findSolicitacaoByEmail (email) {
        this.axios.get(`http://${this.ip}:${this.port}/solicitacao/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
}
module.exports = Solicitacao;