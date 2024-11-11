import { series } from './data.js';
function renderSeriesTable(series) {
    const tableBody = document.getElementById('table-body');
    series.forEach((serie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${index + 1}</td>
      <td><a href="${serie.url}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    });
    const averageSeasons = calculateAverageSeasons(series);
    const averageRow = document.createElement('tr');
    averageRow.innerHTML = `
    <td colspan="4" style="text-align: left; font-weight: bold;">
      Seasons average: ${averageSeasons}
    </td>
  `;
    tableBody.appendChild(averageRow);
}
function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return Math.round(totalSeasons / series.length);
}
renderSeriesTable(series);
