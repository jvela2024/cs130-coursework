const makeBigger = () => {
   alert('make bigger!');
};

const makeSmaller = () => {
   alert('make smaller!');
};


document.getElementsByClassName(".a1").addEventListener('click', makeBigger);
document.getElementsByClassName(".a2").addEventListener('click', makeSmaller);

function makeBigger () {
   $(this).css({height: '+=10%', width: '+=10%'});
}
function makeSmaller () {
   $(this).css({height: '-=10%', width: '-=10%'});
}

