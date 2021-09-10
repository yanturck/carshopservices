/**
<!-- produto teste-->
                            <% produtos.forEach(function(produto){ %>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                                    <div class="card text-center bg-light">
                                        <a href="#" class="position-absolute end-0 p-2 text-danger">
                                            <i class="bi-suit-heart icone"></i>
                                        </a>
                                        <a href="/produto" class="text-decoration-none">
                                            <img src="img/cabecote-ap.jpg" class="card-img-top cartao img-fluid">
                                        </a>
                                        <div class="card-header">
                                            R$ <%= produto.preco %>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                <a href="/produto" class="text-decoration-none"><%= produto.nome %></a>
                                            </h5>
                                            <p class="card-text truncar">
                                                <%= produto.descricao %>
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="/carrinho" class="btn btn-primary mt-2 d-block">Adicionar ao Carrinho</a>
                                        </div>
                                        <small class="text-success"> <%= produto.estoque %> em estoque</small>
                                    </div>
                                </div>
                                                               
                            <% }) %>
                            
                                   

                            <!--fim produto teste-->

 */
app.listen(3000, '127.0.0.1', () => {
    console.log('servidor rodando')
});