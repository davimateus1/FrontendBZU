import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalUpdate from "./Components/ModalUpdate";
import ModalCreate from "./Components/ModalCreate";
import Content from "./Components/Content";
import ModalDelete from "./Components/ModalDelete";
import ShowChart from "./Components/ShowChart";

const database = [
  { matricula: 1, nome: "Davi", cpf: "111.456.877-22", avaliacao: "9" },
  { matricula: 2, nome: "Michael", cpf: "145.456.877-22", avaliacao: "10" },
  { matricula: 3, nome: "João", cpf: "111.456.587-22", avaliacao: "3" },
  { matricula: 4, nome: "Rafael", cpf: "111.459.077-22", avaliacao: "2" },
  { matricula: 5, nome: "Gomes", cpf: "111.456.527-22", avaliacao: "8" },
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
      let cpfFormated = cpf.replace(regex, "$1.$2.$3-$4");
      this.setState({
        form: {
          ...this.state.form,
          cpf: cpfFormated,
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

  inserir = () => {
    var novoValor = { ...this.state.form };
    novoValor.matricula = this.state.database.length + 1;
    var lista = this.state.database;
    lista.push(novoValor);
    this.setState({ modalInserir: false, database: lista });
  };

  alterar = (data) => {
    var lista = this.state.database;
    const resultIndex = lista.findIndex(
      (aluno) => aluno.matricula === data.matricula
    );
    lista[resultIndex] = data;
    this.setState({ modalAlterar: false, database: lista });
  };

  deletar = (data) => {
    var lista = this.state.database;
    const result = lista.findIndex(
      (aluno) => aluno.matricula === data.matricula
    );
    lista.splice(result, 1);
    this.setState({ modalApagar: false, database: lista });
  };

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
