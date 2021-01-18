var btnTranslate = document.querySelector("#btn-translater");
var txtInput = document.querySelector("#txt-input");
var outuptDiv = document.querySelector("#output-box");

//var serverURL = "http://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/groot.json";


function isntEmpty(value){
    
    if(value.length==0){
        console.log(value); 
        return true;
    }
    return false
}
function errorHandler(error) {
    console.log("Something went wrong - ", error);
    alert("Something went wrong!");
}

function getTranslateURL(text){
    return serverURL + "?text=" + text;
}

function clickEventHandler() {

    var inputText = txtInput.value;
    if(isntEmpty(inputText)){
        alert("Input field is empty. Kindly enter some text!")
        return
    }
    //API Call
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => {var translatedText = json.contents.translated;
                   outuptDiv.innerText = translatedText })
    .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickEventHandler); 