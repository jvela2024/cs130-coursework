let currentFont = 1.4; 

const makeBigger = () => {
   currentFont += 0.2; 
   document.querySelector(".content").style.fontSize = `${currentFont}em`;
   document.querySelector("h1").style.fontSize = `${currentFont + 0.5}em`;

};

const makeSmaller = () => {
   currentFont -= 0.2; 
   document.querySelector(".content").style.fontSize = `${currentFont}em`;
   document.querySelector("h1").style.fontSize = `${currentFont + 0.5}em`;
};


document.getElementById("a1").addEventListener('click', makeBigger);
document.getElementById("a2").addEventListener('click', makeSmaller);



