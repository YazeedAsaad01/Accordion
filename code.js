const hideH2 = document.getElementsByClassName('hideThe');
const hideH3p = document.getElementsByClassName('h3p');
const hideButton = document.getElementsByClassName('closeHideThe');
const hideH3Button = document.getElementsByClassName('h3Button');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');

for(let i=0; i < hideH2.length; i++) {
    h2[i].addEventListener('click', () => {
        if(hideH2[i].style.display == 'none') {
            hideH2[i].style.display = 'block';
        }else {
            hideH2[i].style.display = 'none';
        }
    });
}
for(let i=0; i < hideH3p.length; i++) {
    h3[i].addEventListener('click', () => {
        if(hideH3p[i].style.display == 'none') {
            hideH3p[i].style.display = 'block';
        }else {
            hideH3p[i].style.display = 'none';
        }
    });
}