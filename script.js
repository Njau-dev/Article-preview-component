const shareOption = document.querySelector('.share-options');
const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', function () {
    this.classList.toggle('active');
    shareOption.classList.toggle('active');

    console.log('button clicked:', shareOption.classList);
    
});
