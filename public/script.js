

const socket = io();

$('#chat-box').hide();


$('#send-btn').on('click',()=>{
    const msgText = $('#inp').val();
    socket.emit('send-msg',{
        msg:msgText
    })
    $('#inp').val('');
})

socket.on('recieved-msg',(data)=>{
    console.log(data);
    $('#chat').append(`<li class="border mb-2 p-2 rounded-pill" >
    <strong>${data.username}</strong>--> ${data.msg}
    </li>`)
})


$('#login-btn').on('click',()=>{
    const username = $('#username').val();

    socket.emit('login',{
        username:username
    })
    $('#login').hide();
    $('#chat-box').show();
    $('#username').val("")
})






