class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelaCarro()
        this.criarTabelaCliente()
    }
 
    criarTabelaCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS tabcliente (idcliente int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(30),telefone float(12) NOT NULL, PRIMARY KEY(idcliente))'
 
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
                console.log('Falha na criação da tabela Cliente')
            }else{             
                console.log('Tabela Cliente criada com sucesso')
            }
        })
    }

    criarTabelaCarro() {
        const sql = 'CREATE TABLE IF NOT EXISTS tabcarro (idcarro int NOT NULL AUTO_INCREMENT, marca varchar(20) NOT NULL, modelo varchar(20),placa varchar(7) NOT NULL, ano int(4) NOT NULL, cor varchar(20), PRIMARY KEY(idcarro))'
 
        this.conexao.query(sql, erro => {if(erro){
            console.log(erro)
            console.log('Falha na criação da tabela Carro')
        }else{
            console.log('Tabela Carro criada com sucesso')    
        }
    })
    }
}
 
module.exports = new Tabelas