function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculate() {
    var y = parseInt(document.getElementById('y').value);
    var S = parseFloat(document.getElementById('S').value);
    var fData = [];
    var gData = [];
    var fSum = 0;
    var gSum = 0;

    for (var n = 0; n <= y; n++) {
        var fn = Math.pow(S, n) * Math.pow((1 - S), (y - n)) * factorial(y) / (factorial(n) * factorial(y - n));
        fSum += fn;
        gSum += fn;
        fData.push({ x: n, y: fn });
        gData.push({ x: n, y: gSum });
    }

    renderChart('chartF', 'f(n)', fData);
    renderChart('chartG', 'g(n)', gData);
}

function renderChart(canvasId, label, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.x),
            datasets: [{
                label: label,
                data: data.map(item => item.y),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
}



