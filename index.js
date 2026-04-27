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

app.get("/detalhe", (req, res) => {
  res.render("detalhe");
});

app.get("/artista", (req, res) => {
  res.render("artista");
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
    artano = "2003"
  }
  if(req.params.detalhe == 'chappellroan'){
    artnome = "Chappell Roan"
    artpais = "Estados Unidos"
    artano = "2020"
  }
  if(req.params.detalhe == 'phoebebridgers'){
    artnome = "Phoebe Bridgers"
    artpais = "Estados Unidos"
    artano = "2015"
  }
  if(req.params.detalhe == 'weyes'){
    artnome = "Weyes Blood"
    artpais = "Estados Unidos"
    artano = "2015"
  }
  res.render("detalhe", {artnome, artpais, artano})
});

app.get("/genero", (req, res) => {
  res.render("genero");
});

app.get("/cadastrogenero", (req, res) => {
  res.render("cadastrogenero");
});

app.post("/cadastrogenero", (req, res) => {
  const nomegen = req.body.nomegen
  const descricao = req.body.descricao
  const mais = req.body.mais
  res.render("cadastrookgenero", {nomegen, descricao, mais});
}); 

app.get("/genero/:detalhegen", (req, res) => {
  let nomegen = ""
  let descricao = ""
  let mais = ""

if (req.params.detalhegen == 'pretty'){
    nomegen = "Pop-Rock"
    descricao = "Mistura de batidas pop com a guitarra do rock"
    mais = [
    { nome: "pretty isn't pretty (2023)", link: "#" },
    { nome: "ironic (1995)", link: "#" }]
  }
if (req.params.detalhegen == 'man'){
    nomegen = "Pop"
    descricao = "Música dançante"
    mais = [
    { nome: "my man on willpower (2025)", link: "#" },
    { nome: "the subway (2025)", link: "#" }]
  }
if (req.params.detalhegen == 'late'){
    nomegen = "Jazz"
    descricao = "Fim de tarde confortável"
    mais = [
    { nome: "too little, too late (2025)", link: "#" },
]
  }
if (req.params.detalhegen == 'agnus'){
    nomegen = "Rock"
    descricao = "Muitas guitarras elétricas"
    mais = [
    { nome: "agnus dei (2025)", link: "#" },
    { nome: "parachute (2025)", link: "#" }]
  }
if (req.params.detalhegen == 'ironic'){
    nomegen = " Pop-Rock"
    descricao = "Feminine rage!"
    mais = [
    { nome: "pretty isn't pretty (2023)", link: "#" },
    { nome: "ironic (1995)", link: "#" }]
  }
if (req.params.detalhegen == 'parachute'){
    nomegen = "Rock"
    descricao = "Muitas guitarras elétricas e gritos"
    mais = [
    { nome: "agnus dei (2025)", link: "#" },
    { nome: "parachute (2025)", link: "#" }]
  }
if (req.params.detalhegen == 'subway'){
    nomegen = "Pop"
    descricao = "Para chorar!"
    mais = [
    { nome: "my man on willpower (2025)", link: "#" },
    { nome: "the subway (2025)", link: "#" }]
  }
if (req.params.detalhegen == 'sidelines'){
    nomegen = "Indie"
    descricao = "Músicas calminhas"
    mais = [
    { nome: "sidelines (2022)", link: "#" },
    { nome: "everyday (2019)", link: "#" }]
  }
if (req.params.detalhegen == 'everyday'){
    nomegen = "Indie"
    descricao = "Músicas calminhas"
    mais = [
    { nome: "sidelines (2022)", link: "#" },
    { nome: "everyday (2019)", link: "#" }]
  }
res.render("detalhegen", {nomegen, descricao, mais}) 
});

app.get("/musica", (req, res) => {
  res.render("musica");
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
  res.render("cadastrookmusica", {nomemus, nomartista, genartista, anoLancamento, duracao});
}); 

app.get("/musica/:detalhemus", (req, res) => {
  let nomemus = ""
  let nomartista = ""
  let genartista = ""
  let anoLancamento = ""
  let duracao = "" 

  if (req.params.detalhemus == 'pretty'){
    nomemus = "pretty isn't pretty"
    nomartista = "Olivia Rodrigo"
    genartista = "Pop-rock"
    anoLancamento = "2023"
    duracao = "3:20"
  }
  else if (req.params.detalhemus == 'man'){
    nomemus = "my man on willpower"
    nomartista = "Sabrina Carpenter"
    genartista = "Pop"
    anoLancamento = "2025"
    duracao = "3:18"
  }
  else if (req.params.detalhemus == 'late'){
    nomemus = "too litle, too late"
    nomartista = "Laufey"
    genartista = "Jazz"
    anoLancamento = "2025"
    duracao = "3:53"
  }

  else if (req.params.detalhemus == 'agnus'){
    nomemus = "agnus dei"
    nomartista = "The Last Dinner Party"
    genartista = "Rock"
    anoLancamento = "2025"
    duracao = "5:34"
  }

  else if (req.params.detalhemus == 'ironic'){
    nomemus = "ironic"
    nomartista = "Alanis Morisette"
    genartista = "Rock"
    anoLancamento = "1995"
    duracao = "4:07"
  }
  
  else if (req.params.detalhemus == 'parachute'){
    nomemus = "parachute"
    nomartista = "Hayley Williams"
    genartista = "Pop-Rock"
    anoLancamento = "2025"
    duracao = "3:39"
  }

  else if (req.params.detalhemus == 'subway'){
    nomemus = "the subway"
    nomartista = "Chappell Roan"
    genartista = "Pop"
    anoLancamento = "2025"
    duracao = "4:32"
  }
  if (req.params.detalhemus == 'sidelines'){
    nomemus = "sidelines"
    nomartista = "Phoebe Bridgers"
    genartista = "Indie"
    anoLancamento = "2022"
    duracao = "4:25"
  }
  if (req.params.detalhemus == 'everyday'){
    nomemus = "everyday"
    nomartista = "Weyes Blood"
    genartista = "Indie"
    anoLancamento = "2019"
    duracao = "5:02"
  }
    res.render("detalhemus", {nomemus, nomartista, genartista, anoLancamento, duracao})
});

