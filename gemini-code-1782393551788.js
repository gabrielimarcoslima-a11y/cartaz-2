document.addEventListener('DOMContentLoaded', () => {
    
    // Captura dos elementos interativos do simulador
    const optionButtons = document.querySelectorAll('.btn');
    const feedbackPanel = document.getElementById('feedbackDisplay');

    // Monitora o clique do usuário nos botões de tomada de decisão
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const actionType = button.getAttribute('data-action');
            
            // Ativa a exibição do painel de resposta
            feedbackPanel.style.display = 'block';

            if (actionType === 'cidadania') {
                // Estrutura o feedback positivo unindo as diretrizes de prevenção do seu texto
                feedbackPanel.style.backgroundColor = 'rgba(46, 213, 115, 0.1)';
                feedbackPanel.style.border = '1px solid var(--neon-green)';
                feedbackPanel.style.color = '#e3f9eb';
                feedbackPanel.innerHTML = `
                    <strong style="color: var(--neon-green); font-size: 1.2rem; display: block; margin-bottom: 8px;">✓ RESPOSTA CIDADÃ: Atitude Perfeita!</strong>
                    A cidadania digital é a melhor forma de prevenção ao cyberbullying. Quando as pessoas praticam empatia, respeito e responsabilidade online, o ambiente digital se torna mais seguro e saudável. Isso inclui pensar antes de postar, não compartilhar conteúdos que possam prejudicar alguém, respeitar a privacidade alheia e denunciar comportamentos abusivos.
                `;
            } else {
                // Estrutura o feedback de alerta integrando os riscos e impactos descritos no seu texto
                feedbackPanel.style.backgroundColor = 'rgba(255, 71, 87, 0.1)';
                feedbackPanel.style.border = '1px solid var(--neon-coral)';
                feedbackPanel.style.color = '#ffe3e6';
                feedbackPanel.innerHTML = `
                    <strong style="color: var(--neon-coral); font-size: 1.2rem; display: block; margin-bottom: 8px;">⚠ CONSEQUÊNCIA DETECTADA: Alto Risco Virtual!</strong>
                    Ignorar ou repassar expande o problema. Diferente do bullying tradicional, o cyberbullying acontece 24 horas por dia, pode alcançar um grande número de pessoas rapidamente, permite o anonimato do agressor e torna difícil para a vítima escapar do assédio. 
                    <br><br>
                    Esta prática causa graves impactos nas vítimas, como ansiedade, depressão, baixa autoestima, problemas de sono, isolamento social e, em casos mais graves, ideias suicidas.
                `;
            }
        });
    });
});