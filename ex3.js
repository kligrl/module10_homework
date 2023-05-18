const wsUrl = 'wss://echo-ws-service.herokuapp.com';
const sendBtn = document.querySelector('.j-send-btn');
const geoBtn = document.querySelector('.j-geo-btn');
const messagesField = document.querySelector('.j-chat-messages');
let websocket;

websocket = new WebSocket(wsUrl);
websocket.onopen = () => showOnScreen('СОЕДИНЕНИЕ УСТАНОВЛЕНО');
websocket.onclose = () => showOnScreen('СОЕДИНЕНИЕ РАЗОРВАНО');
websocket.onmessage = (event) => showOnScreen(event.data, 'recieved');
websocket.onerror = (event) => showOnScreen('ОШИБКА: ' + event.data);

sendBtn.addEventListener('click', () => {
    const input = document.querySelector('.j-input-field').value;
    showOnScreen(input, 'sent');
    websocket.send(input);
});

geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation)
        showOnScreen('ГЕОЛОКАЦИЯ НЕ ПОДДЕРЖИВАЕТСЯ ВАШИМ БРАУЗЕРОМ');
    else {
        showOnScreen('ОПРЕДЕЛЕНИЕ ВАШЕГО МЕСТОПОЛОЖЕНИЯ...');
        navigator.geolocation.getCurrentPosition(geoSucces, geoError);
    }
});

function showOnScreen(message, msgClass) {
    let newMessage = document.createElement('div');
    newMessage.style.cssText = 'padding: 0 10px;';
    newMessage.className = msgClass;
    newMessage.innerHTML = message;
    messagesField.appendChild(newMessage);
}

function showGeoLinkOnScreen(mapLink) {
    let newMessage = document.createElement('a');
    newMessage.style.cssText = 'padding: 0 10px;';
    newMessage.setAttribute('href', mapLink);
    newMessage.setAttribute('target', '_blank');
    newMessage.className = 'sent';
    newMessage.innerHTML = 'ВАШЕ МЕСТОПОЛОЖЕНИЕ';
    messagesField.appendChild(newMessage);
}

function geoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    showGeoLinkOnScreen(mapLink);
}

function geoError() {
    showOnScreen('НЕВОЗМОЖНО ПОЛУЧИТЬ ВАШЕ МЕСТОПОЛОЖЕНИЕ');
}