function carregarDados() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dados => {
            const container = document.getElementById('perfil');

            container.innerHTML = `
        <div class="Nome">
            <h1>${dados.nome}</h1>
        </div>

        <div class="div-principal">
            <div class="div-1">
            <img src="${dados.foto}" alt="Foto de ${dados.nome}">
            <p><strong>Data de nascimento:</strong> ${dados.dataNascimento}</p>
            <p><strong>Email:</strong> ${dados.email}</p>
            <p><strong>Telefone:</strong> ${dados.telefone}</p>
            <p><strong>LinkedIn:</strong> <a href="${dados.linkedin}" target="_blank">${dados.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="${dados.github}" target="_blank">${dados.github}</a></p>

            <section class="conhecimentos">
                <h2>Conhecimentos</h2>
                <ul>
                    ${dados.conhecimentos.map(conhecimento => `<li>${conhecimento}</li>`).join('')}
                </ul>
            </section>
        </div>
        
        <div class="div-2"> 
             <section>
                <h2>Experiências Profissionais</h2>
                ${dados.experiencias.map(exp => `
                    <div>
                    <p><strong>Cargo:</strong> ${exp.cargo}</p>
                    <p><strong>Empresa:</strong> ${exp.empresa}</p>
                    <p><strong>Atividades:</strong> ${exp.atividades}</p>
                    <p><strong>Período:</strong> ${exp.inicio} - ${exp.fim}</p>
                    </div>
                `).join('')}
            </section>

            <section class="formacao">
            <h2>Formação Acadêmica</h2>
            ${dados.formacao.map(form => `
                <div>
                <p><strong>Curso:</strong> ${form.curso}</p>
                <p><strong>Instituição:</strong> ${form.instituicao}</p>
                <p><strong>Término:</strong> ${form.termino}</p>
                </div>
            `).join('')}
            </section>
        
        </div>

        
        </div>

        
       
      `;
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}
