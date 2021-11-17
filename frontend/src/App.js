import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container, Modalbody, Modal, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const database = [
  {matricula: 1, nome: "Davi", cpf: "11145687722", avaliacao: 9},
  {matricula: 2, nome: "Michael", cpf: "14545687722", avaliacao: 10},
  {matricula: 3, nome: "João", cpf: "11145658722", avaliacao: 3},
  {matricula: 4, nome: "Rafael", cpf: "11145907722", avaliacao: 2},
  {matricula: 5, nome: "Gomes", cpf: "11145652722", avaliacao: 8}
];

class App extends React.Component{

  state = {
    database: database
  }
  
  render(){
  return (
    <>
  <Container>
    <Button color="primary"> Novo </Button>
    <h4 class="mt-4 mb-5">Alunos cadastrados</h4>
    <Table>
      <thead>
        <tr>
          <th>Matricula</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Avaliação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.database.map((item) => (
            <tr>
              <td>{item.matricula}</td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.avaliacao}</td>
              <td>
              <Button color="success"> Alterar </Button>
              <Button color="danger"> Remover </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </Container>
   </>
  );
  }
}

export default App;
