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



// chart box 1
const BoxChart1 = document.querySelector('.box-1-chart');
if (BoxChart1) {
    const ctx = document.getElementById('box-1-chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''], // Empty labels to hide the months
            datasets: [{
                label: '', // Remove or keep the label based on your needs
                data: [10, 15, 12, 18, 22, 25, 30],
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderColor: '#29A3A3', // teal for line color
                borderWidth: 2,
                pointBackgroundColor: '#FFAA00', // orange for points
                pointBorderColor: '#FFAA00',
                pointRadius: 7, // size of the points
                pointHoverRadius: 8,
                fill: false // No background fill under the line
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        display: false // hide grid lines on the x-axis
                    },
                    ticks: {
                        display: false // hide labels on the x-axis
                    }
                },
                y: {
                    grid: {
                        display: true // hide grid lines on the y-axis
                    },
                    ticks: {
                        display: false // hide labels on the y-axis
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.8 // smooth curves
                }
            },
            plugins: {
                legend: {
                    display: false // hide the legend (label)
                }
            }
        }
    });
}




// box 2 chart
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create the data table
    var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['Copper', 8.94, '#b87333'], // Custom color
        ['Silver', 10.49, 'silver'], // Named color
        ['Gold', 19.30, 'gold'],     // Named color
        ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
    ]);

    // Chart options
    var options = {
        bar: { groupWidth: '50%' }, // Bar width
        legend: { position: 'none' }, // Hide legend
        hAxis: {
            gridlines: {
                color: 'gray' // Hide the x-axis grid lines
            },
            baselineColor: 'gray', // Show the x-axis line (bottom)
            textPosition: 'none'   // Hide x-axis labels (element names)
        },
        vAxis: {
            gridlines: {
                color: 'transparent' // Hide the y-axis grid lines
            },
            baselineColor: '#gray', // Show the y-axis line (left)
            textPosition: 'gray',  // Hide y-axis labels (density values)
        }
    };

    // Create and draw the chart
    var chart = new google.visualization.ColumnChart(document.getElementById('box-2-chart'));
    chart.draw(data, options);
}



// Big chart
// Get the context of the canvas
const ctx = document.getElementById('big-chart').getContext('2d');

// Create the line chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            data: [270, 200, 400, 210, 380],
            borderColor: 'orange',
            borderWidth: 5, // Line thickness
            pointBackgroundColor: '#000',
            pointBorderColor: '#000',
            pointRadius: 5, // Point size
            fill: false,
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // Disable tooltips
            },
            legend: {
                display: false // Hide legend
            },
            datalabels: { // Datalabels plugin options
                display: true, // Ensure this is true to show data labels
                color: 'black',
                align: 'top',
                anchor: 'end',
                font: {
                    size: 8// Font size for data labels
                },
                formatter: (value, context) => {
                    return value; // Show the actual value
                },
                backgroundColor: function (context) {
                    // Customize background color for each label
                    const value = context.dataset.data[context.dataIndex];
                    if (value === 270) return 'orange';
                    if (value === 200) return 'red';
                    if (value === 400) return 'teal';
                    if (value === 210) return 'teal';
                    return 'grey';
                },
                borderRadius: 4, // Rounded corners for the label background
                padding: 3 // Padding around the text
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false // Hide grid lines
                },
                ticks: {
                    display: false // Hide x-axis labels
                }
            },
            y: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 500,
                ticks: {
                    display: true, // Show y-axis labels
                    stepSize: 100 // Customize step size
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ensure this is included
});
