module.exports = app => { 
    app.get('/cadastrocliente', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))
 
    app.post('/cadastrocliente', (req, res) => { 
        console.log(req.body)
        res.send('Você está na rota de atendimentos e está realizando um POST')
    })
 
}
