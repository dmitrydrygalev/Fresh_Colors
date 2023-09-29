"use-strict";

document.addEventListener('DOMContentLoaded', () => {
    const refreshBtn = document.querySelector(".btn__refresh"),
          cardContainer = document.querySelector(".card__container");          
        //   allPallets = document.querySelector("");  

    const cascadePalette = () => {
        cardContainer.innerHTML = "";
        let hexCode;
        for (let i = 0; i < 32; i++) {
            hexCode = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        
        
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="card" style="background-color: ${hexCode}"></div>       
                           <span class="hex__value">${hexCode}</span>`;
        color.addEventListener('click', () => copyColor(color, hexCode));        
        cardContainer.appendChild(color);
        }      
        

        
    };
    cascadePalette();

    const copyColor = (element, hexVal) => {
        const colorElement = element.querySelector('.hex__value');
            navigator.clipboard.writeText(hexVal).then(() =>{            
                  colorElement.innerHTML = 'Copied!';
                  setTimeout(() => colorElement.innerHTML = hexVal, 1000);
            }).catch(() => alert('Failde copy!'));
    };

    refreshBtn.addEventListener("click", cascadePalette);
});

