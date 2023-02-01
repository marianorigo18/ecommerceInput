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

        const cardForm = document.createElement('form');
        cardForm.className = 'card-form';
        
        cardLink.appendChild(card);
        card.appendChild(imgCard);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardForm)
        cardForm.appendChild(inputContainer)
        cardForm.appendChild(buttonContainer);
        inputContainer.appendChild(cardInput)
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
    productsList.addEventListener('input', validar);
    productsList.addEventListener('submit', cargarData);
}



function validar(e){
    let input = e.target.value;
    let buttonPush = e.target.parentElement.parentElement.children[1].children[0]; 

    if(e.target.classList.contains('input-card')){
        if(input > '0'){
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
    const productSeleccionado = e.target.parentElement.parentElement;
    leerDatosProduct(productSeleccionado);
    e.target.reset();
    desabilitarButtons(e)
}

function leerDatosProduct(product){
    const infoCurs = {
        img: product.querySelector('img')
    }

    console.log(infoCurs)
}

function desabilitarButtons(e){
    e.target.children[1].children[0].disabled = true;
}

































