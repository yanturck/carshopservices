
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

    deleteUser (email) {
        this.axios.delete(`http://${this.ip}:${this.port}/usuarios/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

   findAll () {
        this.axios.get(`http://${this.ip}:${this.port}/usuarios/all`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

   findConsumerByEmail (email) {
        this.axios.get(`http://${this.ip}:${this.port}/usuarios/consumidor/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

   findProducerByEmail (email) {
        this.axios.get(`http://${this.ip}:${this.port}/usuarios/produtor/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

   findUserByEmail (email) {
        this.axios.get(`http://${this.ip}:${this.port}/usuarios/${email}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
}
module.exports = User;