app.get("/playlist", (req, res) => {
  res.render("playlist");
});

app.get("/cadastroplaylist", (req, res) => {
  res.render("cadastroplaylist")
})

app.post("/cadastroplaylist", (req, res) => {
  const nomeplay = req.body.nomeplay
  const musica1 = req.body.musica1
  const musica2 = req.body.musica2
  const musica3 = req.body.musica3

  res.render("cadastrookplaylist", {nomeplay, musica1, musica2, musica3});
});


app.get("/playlist/:detalheplaylist", (req, res) => {
  let nomeplay = ""
  let musica1 = ""
  let musica2 = ""
  let musica3 = ""

  if (req.params.detalheplaylist == 'rage'){
    nomeplay = "rage"
    musica1 = "pretty isn't pretty"
    musica2 = "ironic"
    musica3 = "too little, too late"
  }
  else if (req.params.detalheplaylist == 'yelling'){
    nomeplay = "yelling"
    musica1 = "parachute"
    musica2 = "too little, too late"
    musica3 = "my man on willpower"
  }
  else if (req.params.detalheplaylist == 'crying'){
    nomeplay = "crying"
    musica1 = "the subway"
    musica2 = "too little, too late"
    musica3 = "pretty isn't pretty"
  }
if (req.params.detalheplaylist == 'chilling'){
    nomeplay = "chilling"
    musica1 = "everyday"
    musica2 = "sidelines"
    musica3 = "too little, too late"
  }
  res.render("detalheplaylist", {nomeplay, musica1, musica2, musica3})
});

app.get("/album", (req, res) => {
  res.render("album");
});

app.get("/cadastroalbum", (req, res) => {
  res.render("cadastroalbum")
})

app.post("/cadastroalbum", (req, res) => {
  const nomealb = req.body.nomealb
  const artalb = req.body.artalb
  const anoLancamentoalb = req.body.anoLancamentoalb

  res.render("cadastrookalbum", {nomealb, artalb, anoLancamentoalb});
});


app.get("/album/:detalhealbum", (req, res) => {
  let nomealb = ""
  let artalb = ""
  let anoLancamentoalb = ""

  if (req.params.detalhealbum == 'guts'){
    nomealb = "GUTS"
    artalb = "Olivia Rodrigo"
    anoLancamentoalb = "2023"
  }
  else if (req.params.detalhealbum == 'norman'){
    nomealb = "Norman Fucking Rockwell!"
    artalb = "Lana Del Rey"
    anoLancamentoalb = "2019"
  }
  else if (req.params.detalhealbum == 'time'){
    nomealb = "A Matter of Time: The Final Hour"
    artalb = "Laufey"
    anoLancamentoalb = "2026"
  }
  else if (req.params.detalhealbum == 'pyre'){
    nomealb = "From the Pyre"
    artalb = "The Last Dinner Party"
    anoLancamentoalb = "2025"
  }
  else if (req.params.detalhealbum == 'red'){
    nomealb = "RED"
    artalb = "Taylor Swift"
    anoLancamentoalb = "2012"
  }
  else if (req.params.detalhealbum == 'jagged'){
    nomealb = "Jagged Little Pill"
    artalb = "Alanis Morisette"
    anoLancamentoalb = "1995"
  }
  else if (req.params.detalhealbum == 'princess'){
    nomealb = "The Rise And Fall Of A Midwest Princess"
    artalb = "Chappell Roan"
    anoLancamentoalb = "2023"
  }
  else if (req.params.detalhealbum == 'titanic'){
    nomealb = "Titanic Rising"
    artalb = "Weyes Blood"
    anoLancamentoalb = "2019"
  }
  else if (req.params.detalhealbum == 'emails'){
    nomealb = "emails i cant send"
    artalb = "Sabrina Carpenter"
    anoLancamentoalb = "2021"
  }
  else if (req.params.detalhealbum == 'rumours'){
    nomealb = "Rumours"
    artalb = "Fleetwood Mac"
    anoLancamentoalb = "1977"
  }
  else if (req.params.detalhealbum == 'prettysad'){
    nomealb = "you seem pretty sad for a girl so in love"
    artalb = "Olivia Rodrigo"
    anoLancamentoalb = "2026"
  }
  else if (req.params.detalhealbum == 'pure'){
    nomealb = "Pure Heroine"
    artalb = "Lorde"
    anoLancamentoalb = "2013"
  }
  else if (req.params.detalhealbum == 'aurora'){
    nomealb = "Aurora"
    artalb = "Daisy Jones and The Six"
    anoLancamentoalb = "2023"
  }
  else if (req.params.detalhealbum == 'record'){
    nomealb = "the record"
    artalb = "boygenius"
    anoLancamentoalb = "2023"
  }
  else if (req.params.detalhealbum == 'ego'){
    nomealb = "Ego Death At A Bachelorette Party"
    artalb = "Hayley Williams"
    anoLancamentoalb = "2025"
  }
  else if (req.params.detalhealbum == 'muffin'){
    nomealb = "Memoir pf a Sparklemuffin - Deluxe"
    artalb = "Suki Waterhouse"
    anoLancamentoalb = "2025"
  }
  res.render("detalhealbum", {nomealb, artalb, anoLancamentoalb})
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
