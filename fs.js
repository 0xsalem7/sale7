const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const bgOverlay = document.getElementById('bg-overlay');
const mainCard = document.getElementById('main-card');

const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];

function setRandomBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    bgOverlay.style.backgroundImage = `url('${randomImage}')`;
}

document.addEventListener('mousemove', (e) => {
    const rect = btnNo.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;
    

    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);


    if (distance < 250) {
        bgOverlay.style.opacity = '0.4';
    } 

    else if (distance > 300) {

        const yesRect = btnYes.getBoundingClientRect();
        const isOverYes = e.clientX >= yesRect.left && e.clientX <= yesRect.right &&
                          e.clientY >= yesRect.top && e.clientY <= yesRect.bottom;
        

        if (!isOverYes) {
            bgOverlay.style.opacity = '0';
        }
    }
});


btnNo.addEventListener('mouseover', () => {
    setRandomBackground();

    const padding = 150; 
    const maxX = window.innerWidth - btnNo.clientWidth - padding;
    const maxY = window.innerHeight - btnNo.clientHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
});


btnYes.addEventListener('mouseover', () => {
    bgOverlay.style.opacity = '0';
});


btnYes.addEventListener('click', () => {
    bgOverlay.style.opacity = '0';
    mainCard.innerHTML = `
        <h1 id="title">ياحمممااار هههههههههه</h1>
        <img src="img/4.jpg" class="result-img" alt="صالح">
    `;
});