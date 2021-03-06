
class User {
    constructor (axios, ip, port) {
        this.axios = axios;
        this.ip = ip;
        this.port = port;
    }

    createConsumidor (user) {
        this.axios.post(`http://${this.ip}:${this.port}/usuarios/consumidor`, user)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    createProdutor (user) {
        this.axios.post(`http://${this.ip}:${this.port}/usuarios/produtor`, user)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    autenticarUser (user) {
        return this.axios.post(`http://${this.ip}:${this.port}/login`, user)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    verificarUser () {
        return this.axios.get(`http://${this.ip}:${this.port}/login`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    deleteUser (email) {
        this.axios.delete(`http://${this.ip}:${this.port}/usuarios/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

   findAll () {
        return this.axios.get(`http://${this.ip}:${this.port}/usuarios/all`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    // está retornando um objeto vazio
   findConsumerByEmail (email) {
        return this.axios.get(`http://${this.ip}:${this.port}/usuarios/consumidor/${email}`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    // está retornando um objeto vazio
   findProducerByEmail (email) {
        this.axios.get(`http://${this.ip}:${this.port}/usuarios/produtor/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

   findUserByEmail (email) {
        return this.axios.get(`http://${this.ip}:${this.port}/usuarios/${email}`)
        .then(function (response) { return response.data })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
}
module.exports = User;