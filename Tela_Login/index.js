const app = require("./src/config/custom-express");

app.listen(3000, () => 
            console.log("Servidor rodando na Porta 3000")
);

app.get('/', (res, req) => 
        res.send("Requisição do tipo get na rota barra.")
);

