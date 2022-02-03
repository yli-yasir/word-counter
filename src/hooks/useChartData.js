import { useEffect, useState } from "react";

export default function useChartData(wordFrequencies) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData(makeChartData(wordFrequencies));
  }, [wordFrequencies]);

  return chartData;
}

function makeChartData(wordFrequencies) {
  const words = [];
  const counts = [];
  const colors = [];
  const borderColors = [];
  for (let i = 0; i < wordFrequencies.length; i++) {
    const { word, count } = wordFrequencies[i];
    words.push(word);
    counts.push(count);
    colors.push(`hsla(${360 * (i / wordFrequencies.length)},90%,60%,0.5)`);
    borderColors.push(`hsla(${360 * (i / wordFrequencies.length)},90%,60%,1)`);
  }
  return {
    labels: words,
    datasets: [
      {
        label: "Word Density",
        data: counts,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
}
