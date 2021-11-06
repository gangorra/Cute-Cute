const BASE_URL = 'https://thatcopy.pw/catapi/rest/';        //API
const animalBtn = document.getElementById('proximo');
const animal = document.getElementById('animal');

const getCute = async () => {       //"asuync para pausar o código até promises ser classificada"       //função para mostra os animais
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;        //webpurl esta na API
    }
    catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {           //retorna no local da imagem
    animal.src = await getCute();
}

animalBtn.addEventListener('click', loadImg);

loadImg();
