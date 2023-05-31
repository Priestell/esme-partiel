fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function sortByCountryPopulation(data) {
  data.sort((a, b) => b.population - a.population);
}
 function run_visualization(data) {
  // Tri des données par population
  sortByCountryPopulation(data);
  // Extraction des noms de pays et des populations
  const countries = data.slice(0, 30).map((d) => d.country);
  const populations = data.slice(0, 30).map((d) => d.population);
  // Création du graphique
  const trace = {
    x: countries,
    y: populations,
    type: 'bar'
  };
  const layout = {
    title: 'Population des 30 premiers pays (ordre croissant)',
    xaxis: {
      title: 'Pays'
    },
    yaxis: {
      title: 'Population'
    }
  };
  const dataPlot = [trace];
  Plotly.newPlot('data-viz', dataPlot, layout);
}