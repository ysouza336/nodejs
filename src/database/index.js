import mongoose from "mongoose";

/**conexao com o banco  */
class Database{
    constructor(){
        this.mongoDatabase();
    }
    mongoDatabase(){
        mongoose.connect('mongodb://localhost/souza',{
            useNewUrlParser: true,
            useUnifiedTopology:true
        }).then(()=> {
            console.log("Conexão com MongoDb realizada com sucesso")
        }).catch((erro)=> {
            console.log("Erro: Conexão com MongoDb não foi realizada com sucesso" + erro)
        })
    }
}
export default new Database();