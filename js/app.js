document.addEventListener('DOMContentLoaded', () => {
    mostrarProducts()
})

let carrito = []

function mostrarProducts(){
    const containerCard = document.querySelector('#container__cards');
    
    let fragment = document.createDocumentFragment();
    
    lamparas.forEach(element => {
        
        const contenedorCard = document.createElement('div');
        contenedorCard.className = 'col-6 col-sm-6 col-md-4 col-lg-3'; 
        
        const card = document.createElement('div');
        card.classList.add('card__product');
        card.setAttribute('id', element.id)
        
        const cardLink = document.createElement('div');
        cardLink.classList.add('card__link')
        
        const imgCard = document.createElement('img');
        imgCard.classList.add('card-img-top');
        imgCard.src = element.img;
        imgCard.alt = element.title
        
        const cardBody = document.createElement('div');
        card.className = 'card-body';
        
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title text-center mt-3 text-black-50 text-uppercase fs-6 fw-normal py-3';
        cardTitle.textContent = element.title

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const inputContainer = document.createElement('div');
        inputContainer.className = 'inputContainer';
        
        const cardButtonAdd = document.createElement('button');
        cardButtonAdd.className = 'btn btn-primary btn-sm card__button btnPush buttonFunc';
        cardButtonAdd.disabled = true
        cardButtonAdd.textContent = 'Agregar';

        const cardInput = document.createElement('input');
        cardInput.className = 'input-card';
        cardInput.setAttribute('type', 'tel')
        cardInput.setAttribute('placeholder', 'cantidad')

        // const cardButtonIncrease = document.createElement('button');
        // cardButtonIncrease.className = 'btn btn-primary btn-sm card__button increase buttonFunc';
        // cardButtonIncrease.textContent = '+';

        // const cardButtonDecrease = document.createElement('button');
        // cardButtonDecrease.className = 'btn btn-primary btn-sm card__button decrease buttonFunc';
        // cardButtonDecrease.disabled = true;
        // cardButtonDecrease.textContent = '-';

        const cardForm = document.createElement('form');
        cardForm.className = 'card-form';

        
        cardLink.appendChild(card);
        card.appendChild(imgCard);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardForm)
        cardForm.appendChild(inputContainer)
        cardForm.appendChild(buttonContainer);
        inputContainer.appendChild(cardInput)
        // buttonContainer.appendChild(cardButtonDecrease);
        // buttonContainer.appendChild(cardButtonIncrease);
        buttonContainer.appendChild(cardButtonAdd);
        card.appendChild(cardBody);
        contenedorCard.appendChild(cardLink);
        
        fragment.appendChild(contenedorCard);
    });
    containerCard.appendChild(fragment)
    cargarListeners()
}

function cargarListeners(){
    let productsList = document.querySelector('#container__cards');
    //funcion que valida en timpo real que el datos que le estemos pasando manualmente
    productsList.addEventListener('input', validar);
    productsList.addEventListener('submit', cargarData);
    // productsList.addEventListener('click', setValues)
}



function validar(e){
    let input = e.target.value;
    // let buttonDecrement = e.target.parentElement.parentElement.children[1].children[0]; 
    let buttonPush = e.target.parentElement.parentElement.children[1].children[0]; 

    if(e.target.classList.contains('input-card')){
        if(input > '0'){
            // buttonDecrement.disabled = false;
            buttonPush.disabled = false;
        }else{
            buttonPush.disabled = true;
        }
        if(input == ''){
            buttonDecrement.disabled = true;
            buttonPush.disabled = true;
        }
    }
}

function cargarData(e){
    e.preventDefault()
    let input = e.target.children[0].children[0];
    console.log(input.value)
    e.target.reset();
    desabilitarButtons(e)
}

function desabilitarButtons(e){
    // e.target.children[1].children[0].disabled = true;
    e.target.children[1].children[0].disabled = true;
}

































