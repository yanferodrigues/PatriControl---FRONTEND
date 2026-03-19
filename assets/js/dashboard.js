const graficoDB = document.getElementById("grafico-dashboard")

new Chart(graficoDB, {
    type: 'doughnut',

    data: {
        labels: [
            'Veiculos',
            'Equipamentos diversos',
            'Maquinas',
            'Informatica e comunicação',
            'Móveis e utensílios',
            'Imóveis'
        ],

        datasets: [{
            label: 'Quantidade',
            data: [200, 450, 600, 900, 500,60],

            borderColor: [
                '#1f2f47',
                '#2d512f',
                '#562c2c',
                '#4e4421',
                '#3f2a4c'
            ],

            backgroundColor: [
                '#2f4cee',
                '#5fc266',
                '#e12a2a',
                '#fee924',
                '#b342ff',
                '#84f2cb'
            ],

            borderWidth: 2,
            hoverOffset: 8
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            duration: 2000,
            easing: 'easeInOutQuart' 
        },
        cutout: "65%",

        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',

                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 10,
                    padding: 15,
                    color: "#ffffff"
                }
            }
        },

        layout: {
            padding: {
                top: 20,
                bottom: 20
            }
        }
    }
});