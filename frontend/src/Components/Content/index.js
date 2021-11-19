import React, { Component } from 'react'
import { Button, Container, Table } from 'reactstrap';

export default class Content extends Component {
    render() {
        return (
            <Container>
            <Button color="primary mt-3" onClick={() => this.props.abrirModalInserir()}>
              {" "}
              Novo{" "}
            </Button>{" "}
            <Button color="primary mt-3" onClick={() => this.props.abrirModalChart()}> Gráficos </Button>
            <h4 class="mt-4 mb-5">Alunos cadastrados</h4>
            <Table>
              <thead class="bg-warning text-center">
                <tr>
                  <th>Matricula</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Avaliação</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody class="text-center">
                {this.props.database.map((aluno) => (
                  <tr>
                    <td>{aluno.matricula}</td>
                    <td>{aluno.nome}</td>
                    <td>{aluno.cpf}</td>
                    <td>{aluno.avaliacao}</td>
                    <td>
                      <Button
                        color="success"
                        onClick={() => {
                          this.props.abrirModalAlterar(aluno);
                        }}
                      >
                        {" "}
                        Alterar{" "}
                      </Button>{" "}
                      <Button
                        color="danger"
                        onClick={() => {
                          this.props.abrirModalApagar(aluno);
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
        )
    }
}
