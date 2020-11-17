const h1 = document.getElementById('title');

const tH_1 = h1.querySelector('span#th-1');
tH_1.addEventListener('mouseover', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    tH_1.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const tH_2 = h1.querySelector('span#th-2');
tH_2.addEventListener('mouseover', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    tH_2.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const tH_3 = h1.querySelector('span#th-3');
tH_3.addEventListener('mouseover', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    tH_3.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const bAreaCom = document.querySelector('.area-komputer');
bAreaCom.addEventListener('mouseover', function () {

    const r1 = Math.round(Math.random() * 255 + 1);
    const g1 = Math.round(Math.random() * 255 + 1);
    const b1 = Math.round(Math.random() * 255 + 1);

    const r2 = Math.round(Math.random() * 255 + 1);
    const g2 = Math.round(Math.random() * 255 + 1);
    const b2 = Math.round(Math.random() * 255 + 1);

    const rgb1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
    const rgb2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';

    bAreaCom.style.background = 'linear-gradient(to bottom, ' + rgb1 + ' , ' + rgb2 + ')';


});

const bAreaPlayer = document.querySelector('.area-player');
bAreaPlayer.addEventListener('mouseover', function () {
    const r1 = Math.round(Math.random() * 255 + 1);
    const g1 = Math.round(Math.random() * 255 + 1);
    const b1 = Math.round(Math.random() * 255 + 1);

    const r2 = Math.round(Math.random() * 255 + 1);
    const g2 = Math.round(Math.random() * 255 + 1);
    const b2 = Math.round(Math.random() * 255 + 1);

    const rgb1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
    const rgb2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';

    bAreaPlayer.style.background = 'linear-gradient(to top, ' + rgb1 + ' , ' + rgb2 + ')';
});

function getPilihanComputer() {
    const com = Math.random();

    if (com < 0.34) return 'gajah';
    if (com >= 0.34 && com < 0.68) return 'semut';
    return 'orang';
}

function getHasil(com, player) {
    if (com == player) return 'DRAW';
    if (com == 'gajah') return (player == 'semut') ? 'You Win' : 'You Lose';
    if (com == 'semut') return (player == 'orang') ? 'You Win' : 'You Lose';
    if (com == 'orang') return (player == 'gajah') ? 'You Win' : 'You Lose';

}

function putar() {

    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuAwal = new Date().getTime();

    setInterval(function () {

        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);


}

var skorP = 0;
var skorC = 0;



const pilihan = document.querySelectorAll('ul li img');


pilihan.forEach(function (pil) {


    pil.addEventListener('click', function () {

        const pilCom = getPilihanComputer();
        const pilPlayer = pil.className;
        const hasil = getHasil(pilCom, pilPlayer);

        putar();

        setTimeout(function () {

            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilCom + '.png');

            const info = document.querySelector('.info');
            const r = Math.round(Math.random() * 255 + 1);
            const g = Math.round(Math.random() * 255 + 1);
            const b = Math.round(Math.random() * 255 + 1);

            info.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
            info.innerHTML = hasil;

            var skorPlayer = document.querySelector('.skor-player');
            var skorComputer = document.querySelector('.skor-komputer');
            if (skorP >= 5) {
                skorP -= 5;
                skorC -= skorC;
                alert("You Win");
                skorPlayer.innerHTML = skorP;
                skorComputer.innerHTML = skorC;
            } else if (skorC >= 5) {
                skorP -= skorP;
                skorC -= 5;
                alert("You Lose");
                skorPlayer.innerHTML = skorP;
                skorComputer.innerHTML = skorC;
            } else {
                if (hasil == 'You Win') {
                    skorP += 1;
                    skorPlayer.innerHTML = skorP;


                }
                if (hasil == "You Lose") {
                    skorC += 1;
                    skorComputer.innerHTML = skorC;
                }

            }

        }, 1000);


    });




});