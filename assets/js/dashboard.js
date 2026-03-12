const graficoDB = document.getElementById("grafico-dashboard")


new Chart(graficoDB, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Quantidade',
            data: [200, 450, 600, 900,500],
            borderColor: ['#1f2f47','#2d512f','#562c2c','#4e4421','#3f2a4c'],
            backgroundColor:['#3569d9','#5fc266','#d94e4e','#efc83b','#af76d5'],
        }],
        labels: ['Veiculos', 'Equipamentos diversos', 'Maquinas', 'Informatica e comunicação', 'Móveis e utensílios']
    },
    options: {
        cutout: '60%',
        animation: {
            duration: 1500
        }
    }
});