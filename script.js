// Gráfico de Percepção
const ctx1 = document.getElementById('percepcaoChart').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Percebem Mudanças', 'Não Percebem'],
        datasets: [{
            data: [97, 3],
            backgroundColor: ['#ee9c92', '#CCCCCC']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

// Gráfico de Aquecimento Global
const ctx2 = document.getElementById('aquecimentoChart').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1880', '1920', '1960', '2000', '2024'],
        datasets: [{
            label: 'Aumento da Temperatura Global (°C)',
            data: [13.5, 13.8, 14.2, 14.7, 15.2],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});