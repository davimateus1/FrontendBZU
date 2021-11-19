import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default class ModalCreate extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modalInserir}>
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
              placeHolder="Ex: Davi Mateus"
              onChange={this.props.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>CPF:</label>
            <input
              className="form-control"
              type="text"
              name="cpf"
              maxLength={14}
              placeHolder="Apenas dígitos"
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
              placeHolder="Apenas dígitos (0 - 10)"
              maxLength={2}
              onChange={this.props.handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="warning" onClick={() => this.props.inserir()}>
            {" "}
            Inserir{" "}
          </Button>{" "}
          <Button
            color="primary"
            onClick={() => this.props.fecharModalInserir()}
          >
            {" "}
            Voltar{" "}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
