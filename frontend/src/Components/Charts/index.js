import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Container } from "reactstrap";

const data = {
  labels: ["Davi W", "Michael L", "Jhonas A", "Rafael L", "Jhonathan A"],
  datasets: [
    {
      label: "Resultado do semestre",
      data: [9, 10, 3, 2, 8],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const LineChart = () => (
  <>
    <Container>
      <Line data={data} options={options} height="50" width="100" />
    </Container>
  </>
);

export const VerticalBar = () => (
  <>
    <Container>
      <Bar data={data} options={options} height="50" width="100" />
    </Container>
  </>
);
