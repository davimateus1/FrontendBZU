import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalUpdate from "./Components/ModalUpdate";
import ModalCreate from "./Components/ModalCreate";
import Content from "./Components/Content";
import ModalDelete from "./Components/ModalDelete";
import ShowChart from "./Components/ShowChart";

const database = [
  {
    matricula: 1,
    nome: "Davi Whinchester",
    cpf: "111.456.877-22",
    avaliacao: "9",
  },
  {
    matricula: 2,
    nome: "Michael Luffy",
    cpf: "145.456.877-22",
    avaliacao: "10",
  },
  {
    matricula: 3,
    nome: "Jhonas Almeida ",
    cpf: "111.456.587-22",
    avaliacao: "3",
  },
  {
    matricula: 4,
    nome: "Rafael Luccas",
    cpf: "111.459.077-22",
    avaliacao: "2",
  },
  {
    matricula: 5,
    nome: "Jhonathan Alencar",
    cpf: "111.456.527-22",
    avaliacao: "8",
  },
];

class App extends React.Component {
  state = {
    database: database,
    form: {
      matricula: "",
      nome: "",
      cpf: "",
      avaliacao: "",
    },
    modalInserir: false,
    modalAlterar: false,
    modalApagar: false,
    modalChart: false,
  };

  handleChange = (e, isCpf) => {
    if (isCpf) {
      let regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
      let cpf = e.target.value;
      let cpfFormatado = cpf.replace(regex, "$1.$2.$3-$4");
      this.setState({
        form: {
          ...this.state.form,
          cpf: cpfFormatado,
        },
      });
    } else {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  // Inicio do fluxo de Modal
  abrirModalInserir = () => {
    this.setState({ modalInserir: true });
  };

  fecharModalInserir = () => {
    this.setState({ modalInserir: false });
  };

  abrirModalChart = () => {
    this.setState({ modalChart: true });
  };

  fecharModalChart = () => {
    this.setState({ modalChart: false });
  };

  abrirModalAlterar = (aluno) => {
    this.setState({ modalAlterar: true, form: aluno });
  };

  fecharModalAlterar = () => {
    this.setState({ modalAlterar: false });
  };

  abrirModalApagar = (aluno) => {
    this.setState({ modalApagar: true, form: aluno });
  };

  fecharModalApagar = () => {
    this.setState({ modalApagar: false });
  };
  // Fim do fluxo de modals

  //Inicio validações
  validacaoNome = (nome) => {
    return !!nome.match(/[A-Z][a-z]* [A-Z][a-z]*/);
  };

  geradorMatricula = (list) => {
    let matricula = 1;
    if (list.length > 0) {
      matricula =
        this.state.database[this.state.database.length - 1].matricula +
        parseInt(1);
    }
    return matricula;
  };

  geradorNome = (nome) => {
    const nomeFormatado = this.validacaoNome(nome);
    if (nomeFormatado) {
      return nome;
    } else {
      alert("Nome inválido, por favor tente novamente!");
    }
  };

  validacaoCpf = (cpf) => {
    if (cpf.length === 14) {
      const cpfEncontrado = this.state.database.find(
        (form) => form.cpf === cpf
      );
      if (cpfEncontrado) {
        return alert("Esse CPF já existe!");
      }
      return cpf;
    }
    alert("CPF Incompleto!");
  };

  validacaoAvaliacao = (avaliacao) => {
    if (avaliacao >= 0 && avaliacao < 11 && avaliacao !== "") {
      return avaliacao;
    }
    alert("Insira valores entre 0 e 10!");
  };
  // Fim validações

  //Inicio Operações CRUD
  inserir = () => {
    var lista = this.state.database;
    var novoValor = { ...this.state.form };

    const nome = this.geradorNome(this.state.form.nome);
    if (nome) {
      novoValor.nome = nome;
    } else {
      return;
    }

    const cpf = this.validacaoCpf(this.state.form.cpf);
    if (cpf === undefined) {
      return;
    }

    const avaliacao = this.validacaoAvaliacao(this.state.form.avaliacao);
    if (avaliacao === undefined) {
      return;
    }

    novoValor.avaliacao = avaliacao;
    novoValor.cpf = cpf;
    novoValor.matricula = this.geradorMatricula(lista);
    lista.push(novoValor);
    this.setState({ modalInserir: false, database: lista });
  };

  alterar = (data) => {
    var lista = this.state.database;
    const resultadoIndex = lista.findIndex(
      (aluno) => aluno.matricula === data.matricula
    );

    const nome = this.geradorNome(this.state.form.nome);
    if (nome) {
      this.state.nome = nome;
    } else {
      return;
    }

    const cpf = this.validacaoCpf(this.state.form.cpf);
    if (cpf === undefined) {
      return;
    }

    const avaliacao = this.validacaoAvaliacao(this.state.form.avaliacao);
    if (avaliacao === undefined) {
      return;
    }
    lista[resultadoIndex] = data;
    this.setState({ modalAlterar: false, database: lista });
  };

  deletar = (data) => {
    var lista = this.state.database;
    const resultado = lista.findIndex(
      (aluno) => aluno.matricula === data.matricula
    );
    lista.splice(resultado, 1);
    this.setState({ modalApagar: false, database: lista });
  };
  // Fim operações CRUD

  render() {
    return (
      <>
        <Content
          abrirModalInserir={this.abrirModalInserir}
          abrirModalAlterar={this.abrirModalAlterar}
          abrirModalApagar={this.abrirModalApagar}
          abrirModalChart={this.abrirModalChart}
          database={this.state.database}
          deletar={this.deletar}
        />

        <ModalCreate
          handleChange={this.handleChange}
          inserir={this.inserir}
          modalInserir={this.state.modalInserir}
          form={this.state.form}
          fecharModalInserir={this.fecharModalInserir}
        />

        <ModalUpdate
          handleChange={this.handleChange}
          alterar={this.alterar}
          modalAlterar={this.state.modalAlterar}
          form={this.state.form}
          fecharModalAlterar={this.fecharModalAlterar}
        />

        <ModalDelete
          deletar={this.deletar}
          fecharModalApagar={this.fecharModalApagar}
          modalApagar={this.state.modalApagar}
          form={this.state.form}
        />

        <ShowChart
          fecharModalChart={this.fecharModalChart}
          modalChart={this.state.modalChart}
        />
        
      </>
    );
  }
}

export default App;