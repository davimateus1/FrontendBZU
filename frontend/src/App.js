import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Table,
  Container,
  Modal,
  ModalHeader,
  FormGroup,
  ModalFooter,
  ModalBody,
} from "reactstrap";

const database = [
  { matricula: 1, nome: "Davi", cpf: "11145687722", avaliacao: "9" },
  { matricula: 2, nome: "Michael", cpf: "14545687722", avaliacao: "10" },
  { matricula: 3, nome: "João", cpf: "11145658722", avaliacao: "3" },
  { matricula: 4, nome: "Rafael", cpf: "11145907722", avaliacao: "2" },
  { matricula: 5, nome: "Gomes", cpf: "11145652722", avaliacao: "8" },
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
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  abrirModalInserir = () => {
    this.setState({ modalInserir: true });
  };

  fecharModalInserir = () => {
    this.setState({ modalInserir: false });
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
    var cont = 0;
    var lista = this.state.database;
    lista.map((aluno) => {
      if (data.matricula == aluno.matricula) {
        lista[cont].nome = data.nome;
        lista[cont].cpf = data.cpf;
        lista[cont].avaliacao = data.avaliacao;
      }
      cont++;
    });
    this.setState({ modalAlterar: false, database: lista });
  };

  deletar = (data) => {
    var aviso = window.confirm(
      "Deseja realmente deletar o seguinte aluno? Matricula: " + data.matricula +", " + "Nome: " + data.nome +", " + "CPF: " + data.cpf + " e Avaliação: " + data.avaliacao + "." 
    );
    if (aviso) {
      var cont = 0;
      var lista = this.state.database;
      lista.map((aluno) => {
        if (data.matricula == aluno.matricula) {
          lista.splice(cont, 1);
        }
        cont++;
      });
      this.setState({ modalApagar: false, database: lista });
    }
  };

  render() {
    return (
      <>
        <Container>
          <Button color="primary mt-3" onClick={() => this.abrirModalInserir()}>
            {" "}
            Novo{" "}
          </Button>{" "}
          <Button color="primary mt-3"> Gráfico </Button>
          <h4 class="mt-4 mb-5">Alunos cadastrados</h4>
          <Table>
            <thead class="bg-warning">
              <tr>
                <th>Matricula</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Avaliação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.database.map((aluno) => (
                <tr>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.cpf}</td>
                  <td>{aluno.avaliacao}</td>
                  <td>
                    <Button
                      color="success"
                      onClick={() => {
                        this.abrirModalAlterar(aluno);
                      }}
                    >
                      {" "}
                      Alterar{" "}
                    </Button>{" "}
                    <Button
                      color="danger"
                      onClick={() => {
                        this.deletar(aluno);
                      }}
                    >
                      {" "}
                      Remover{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInserir}>
          <ModalHeader>
            <div>
              <h4>Inserir novo aluno</h4>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Nome:</label>
              <input
                className="form-control"
                type="text"
                name="nome"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>CPF:</label>
              <input
                className="form-control"
                type="text"
                name="cpf"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Avaliação:</label>
              <input
                className="form-control"
                type="text"
                name="avaliacao"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="warning" onClick={() => this.inserir()}>
              {" "}
              Inserir{" "}
            </Button>{" "}
            <Button color="primary" onClick={() => this.fecharModalInserir()}>
              {" "}
              Voltar{" "}
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalAlterar}>
          <ModalHeader>
            <div>
              <h4>Alteração do Aluno</h4>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Matricula:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.matricula}
              />
            </FormGroup>

            <FormGroup>
              <label>Nome:</label>
              <input
                className="form-control"
                type="text"
                name="nome"
                onChange={this.handleChange}
                value={this.state.form.nome}
              />
            </FormGroup>

            <FormGroup>
              <label>CPF:</label>
              <input
                className="form-control"
                type="text"
                name="cpf"
                onChange={this.handleChange}
                value={this.state.form.cpf}
              />
            </FormGroup>

            <FormGroup>
              <label>Avaliação:</label>
              <input
                className="form-control"
                type="text"
                name="avaliacao"
                onChange={this.handleChange}
                value={this.state.form.avaliacao}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="warning"
              onClick={() => this.alterar(this.state.form)}
            >
              {" "}
              Alterar{" "}
            </Button>{" "}
            <Button color="primary" onClick={() => this.fecharModalAlterar()}>
              {" "}
              Voltar{" "}
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
