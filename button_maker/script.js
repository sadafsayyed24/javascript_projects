let backgroundColorz = document.getElementById("bgColorInput");
let fontColorz = document.getElementById("fontColorInput");
let fontSizez = document.getElementById("fontSizeInput");
let fontWeightz = document.getElementById("fontWeightInput");
let paddingz = document.getElementById("paddingInput");
let borderRadiusz = document.getElementById("borderRadiusInput");
let mainButton = document.getElementById("customButton");

function applyCss() {
    let bgcol = backgroundColorz.value;
    let fcol = fontColorz.value;
    let fsize = fontSizez.value;
    let fwt = fontWeightz.value;
    let pdng = paddingz.value;
    let brad = borderRadiusz.value;

    mainButton.style.backgroundColor = bgcol;
    mainButton.style.color = fcol;
    mainButton.style.fontSize = fsize;
    mainButton.style.fontWeight = fwt;
    mainButton.style.padding = pdng;
    mainButton.style.borderRadius = brad;
}