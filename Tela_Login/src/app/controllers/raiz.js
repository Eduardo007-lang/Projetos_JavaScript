
module.exports = app => { 
    
    app.get('/', (res, req) => 
        res.send("Requisição do tipo get na rota barra.")
    );
}