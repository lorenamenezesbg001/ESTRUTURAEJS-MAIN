import conexao from "../config/conexao.js";

const AlbumSchema = new conexao.Schema({
  nome: String,
  ano: Number,
  genero: String
});

const Album = conexao.model("Album", AlbumSchema);

export default Album;