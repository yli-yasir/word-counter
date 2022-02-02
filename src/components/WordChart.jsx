import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import wordFrequency from "../appPropTypes";
import useChartData from "../hooks/useChartData";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export default function WordChart({ wordFrequencies }) {
  const data = useChartData(wordFrequencies);
  return data && <Doughnut data={data} />;
}

WordChart.propTypes = {
  wordFrequencies: PropTypes.arrayOf(wordFrequency).isRequired,
};
