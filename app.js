const buscarGatinhos = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText);
                cats.forEach(cat => {
                    const imgContainer = document.createElement('div');

                    const img = document.createElement('img');
                    img.src = cat.url;

                    const catId = document.createElement('span');
                    catId.textContent = `Cat ID: ${cat.id}`;

                    imgContainer.appendChild(img);
                    imgContainer.appendChild(catId);

                    document.querySelector("#gatinhos").appendChild(imgContainer);
                });
            } else {
                alert('Erro na requisição');
            }
        }
    };
    xhr.send();
};

const btnMostrar = document.querySelector("#mostrar-gatinhos");
btnMostrar.addEventListener("click", buscarGatinhos);

const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json');

    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            const ul = document.createElement('ul');
            marcas.forEach(marca => {
                const li = document.createElement('li');

                const logo = document.createElement('img');
                logo.src = marca.image?.optimized;
                li.appendChild(logo);

                const nomeMarca = document.createElement('span');
                nomeMarca.textContent = marca.name; 
                li.appendChild(nomeMarca);

                ul.appendChild(li);
            });
            document.body.appendChild(ul);
        })
        .catch(erro => console.log(erro));
};

const btnMarcas = document.querySelector("#marcas");
btnMarcas.addEventListener("click", getMarcas);