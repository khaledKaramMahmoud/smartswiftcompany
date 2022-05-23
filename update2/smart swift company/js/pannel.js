$(document).ready(
    function() {
        $('#usersBtn').click(function() {
            $('#users').css('display', 'flex');
            $('#requests').css('display', 'none');
            $('#contacts').css('display', 'none');
            $('#usersBtn').css('color', 'rgb(50, 205, 179)');
            $('#reqBtn').css('color', '#fff');
            $('#contactsBtn').css('color', '#fff');
        })
        $('#reqBtn').click(function() {
            $('#users').css('display', 'none');
            $('#requests').css('display', 'flex');
            $('#contacts').css('display', 'none');
            $('#usersBtn').css('color', '#fff');
            $('#reqBtn').css('color', 'rgb(50, 205, 179)');
            $('#contactsBtn').css('color', '#fff');
        })
        $('#contactsBtn').click(function() {
            $('#users').css('display', 'none');
            $('#requests').css('display', 'none');
            $('#contacts').css('display', 'block');
            $('#usersBtn').css('color', '#fff');
            $('#reqBtn').css('color', '#fff');
            $('#contactsBtn').css('color', 'rgb(50, 205, 179)');
        })
    }
)