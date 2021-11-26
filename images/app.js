//light share button next to the name
const shareButtonLight = document.querySelector('.share-button'); 
const sharePopupSmall = document.querySelector('.share-popup-small');
const sharePopupBig = document.querySelector('.share-popup-big');
const body = document.querySelector('body');



sharePopupSmall.classList.add('hidden-small')
sharePopupBig.classList.add('hidden-big')

shareButtonLight.addEventListener('click', function(){

    if (window.innerWidth > 425 ) {
        
        sharePopupBig.classList.remove('hidden-big')
        body.addEventListener('mouseup', function () {
            sharePopupBig.classList.add('hidden-big')
        });
    } 

    if (window.innerWidth <= 425 ) {
        sharePopupSmall.classList.remove('hidden-small')
        body.addEventListener('mouseup', function () {
            sharePopupSmall.classList.add('hidden-small')
        });
    }
});

    



