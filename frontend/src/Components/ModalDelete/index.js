import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default class ModalDelete extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modalApagar}>
        <ModalHeader>
          <div>
            <h4>Remoção do Aluno</h4>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Matricula:</label>
            <input
              className="form-control"
              type="text"
              readOnly
              value={this.props.form.matricula}
            />
          </FormGroup>

          <FormGroup>
            <label>Nome:</label>
            <input
              className="form-control"
              type="text"
              name="nome"
              readOnly
              value={this.props.form.nome}
            />
          </FormGroup>

          <FormGroup>
            <label>CPF:</label>
            <input
              className="form-control"
              type="text"
              name="cpf"
              readOnly
              value={this.props.form.cpf}
            />
          </FormGroup>

          <FormGroup>
            <label>Avaliação:</label>
            <input
              className="form-control"
              type="text"
              name="avaliacao"
              readOnly
              value={this.props.form.avaliacao}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => this.props.deletar(this.props.form)}
          >
            {" "}
            Deletar{" "}
          </Button>{" "}
          <Button
            color="primary"
            onClick={() => this.props.fecharModalApagar()}
          >
            {" "}
            Voltar{" "}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
