
class Anuncio {
    constructor (axios, ip, port) {
        this.axios = axios;
        this.ip = ip;
        this.port = port;
    }

    createItem (item) {
        this.axios.post(`http://${this.ip}:${this.port}/anuncios/item`, item)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    findAllItens () {
        return this.axios.get(`http://${this.ip}:${this.port}/anuncios/item`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    createServico (service) {
        this.axios.post(`http://${this.ip}:${this.port}/anuncios/servico`, service)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    findAllServicos () {
        return this.axios.get(`http://${this.ip}:${this.port}/anuncios/servico`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    findAll () {
        return this.axios.get(`http://${this.ip}:${this.port}/anuncios`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    findByCategory (idCategoria) {
        this.axios.get(`http://${this.ip}:${this.port}/anuncios/${idCategoria}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    findItemByCategory (idCategoria) {
        this.axios.get(`http://${this.ip}:${this.port}/anuncios/item/${idCategoria}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
    
    findServicoByCategory (idCategoria) {
        this.axios.get(`http://${this.ip}:${this.port}/anuncios/servico/${idCategoria}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
}
module.exports = Anuncio;