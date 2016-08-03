var triggerNodeList = document.querySelectorAll('nav a');
var inputElement = document.querySelector('#paragraphs');
var submitElement = document.querySelector('#submit');
var contentElement = document.querySelector('#js-content');

function generateContent() {

    var currentIpsum = document.querySelector('a.current').dataset.ipsum;
    var numberOfParagraphs = inputElement.value > 0 ? inputElement.value : 5;

    if (currentIpsum == 'bacon') {
        requestBaconIpsum(numberOfParagraphs).then(function(response) {
            setContent(response);
        });
    } else {
        setContent(data[currentIpsum].slice(0, numberOfParagraphs).join(''));
    }
}

function setAsActive() {
    var activeClass = 'current';
    for (var i = 0; i < triggerNodeList.length; i++) {
        triggerNodeList[i].classList.remove(activeClass);
    }
    this.classList.add(activeClass);
    resetInputValue();
}

function resetInputValue() {
    inputElement.value = '';
    contentElement.innerHTML = '';
}

function requestBaconIpsum(numberOfParagraphs) {
    return $.ajax({
        method: 'POST',
        url: 'https://baconipsum.com/api/?type=all-meat&paras=' + numberOfParagraphs + '&start-with-lorem=1&format=html',
    });
}

function setContent(html) {
    contentElement.innerHTML = html;
}

for (var i = 0; i < triggerNodeList.length; i++) {
    triggerNodeList[i].onclick = setAsActive;
}

inputElement.onfocus = resetInputValue;
submitElement.onclick = generateContent;
