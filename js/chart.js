google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Order', 'Series 1', 'Series 2', 'Series 3'],
        ['1', 40, 30, 20],
        ['2', 30, 40, 15],
        ['3', 40, 30, 40],
        ['4', 15, 25, 35]
    ]);

    var options = {
        seriesType: 'bars',
        series: { 3: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}



// Donut chart data
// Donut chart data
document.querySelectorAll('.donutChart').forEach((chartElement) => {
    const ctx = chartElement.getContext('2d');
    const donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [50, 50],  // 50% progress
                backgroundColor: ['#2AAACB', '#D3D3D3'],
                hoverOffset: 4
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
                beforeDraw: function (chart) {
                    const width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
                    ctx.restore();
                    const fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";

                    const text = "50%",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;

                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }
        }
    });
});
