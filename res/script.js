var block = window.document.querySelector('.block');
var hole = window.document.querySelector('.hole');
var character = window.document.querySelector('.character');
var floor = window.document.querySelector('.floor');
var gameover = window.document.querySelector('.gameover');
var background = window.document.querySelector('.background');
var score = window.document.querySelector('.score');
var jumping = 0;
var gravity = 0;
var pontuacao = 0;
// var counter = 0;

hole.addEventListener('animationiteration', () =>
{
    var random = Math.random() * 3;
    var top = (random * 100) + 320;
    hole.style.top = -(top) + "px";
});

window.document.addEventListener("keydown", keypush);

function keypush(event)
{
    switch (event.keyCode)
    {
        case 16:
            restart()
            return 1;
            break;
        case 38:
            jump()
            return 1;
            break;
        case 32:
            jump()
            return 1;
            break;
        case 87:
            jump()
            return 1;
            break;
        default:

    }
}



function restart()
{
    block.style.animation = `block 2s linear infinite`;
    hole.style.animation = `block 2s linear infinite`;
    background.style.animation = `bg 10s linear infinite`;
    floor.style.animation = `fg 2s linear infinite`;
    character.style.display = `flex`;
    gameover.style.display = `none`;
    character.style.top = `-1450px`;
    score.innerText = `${pontuacao}`;
    gravity = 0
    score.innerText = `${0}`;

}

setInterval(() =>
{
        if (jumping == 0)
        {
            var characterTop =
            parseInt (window.getComputedStyle(character).getPropertyValue("top"));
            character.style.top = (characterTop + gravity + 0.2) + "px";
                setTimeout(() =>
                {
                    character.style.animation = `rotationDown 350ms ease-in-out`;
                    character.style.transform = `rotateZ(60deg)`;
                }, 10)
            gravity += 0.25;
            if (gravity == 3)
                gravity = 3;
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
            var characterTop =
                parseInt (window.getComputedStyle(character).getPropertyValue("top"));
            var cTop = holeTop - 780;
            if (characterTop > -1025 || (blockLeft < 90) && (characterTop > cTop) && (blockLeft > -30) || (blockLeft < 90) && (characterTop < cTop - 110) && (blockLeft > -20))
            {
                block.style.animation = `none`;
                hole.style.animation = `none`;
                floor.style.animation = `none`;
                background.style.animation = `none`
                character.style.display = `none`;
                gameover.style.display = `block`;
                score.innerText = `${pontuacao}`;
                clearInterval(tempoInterval);
            }
        }
}, 10)

var contador = 0;
var tempoInterval = setInterval(() =>
{
    pontuacao += 1;
    score.innerText = `${pontuacao}`;
}, 1800)

function jump()
{
    jumping = 1;
    let jumpingCount = 0;
    var jumpInterval = setInterval (() =>
    {
        var characterTop =
        parseInt (window.getComputedStyle(character).getPropertyValue("top"));
        // if ((characterTop > 3) && (counter<15))
        character.style.top = ((characterTop) - (2.1)) + "px";
        setTimeout(() =>
        {
            character.style.animation = `rotationUp 40ms ease-in-out`;
            character.style.transform = `rotateZ(-45deg)`;
        }, 10)
        if (jumpingCount > 40 && (character.style.transform = `rotateZ(-35deg)`))
        {
            clearInterval(jumpInterval)
            jumping = 0;
            gravity = 0.1;
            jumpingCount = 0;
        }
        jumpingCount++;
    }, 2.9);
}
