function createGauge(ctx, label, value, min, max, color) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [value, max - value],
                backgroundColor: [color, '#2a2a2a'],
                borderWidth: 0
            }]
        },
        options: {
            circumference: 180,
            rotation: -90,
            cutout: '75%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
            },
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: label,
                fontSize: 16,
                fontColor: '#ffffff'
            }
        }
    });
}

// Temperature Gauge - Red
var tempCtx = document.getElementById('temperatureGauge').getContext('2d');
createGauge(tempCtx, 'Temperature', 25, 0, 50, '#ff3d67'); // Example value: 25°C

// Humidity Gauge - Blue
var humidityCtx = document.getElementById('humidityGauge').getContext('2d');
createGauge(humidityCtx, 'Humidity', 65, 0, 100, '#36a2eb'); // Example value: 65%

// Nitrogen Gauge - Green
var nitrogenCtx = document.getElementById('nitrogenGauge').getContext('2d');
createGauge(nitrogenCtx, 'Nitrogen', 50, 0, 100, '#4caf50'); // Example value: 50ppm

// Phosphorus Gauge - Purple
var phosphorusCtx = document.getElementById('phosphorusGauge').getContext('2d');
createGauge(phosphorusCtx, 'Phosphorus', 30, 0, 100, '#ba68c8'); // Example value: 30ppm

// Potassium Gauge - Orange
var potassiumCtx = document.getElementById('potassiumGauge').getContext('2d');
createGauge(potassiumCtx, 'Potassium', 75, 0, 100, '#ff9800'); // Example value: 75ppm
