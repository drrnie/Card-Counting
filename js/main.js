var deck = [1,2,3,4,5,6,7,8,9,10, "J", "Q","K", 'A'];
var count = 0;
var images = [];
var imageinput = [];
var playerhand = [];

let submitcards = () => { 
    var newcard1 = document.querySelector('.newcard1').value;
    var newcard2 = document.querySelector('.newcard2').value;
    var newcard3 = document.querySelector('.newcard3').value;
    var newcard4 = document.querySelector('.newcard4').value;
    var newcard5 = document.querySelector('.newcard5').value;

    playerhand.push(newcard1, newcard2, newcard3, newcard4, newcard5);
    imageinput.push(newcard1, newcard2, newcard3, newcard4, newcard5);
    alert("Click on 'Draw Cards' to display current deck");
    alert("Click on 'Count Cards' to display card counting score");
}
let calculateScore = card =>{
        card === 1 || card === 2 || card === 3 || card === 4 || card === 5 || card === 6 || card === '1' || card === '2' || card === '3' || card === '4' || card === '5' || card === '6' 
        ? count++
        : (card === 7 || card === 8 || card === 9 || card === '7' || card === '8' || card === '9'
        ? count += 0
        : (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A' 
        ? count --
        : null));
    return count;
}

let showImages = show =>{
    show === 1 || show === '1'? images.push('<img src="img/ace.jpg" />')
    : (show === 2 || show === '2' ?  images.push('<img src="img/2.png" />')
    : (show === 3 || show === '3' ? images.push('<img src="img/3.png" />')
    : (show === 4 || show === '4' ? images.push('<img src="img/4.png" />')
    : (show === 5 || show === '5' ? images.push('<img src="img/5.png" />')
    : (show === 6 || show === '6' ? images.push('<img src="img/6.png" />')
    : (show === 7 || show === '7' ? images.push('<img src="img/7.png" />')
    : (show === 8 || show === '8' ? images.push('<img src="img/8.png" />')
    : (show === 9 || show === '9' ? images.push('<img src="img/9.png" />')
    : (show === 10 || show === '10' ? images.push('<img src="img/10.png" />')
    : show === 'J' ? images.push('<img src="img/Jack.png" />')
    : show === 'Q' ? images.push('<img src="img/Queen.png" />')
    : show === 'K' ? images.push('<img src="img/King.png" />')
    : null)))))))));
    return images;
}

let showScore = () =>{
    showImages(imageinput[0]);
    showImages(imageinput[1]);
    showImages(imageinput[2]);
    showImages(imageinput[3]);
    showImages(imageinput[4]);
    document.querySelector('.drawbutton').disabled = true;
    if (images[0] == undefined){
        document.querySelector('.item1').innerHTML = '<img src="img/back of card.png" alt=""></img>';
    }
    else{
        document.querySelector('.item1').innerHTML = images[0];
    }
    if(images[1] == undefined){
        document.querySelector('.item2').innerHTML = '<img src="img/back of card.png" alt=""></img>';
    }
    else{
        document.querySelector('.item2').innerHTML = images[1];
    }
    if (images[2] == undefined){
        document.querySelector('.item3').innerHTML = '<img src="img/back of card.png" alt=""></img>';
    }
    else{
        document.querySelector('.item3').innerHTML = images[2];
    }
    if (images[3] == undefined){
        document.querySelector('.item4').innerHTML = '<img src="img/back of card.png" alt=""></img>';
    }
    else{
        document.querySelector('.item4').innerHTML = images[3];
    }
    if (images[4] == undefined){
        document.querySelector('.items').innerHTML = '<img src="img/back of card.png" alt=""></img>';
    }
    else{ 
        document.querySelector('.items').innerHTML = images[4];
    }
}

let countingcards = () =>{
    calculateScore(playerhand[0]), calculateScore(playerhand[1]), calculateScore(playerhand[2]), calculateScore(playerhand[3], calculateScore(playerhand[4]));
    document.querySelector('.total').innerHTML = "Card Count Score: " + count + ((count>0) ? ' Bet' : ' Hold');
    document.querySelector('.countbutton').disabled = true;
}

let resetfield = () =>{
    window.location.reload();
}
