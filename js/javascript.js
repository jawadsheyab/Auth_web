/*global console*/

/*

    Lesson Name             :   Creating Website [ HTML, CSS, JS ]
    Difficulty              :   Very Easy
    What We Will Use        :   HTML, CSS, JavaScript
    Auther                  :   Unique Codez Academy

*/

function hoverBtn() {
    
    'use strict';
    
    document.getElementById('btn1').style.backgroundColor = '#CCC';
    
}

function backHover() {
    
    'use strict';
    
    document.getElementById('btn1').style.backgroundColor = '#00BC8A';
    
}

function showIpsum() {
    
    'use strict';
    
    document.getElementById('ipsumId').style.visibility = 'visible';
    
}

function hideIpsum() {
    
    'use strict';
    
    document.getElementById('ipsumId').style.visibility = 'hidden';
    
}

/*

var n = 0;
function hoverd() {
    
    'use strict';
    
    n = n + 1;
    
    document.getElementById('img1').textContent = n;
    
}

*/


var mySpan = document.getElementById('img1'),
    
    myImg = document.getElementById('imgHover'),
    
    n = 0;

myImg.onmouseout = function () {
    
    'use strict';
    
    n = n + 1;
    
    mySpan.textContent = n;
    
};


/*
function socialHover() {
    
    'use strict';
    
    document.getElementById('twi').style.color = '#00F';
    
}

function socialBackHover() {
    
    'use strict';
    
    document.getElementById('twi').style.color = '#000';
    
}
*/

function valid() {
    
    'use strict';
    
    var t =  prompt("Enter this name |Jawad| ..");
    
    if (t === 'Jawad') {
        window.location = 'Templete [ HTML - CSS - Js].html';
    } else {
        alert('You Are Not Autheraized!')
    }
    
}