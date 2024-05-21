document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();


    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;


    const dados = {
        nome: nome,
        email: email
    };


    const url = 'https://jsonplaceholder.typicode.com/posts';

    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar os dados.');
    });
});