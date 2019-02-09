let acaciaLink = document.querySelector('#acacia-link');
let heatherLink = document.querySelector('#heather-link');
let buckwheatLink = document.querySelector('#buckwheat-link');
let honeydewLink = document.querySelector('#honeydew-link');

let linkArray = [acaciaLink, heatherLink, buckwheatLink, honeydewLink];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', (e) => {

        switch (eachLink) {

            case acaciaLink:
                fetchPage(eachLink, 'honey/acacia.html');
                break;

            case heatherLink:
                fetchPage(eachLink, 'honey/heather.html');
                break;

            case buckwheatLink:
                fetchPage(eachLink, 'honey/buckwheat.html');
                break;

            case honeydewLink:
                fetchPage(eachLink, 'honey/honeydew.html');
                break;
        }
    })
});
                                    

let PuffedCerealLink = document.querySelector('#puffed-cereal-link');
let ChocoladeBitesLink = document.querySelector('#chocolade-bites-link');
let TropicalSmoothieBowlLink = document.querySelector('#tropical-smoothie-bowl-link');

let ContactlLink = document.querySelector('#contact-link');

let linkArrayFn = [PuffedCerealLink, ChocoladeBitesLink, TropicalSmoothieBowlLink, ContactlLink];

linkArrayFn.forEach((eLink) => {
    eLink.addEventListener('click', (e) => {
        switch (eLink) {
            case PuffedCerealLink:
                fetchPage(eLink, 'recipes/puffedCereal.html');
                break;

            case ChocoladeBitesLink:
                fetchPage(eLink, 'recipes/chocoladeBites.html');
                break;

            case TropicalSmoothieBowlLink:
                fetchPage(eLink, 'recipes/tropicalSmoothieBowl.html');
                break;

                case ContactlLink:
                fetchPage(eLink, 'contact.html');
                break;
        }
    })
})

let AcaciaLink = document.querySelector('#acacia-btn-link');
let HeatherLink = document.querySelector('#heather-btn-link');
let HoneydewLink = document.querySelector('#honeydew-btn-link');

let linkArr = [AcaciaLink, HeatherLink, HoneydewLink];

linkArr.forEach((elemLink) => {
    elemLink.addEventListener('click', (e) => {
        switch (elemLink) {
            case AcaciaLink:
                fetchPage(elemLink, 'honey/acacia.html');
                break;

            case HeatherLink:
                fetchPage(elemLink, 'honey/heather.html');
                break;

            case HoneydewLink:
                fetchPage(elemLink, 'honey/honeydew.html');
                break;
        }
    })
})





function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
        baseURL += `:${window.location.port}`;
    }

    fetch(`${baseURL}/${page}`)
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
        let doc = new DOMParser().parseFromString(html, "text/html");

        anime({
            targets: '.text-section h1, .text-section p, .text-section div',
            translateX: 700,
            opacity: 0,
            easing: 'easeInExpo',
            duration: 700,
            complete: (anim) => {
                document.querySelector('.column-wrapper').remove();
            }
        })

            anime({
                targets: '.image-section',
                translateY: 2200,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
            })
            anime({
                targets: '.gallery-counter',
                translateX: 5200,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
            })
            anime({
                targets: '.card-contactMe',
                translateY: 2200,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
            })

            
            setTimeout(function () {
                document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));

                anime({
                    targets: '.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div',
                    translateX: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                })
                anime({
                    targets: '.image-section',
                    translateY: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    borderRadius: ['0%', '20%'],
                    easing: 'easeOutExpo',
                })
                anime({
                    targets: '.gallery-counter',
                    translateY: [300, 0],
                    delay: 1000,
                    opacity: [0, 1],
                    borderRadius: ['0%', '20%'],
                    easing: 'easeOutExpo',
                })
                anime({
                    targets: '.card-contactMe',
                    translateY: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    easing: 'easeInExpo',
                })
            }, 800);
        })
}