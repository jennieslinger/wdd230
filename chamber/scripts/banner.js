const bannerButton = document.querySelector('#banner-button');
const navigation = document.querySelector('.navigation');

bannerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    bannerButton.classList.toggle('open');
});