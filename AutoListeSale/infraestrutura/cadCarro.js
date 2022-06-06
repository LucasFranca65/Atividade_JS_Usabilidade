class CargaCarro {
    init(conexao) {
        this.conexao = conexao
        this.cargaCarro()
       
    }

    cargaCarro() {
        const sql = 'INSERT INTO tabcarro (marca, modelo, placa, ano, cor) VALUES ("GM", "Onix", "JZX3A85", 2019, "Azul");'

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
                console.log('Falha de insert na tabela carro')
            }else{             
                console.log('dados inserifdos com sucesso')
            }
        })
    }

}

    module.exports = new CargaCarro