const boxes = ['red', 'cyan', 'teal', 'purple', 'yellow', 'green', 'pink', 'gold']

const game = {};
$('.startBtn').click(startGame);

function startGame(){
// console.log('start');
$('.startBtn').hide();
game.clicks = 0;
game.puase = false;    
game.sel =[];
//concat boxes array so that each color has a match
game.newArray = boxes.concat(boxes);
// console.log(game.newArray);
$('.game').html('');
$.each(game.newArray, function(key, value){
    // console.log(key);
    // console.log(value)
    let box = $('<div>')
    console.log(box);
    box.addClass('box');
    box.data('cnt', key + 1);
    box.data('val', value)
    let back =$('<div>')
})
}

