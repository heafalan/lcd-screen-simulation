var socket = io();

function printTheNumber() {
    socket.emit('printTheNumber', document.getElementById('number').value);
}

socket.on('lcdNumbers', function (data) {
    document.getElementById('lcdNumbers').innerHTML = data;
});
