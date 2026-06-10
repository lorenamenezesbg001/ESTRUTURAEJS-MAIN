import express from "express";
import Genero from './models/Genero.js';
import Musica from './models/Musica.js';
import Artista from './models/Artista.js';
import Album from './models/Album.js';

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

//Rotas do gênero

app.get("/genero", async (req, res) => {
  const generos = await Genero.find()
  res.render("genero/lst", {generos});
});

app.get("/genero/add",  (req, res) => {

  res.render("genero/add");
});

//Excluir

app.get('/genero/del/:id', async (req, res) => {
   const genero = await Genero.findByIdAndDelete(req.params.id)
   res.redirect("/genero")

});

app.post("/genero/add", async (req, res) => {
  const nome = req.body.nome;
  //grava no banco de dados(Mongo)
  await Genero.create({nome});
  res.render("genero/addok");
});

//Edição

app.get('/genero/edt/:id', async (req, res) => {

const genero = await Genero.findById(req.params.id)

res.render("genero/edt", {genero})

});

app.post('/genero/edt/:id', async (req, res) => {

const genero = await Genero.findByIdAndUpdate(req.params.id, req.body)

res.render("genero/edtok")

});

//Rotas de música

app.get("/musica", async (req, res) => {
  const musicas = await Musica.find()
  res.render("musica/lst", {musicas});
});

//Excluir

app.get('/musica/del/:id', async (req, res) => {
   const musica = await Musica.findByIdAndDelete(req.params.id)
   res.redirect("/musica")

});

app.get("/musica/add", (req, res) => {
  res.render("musica/add");
});

app.post("/musica/add", async (req, res) => {
  const nome = req.body.nome;
  const duracao = req.body.duracao;
  const artista = req.body.artista;
  const anoLancamento = req.body.anoLancamento;
  //grava no banco de dados(Mongo)
  await Musica.create({nome, duracao, artista, anoLancamento});
  res.render("musica/addok");
});

app.get('/musica/edt/:id', async (req, res) => {

const musica = await Musica.findById(req.params.id)

res.render("musica/edt", {musica})

}); 

app.post('/musica/edt/:id', async (req, res) => {

const musica = await Musica.findByIdAndUpdate(req.params.id, req.body)

res.render("musica/edtok")

});

//Rotas do artista

app.get("/artista", async (req, res) => {
  const artistas = await Artista.find()
  res.render("artista/lst", {artistas});
});

//Excluir

app.get('/artista/del/:id', async (req, res) => {
   const artista = await Artista.findByIdAndDelete(req.params.id)
   res.redirect("/artista")

});

app.get("/artista/add",  (req, res) => {

  res.render("artista/add");
});

app.post("/artista/add", async (req, res) => {
  const nome = req.body.nome;
  const pais = req.body.pais;
  const ano = req.body.ano;
  //grava no banco de dados(Mongo)
  await Artista.create({nome, pais, ano});
  res.render("artista/addok");
});

app.get('/artista/edt/:id', async (req, res) => {

const artista = await Artista.findById(req.params.id)

res.render("artista/edt", {artista})

});

app.post('/artista/edt/:id', async (req, res) => {

const artista = await Artista.findByIdAndUpdate(req.params.id, req.body)

res.render("artista/edtok")

});

//Rotas do álbum

app.get("/album", async (req, res) => {
  const albuns = await Album.find()
  res.render("album/lst", {albuns});
});

//Excluir

app.get('/album/del/:id', async (req, res) => {
   const album = await Album.findByIdAndDelete(req.params.id)
   res.redirect("/album")

});

app.get("/album/add",  (req, res) => {

  res.render("album/add");
});

app.post("/album/add", async (req, res) => {
  const nome = req.body.nome;
  const ano = req.body.ano;
  const genero = req.body.genero;
  //grava no banco de dados(Mongo)
  await Album.create({nome, ano, genero});
  res.render("album/addok");
});

app.get('/album/edt/:id', async (req, res) => {

const album = await Album.findById(req.params.id)

res.render("album/edt", {album})

});

app.post('/album/edt/:id', async (req, res) => {

const album = await Album.findByIdAndUpdate(req.params.id, req.body)

res.render("album/edtok")

});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/cadastro", (req, res) => {
  res.render("cadastrook");
});

app.get("/detalhe", (req, res) => {
  res.render("detalhe");
});
app.get("/lista", (req, res) => {
  res.render("lista");
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
