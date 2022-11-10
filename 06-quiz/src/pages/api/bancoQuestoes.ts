import QuestaoModel from "../../models/questao";
import RespostaModel from "../../models/resposta";

const BancoQuestoes = [
  new QuestaoModel(454, "Qual bicho transmite a Doença de Chagas?", [
    RespostaModel.errada("Abelha"),
    RespostaModel.errada("Barata"),
    RespostaModel.errada("Pulga"),
    RespostaModel.certa("Barbeiro"),
  ]),
  new QuestaoModel(191, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
    RespostaModel.errada("Caju"),
    RespostaModel.errada("Côco"),
    RespostaModel.errada("Chuchu"),
    RespostaModel.certa("Abóbora"),
  ]),
  new QuestaoModel(70, "Qual é o coletivo de cães?", [
    RespostaModel.errada("Manada"),
    RespostaModel.errada("Alcateia"),
    RespostaModel.errada("Rebanho"),
    RespostaModel.certa("Matilha"),
  ]),
  new QuestaoModel(605, "Qual é o triângulo que tem todos os lados diferentes?", [
    RespostaModel.errada("Equilátero"),
    RespostaModel.errada("Isóceles"),
    RespostaModel.errada("Trapézio"),
    RespostaModel.certa("Escaleno"),
  ]),
  new QuestaoModel(517, "Quem compôs o Hino da Independência?", [
    RespostaModel.errada("Castro Alves"),
    RespostaModel.errada("Manuel Bandeira"),
    RespostaModel.errada("Carlos Gomes"),
    RespostaModel.certa("Dom Pedro I"),
  ]),
  new QuestaoModel(940, 'Qual é o antônimo de "malograr"?', [
    RespostaModel.errada("Perder"),
    RespostaModel.errada("Fracassar"),
    RespostaModel.errada("Desprezar"),
    RespostaModel.certa("Conseguir"),
  ]),
  new QuestaoModel(219, "Em que país nasceu Carmen Miranda?", [
    RespostaModel.errada("Argentina"),
    RespostaModel.errada("Espanha"),
    RespostaModel.errada("Brasil"),
    RespostaModel.certa("Portugal"),
  ]),
  new QuestaoModel(647, "Qual foi o último Presidente do período da ditadura militar no Brasil?", [
    RespostaModel.errada("Costa e Silva"),
    RespostaModel.errada("Emílio Médici"),
    RespostaModel.errada("Ernesto Geisel"),
    RespostaModel.certa("João Figueiredo"),
  ]),
  new QuestaoModel(14, "Seguindo a sequência do baralho, qual carta vem depois do dez?", [
    RespostaModel.errada("Ás"),
    RespostaModel.errada("Nove"),
    RespostaModel.errada("Rei"),
    RespostaModel.certa("Valete"),
  ]),
  new QuestaoModel(312, 'O adjetivo "venoso" está relacionado a:', [
    RespostaModel.errada("Vela"),
    RespostaModel.errada("Vento"),
    RespostaModel.errada("Vênia"),
    RespostaModel.certa("Veia"),
  ]),
  new QuestaoModel(826, "Que nome se dá à purificação por meio da água?", [
    RespostaModel.errada("Abrupção"),
    RespostaModel.errada("Abolição"),
    RespostaModel.errada("Abnegação"),
    RespostaModel.certa("Ablução"),
  ]),
  new QuestaoModel(98, "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?", [
    RespostaModel.errada("Monte Branco"),
    RespostaModel.errada("Monte Fuji"),
    RespostaModel.errada("Monte Carlo"),
    RespostaModel.certa("Monte Everest"),
  ]),
  new QuestaoModel(907, "Em que parte do corpo se encontra a epiglote?", [
    RespostaModel.errada("Estômago"),
    RespostaModel.errada("Pâncreas"),
    RespostaModel.errada("Rim"),
    RespostaModel.certa("Pescoço"),
  ]),
  new QuestaoModel(731, "A compensação por perda é chamada de...", [
    RespostaModel.errada("Déficit"),
    RespostaModel.errada("Indexação"),
    RespostaModel.errada("Indébito"),
    RespostaModel.certa("Indenização"),
  ]),
  new QuestaoModel(39, "Que personagem do folclore brasileiro tem uma perna só?", [
    RespostaModel.errada("Cuca"),
    RespostaModel.errada("Curupira"),
    RespostaModel.errada("Boitatá"),
    RespostaModel.certa("Saci-pererê"),
  ]),
  new QuestaoModel(144, 'Quem é o "patrono" do Exército Brasileiro?', [
    RespostaModel.errada("Marechal Deodoro"),
    RespostaModel.errada("Barão de Mauá"),
    RespostaModel.errada("Marquês de Pombal"),
    RespostaModel.certa("Duque de Caxias"),
  ]),
];

export default BancoQuestoes;
