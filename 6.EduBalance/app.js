document.addEventListener("DOMContentLoaded", () => {
    // Inicializar o gerenciador de abas
    initTabs();
    
    // Inicializar a renderização dos gráficos do Chart.js
    initCharts();
});

/**
 * Controla a navegação por Abas (SPA Simulada)
 */
function initTabs() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Remover classe ativa de todos os botões e seções
            navButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Adicionar classe ativa no botão clicado e na aba correspondente
            button.classList.add("active");
            const activeContent = document.getElementById(targetTab);
            activeContent.classList.add("active");

            // Caso o usuário navegue para os gráficos, força o Chart.js a atualizar o layout interno
            if (targetTab === "graficos") {
                window.dispatchEvent(new Event('resize'));
            }
        });
    });
}

/**
 * Inicialização e configuração dos Gráficos (Chart.js)
 */
function initCharts() {
    // 1. Configuração do Gráfico de Barras Comparativo
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Estudante A (Conectado)', 'Estudante B (Focado)', 'Estudante C (Moderado)', 'Estudante D (Tecnológico)'],
            datasets: [
                {
                    label: 'Tempo de Tela (Redes/Streaming) em Horas',
                    data: [8, 2, 4.5, 2.5],
                    backgroundColor: '#ef4444', // Vermelho suave / Alerta
                    borderRadius: 6,
                },
                {
                    label: 'Horas de Estudo Ativo',
                    data: [1, 4.5, 2.5, 4],
                    backgroundColor: '#2563eb', // Azul Índigo Profissional
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { font: { family: 'Inter', size: 12 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Horas Diárias', font: { family: 'Inter' } }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // 2. Configuração do Gráfico Donut (Distribuição Digital)
    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Redes Sociais', 'Streaming', 'Ferramentas de IA'],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: [
                    '#f59e0b', // Laranja (Alerta)
                    '#ef4444', // Vermelho (Crítico)
                    '#06b6d4'  // Ciano/Info (IA / Produtivo)
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: 'Inter', size: 12 },
                        padding: 20
                    }
                }
            },
            cutout: '70%' // Deixa o gráfico estilo "Donut" elegante e moderno
        }
    });
}