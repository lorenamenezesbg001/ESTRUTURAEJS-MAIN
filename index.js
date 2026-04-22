import express from "express";
const app = express();
const PORT = 3000;
// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 
//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/cadastro", (req, res) => {
  const name = req.body.nome
  const country = req.body.pais
  const year = req.body.anoInicio
  res.render("cadastrook", {name, country, year});
});

app.get("/cadastrogenero", (req, res) => {
  res.render("cadastrogenero");
});

app.post("/cadastrogenero", (req, res) => {
  const nomegen = req.body.nomegen
  const descricao = req.body.descricao
  res.render("detalhegen", {nomegen, descricao});
}); 

app.get("/cadastromusica", (req, res) => {
  res.render("cadastromusica");
});

app.post("/cadastromusica", (req, res) => {
  const nomemus = req.body.nomemus
  const nomartista = req.body.nomartista
  const genartista = req.body.genartista
  const anoLancamento = req.body.anoLancamento
  const duracao = req.body.duracao
  res.render("detalhemus", {nomemus, nomartista, genartista, anoLancamento, duracao});
}); 

app.get("/detalhe", (req, res) => {
  res.render("detalhe");
});
app.get("/artista", (req, res) => {
  res.render("artista");
});

app.get("/musica", (req, res) => {
  res.render("musica");
});

app.get("/genero", (req, res) => {
  res.render("genero");
});

app.get("/artista/:detalhe", (req, res) => {
  let artnome = ""
  let artpais = ""
  let artano = ""

  if(req.params.detalhe == 'oliviarodrigo'){
    artnome = "Olivia Rodrigo"
    artpais = "Estados Unidos"
    artano = "2021"
  }

  if(req.params.detalhe == 'sabrinacarpenter'){
    artnome = "Sabrina Carpenter"
    artpais = "Estados Unidos"
    artano = "2016"
  }

  if(req.params.detalhe == 'laufey'){
    artnome = "Laufey"
    artpais = "Brasil"
    artano = "2021"
  }

  if(req.params.detalhe == 'thelastdinnerparty'){
    artnome = "The Last Dinner Party"
    artpais = "Londres"
    artano = "2021"
  }

  if(req.params.detalhe == 'alanismorisette'){
    artnome = "Alanis Morisette"
    artpais = "Canadá"
    artano = "1995"
  }

  if(req.params.detalhe == 'hayleywilliams'){
    artnome = "Hayley Williams"
    artpais = "Estados Unidos"
    artano = "2004"
  }
  if(req.params.detalhe == 'chappellroan'){
    artnome = "Chappell Roan"
    artpais = "Estados Unidos"
    artano = "2023"
  }

  res.render("detalhe", {artnome, artpais, artano})
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
