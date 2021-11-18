import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { LineChart, VerticalBar } from "../Charts";

export default class ShowChart extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modalChart}>
        <ModalHeader>
          <div>
            <h4>Gráficos do Semestre</h4>
          </div>
        </ModalHeader>

        <ModalBody>
          <LineChart />
        </ModalBody>
        <ModalBody>
          <VerticalBar />
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.props.fecharModalChart()}>
            {" "}
            Voltar{" "}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
