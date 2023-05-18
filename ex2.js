const btnScreenSize = document.querySelector('.j-btn-screen-size');

btnScreenSize.addEventListener('click', () => {
    alert(`Размер Вашего экрана: ${window.screen.width} пискелей в ширину на ${window.screen.height} пикселей в высоту`);
});