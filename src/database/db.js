//importar o sqlite 3
const sqlite3 = require("sqlite3").verbose()

//iniciar o obj de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o obj
db.serialize(() => {
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    
    //cadastrar valores
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items

        ) VALUES ( ?,?,?,?,?,?,? );
    `

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]
    
    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }

        console.log("Tudo certinho")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)

    //consultar tabela
    /*db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Registros") 
        console.log(rows) 
    })*/

    //deletar registros
   /* db.run(`DELETE FROM places WHERE id = ?`, [], function (err){
        if(err){
            return console.log(err)
        }

        console.log("deletado com sucesso") 
    })
    */
})
