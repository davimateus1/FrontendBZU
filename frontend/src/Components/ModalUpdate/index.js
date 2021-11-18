import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default class ModalUpdate extends Component {
 
  render() {
    return (
      <Modal isOpen={this.props.modalAlterar}>
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
              value={this.props.form.matricula}
            />
          </FormGroup>

          <FormGroup>
            <label>Nome:</label>
            <input
              className="form-control"
              type="text"
              name="nome"
              onChange={this.props.handleChange}
              value={this.props.form.nome}
            />
          </FormGroup>

          <FormGroup>
            <label>CPF:</label>
            <input
              className="form-control"
              type="text"
              name="cpf"
              maxLength={14}
              onChange={e => this.props.handleChange(e, true)}
              value={this.props.form.cpf}
            />
          </FormGroup>

          <FormGroup>
            <label>Avaliação:</label>
            <input
              className="form-control"
              type="text"
              name="avaliacao"
              maxLength={2}
              onChange={this.props.handleChange}
              value={this.props.form.avaliacao}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="warning" onClick={() => this.props.alterar(this.props.form)}>
            {" "}
            Alterar{" "}
          </Button>{" "}
          <Button color="primary" onClick={() => this.props.fecharModalAlterar()}>
            {" "}
            Voltar{" "}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
