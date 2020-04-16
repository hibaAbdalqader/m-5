'use strict'

var userName = prompt('what is your name');
console.log(userName);
document.write('<h1>' + 'hello' + '</h1>');

var showMessage = function() {

        var message = prompt('are you interested in donation for protecting animales');
        var part;
        if (message === 'yes I would like to') {
            part = '<img src="https://static3.bigstockphoto.com/2/8/2/large1500/282396682.jpg">';
        } else {
            part = 'wish luck for us';
        }

        {
            return part;
        }
        document.write(showMessage());