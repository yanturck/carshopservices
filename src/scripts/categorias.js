
class Categorias {
    constructor (axios, ip, port) {
        this.axios = axios;
        this.ip = ip;
        this.port = port;
    }

    create (categoria) {
        this.axios.post(`http://${this.ip}:${this.port}/categorias`, categoria)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    findAll () {
        this.axios.get(`http://${this.ip}:${this.port}/categorias`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }

    deleteCategory (id) {
        this.axios.delete(`http://${this.ip}:${this.port}/categorias/${id}`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) { console.log("\nAlgo deu errado! :*(\n" + error) });
    }
}
module.exports = Categorias;