class CargaCliente {
    init(conexao) {
        this.conexao = conexao
        this.cargaCliente()
       
    }

    cargaCliente() {
        const sql = 'INSERT INTO tabcliente (nome, email, telefone) VALUES ("Carlos Silva Costa", "carlossilva@gmail.com",71988776655);'

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
                console.log('Falha de insert na tabela Cliente')
            }else{             
                console.log('dados do Cliente inseridos com sucesso')
            }
        })
    }

}

    module.exports = new CargaCliente