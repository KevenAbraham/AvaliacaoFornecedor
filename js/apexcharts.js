var options = {
    series: [132, 189, 256, 351, 421],
    chart: {
        width: 380,
        type: 'pie',
        foreColor: '#ffffff',
    },
    labels: ['1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        style: {
            fontSize: '16px' // Define o tamanho da fonte dos rótulos de dados como 16 pixels
        }
    },
};

var options2 = {
    series: [108, 118, 325, 359, 401],
    chart: {
        width: 380,
        type: 'pie',
        foreColor: '#ffffff',
    },
    labels: ['1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        style: {
            fontSize: '16px' // Define o tamanho da fonte dos rótulos de dados como 16 pixels
        }
    },
};

var options3 = {
    series: [89, 201, 298, 420, 523],
    chart: {
        width: 380,
        type: 'pie',
        foreColor: '#ffffff',
    },
    labels: ['1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        style: {
            fontSize: '16px' // Define o tamanho da fonte dos rótulos de dados como 16 pixels
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);

chart.render();
chart2.render();
chart3.render();