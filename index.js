const btn = document.querySelector('.j-btn');
const btn_icon = document.querySelector('.j-btn-icon');
const svgIcon = btn_icon.innerHTML;
const svgIconFill = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
</svg>
`;
let isIconFilled = false;

btn.addEventListener('click', () => {
    if (isIconFilled)
        btn_icon.innerHTML = svgIcon;
    else
        btn_icon.innerHTML = svgIconFill;
    
    isIconFilled = !isIconFilled;
});


const secondBtn = document.querySelector('.j-second-btn');
const secondBtn_iconPrimary = document.querySelector('.j-second-btn-icon-primary');
const secondBtn_iconSecondary = document.querySelector('.j-second-btn-icon-secondary');

secondBtn.addEventListener('click', () => {
    secondBtn_iconPrimary.classList.toggle('visible');
    secondBtn_iconSecondary.classList.toggle('visible');
});