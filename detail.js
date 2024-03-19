// detail pekerja
const detailBtn = document.querySelector('.detail-btn');
const detailOrang = document.querySelector('.detail-outline');
const exitBtn = document.querySelector('.exit-btn');
const team = document.querySelector('#team');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

detailBtn.onclick = () => {
    detailOrang.classList.add('active');
    team.classList.add('active');
    header.classList.add('active');
    footer.classList.add('active');
};

exitBtn.onclick = () => {
    detailOrang.classList.remove('active');
    team.classList.remove('active');
    header.classList.remove('active');
    footer.classList.remove('active');
};