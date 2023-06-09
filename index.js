const arrayCodes = ['e', 'i', 'a', 'o', 'u'];
const arrayDecodes = ['enter', 'imes', 'ai', 'ober', 'ufat'];
const TextOfInput = document.getElementById("text-input").value;
const textToAlert = document.getElementById('text_alert');
let textToAnalize = document.getElementById("text-input");
let containerTextEncrypted = document.getElementById('container-text-encrypted').innerHTML = `
            <div class="a-1">
                <img src="assets/muñeco.svg" class="muneco" alt="muñeco">
              </div>
              <div class="a-2">
                <h3 class="a-2-text strong">Ningún mensaje fue encontrado</h3>
                    <p class="a-2-text italic">Ingresa el texto que desea encriptar o desencriptar</p>
              </div>
`

function textAlertCase(){
        textToAlert.className = 'contenedor-text-alert appear'
}

// function resetDivWhenCopy(){
//     containerTextEncrypted = document.getElementById('container-text-encrypted').innerHTML = `
//     <div class="a-1">
//         <img src="assets/muñeco.svg" class="muneco" alt="muñeco">
//       </div>
//       <div class="a-2">
//         <h3 class="a-2-text strong">Ningún mensaje fue encontrado</h3>
//             <p class="a-2-text italic">Ingresa el texto que desea encriptar o desencriptar</p>
//       </div>
// `
// }

function textToWork(X, Y) {
    let containerTextEncrypted = document.getElementById('container-text-encrypted');
    containerTextEncrypted.className = "aside-bis box-reveal-msg"
    containerTextEncrypted.innerHTML = `
            <div class='a-1-bis'>
                <p class="text-reveal" id="text-reveal">
                </p>
            </div>
            <div class="a-2-bis tooltip">
                <button class="btn-3" onclick="copyTextToClipboard()" onmouseout="updateTooltipText()">
                    <span class="tooltiptext" id="myTooltip">
                        Copiar al portapapeles
                    </span>
                    Copiar
                    <lord-icon src="https://cdn.lordicon.com/pqxdilfs.json" trigger="hover"
                        colors="primary:#121331,secondary:#646e78,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#ebe6ef"
                        style="width:30px;height:30px" class='icon-copy'>
                    </lord-icon>
                </button>
            </div>    
    `
    for (let position = 0; position <= X.length; position++) {
        let textToAnalize = document.getElementById("text-input");
        textToAnalize = (document.getElementById("text-input").value).toLowerCase();

        document.getElementById("text-input").value = textToAnalize.replaceAll(X[position], Y[position]);
        document.getElementById("text-reveal").innerHTML = textToAnalize;
    }
    document.getElementById("text-input").value = TextOfInput
    textToAlert.className = 'contenedor-text-alert';
};

function copyTextToClipboard() {
    const textToCopy = document.getElementById('text-reveal').textContent;
    navigator.clipboard.writeText(textToCopy);
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Texto Copiado: " + textToCopy;
    setTimeout( function resetDivWhenCopy(){
        containerTextEncrypted = document.getElementById('container-text-encrypted').innerHTML = `
        <div class="a-1">
            <img src="assets/muñeco.svg" class="muneco" alt="muñeco">
          </div>
          <div class="a-2">
            <h3 class="a-2-text strong">Ningún mensaje fue encontrado</h3>
                <p class="a-2-text italic">Ingresa el texto que desea encriptar o desencriptar</p>
          </div>
    `
    },1200);
}


function updateTooltipText() {
    const tooltip = document.getElementById("myTooltip").innerHTML;
}
