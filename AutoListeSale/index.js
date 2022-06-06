const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
const CadCarro = require('./infraestrutura/cadCarro')
const CadCliente = require('./infraestrutura/cadCliente')
 
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
        console.log('Falha na conexão com o banco de dados')
    } else {
        console.log('conectado com sucesso ao banco de dados')

        Tabelas.init(conexao)

        CadCarro.init(conexao)

        CadCliente.init(conexao)
 
        const app = customExpress()
 
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})
