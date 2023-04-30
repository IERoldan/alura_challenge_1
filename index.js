// const codes = {
//     "e": "enter",
//     "i": "imes",
//     "a": "ai",
//     "o": "ober",
//     "u": "ufat",
// };
// const decodes = {
//     "enter": "e",
//     "imes": "i",
//     "ai": "a",
//     "ober": "o",
//     "ufat": "u",
// };

const arrayCodes = ['e','i','a','o','u'];
const arrayDecodes = ['enter','imes','ai','ober','ufat'];

const TextOfInput = document.getElementById("text-input").value;

function textToWork(X,Y) {
    for(var position = 0; position <= X.length ; position++){
    const textToAnalize = document.getElementById("text-input").value;
    document.getElementById("text-input").value = textToAnalize.replaceAll(X[position], Y[position]);
    document.getElementById("text-reveal").innerHTML = textToAnalize;
}
document.getElementById("text-input").value = TextOfInput;

    // Object.keys(codes).forEach((key) => {
    //     var textToAnalize = document.getElementById("text-input").value;
    //     document.getElementById("text-input").value = textToAnalize.replaceAll(key, codes[key]);
    //     document.getElementById("text-reveal").innerHTML = textToAnalize;
    // });
    // document.getElementById("text-input").value = TextOfInput;
};

// function textToDecode() {
//     Object.keys(decodes).forEach((key) => {
//         var textToAnalize = document.getElementById("text-input").value;
//         document.getElementById("text-input").value = textToAnalize.replaceAll(key, decodes[key]);
//         document.getElementById("text-reveal").innerHTML = textToAnalize;
//     });
//     Object.keys(decodes).forEach((key) => {
//         var textToAnalize = document.getElementById("text-input").value;
//         document.getElementById("text-input").value = textToAnalize.replaceAll(key, decodes[key]);
//         document.getElementById("text-reveal").innerHTML = textToAnalize;
//     });
//     document.getElementById("text-input").value = TextOfInput;
// };

function copyText(){
    var textToCopy = document.getElementById('text-reveal').innerHTML;
    navigator.clipboard.writeText(textToCopy);
    // alert(`Texto copiado ${textToCopy}` );
    var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + textToCopy;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }