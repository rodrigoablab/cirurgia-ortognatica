/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function enviaForm() {
    var name = $('#nome').val();
    var email = $('#email').val();
    var tel = $('#tel').val();
    var mensagem = $('#mensagem').val();
    if (name != '') {
        $('#nome').removeClass('form-error');

    } else {
        $('#nome').addClass('form-error');
        return false;
    }
    if (email != '') {
        $('#email').removeClass('form-error');

    } else {
        $('#email').addClass('form-error');
        return false;
    }
    if (tel != '') {
        $('#tel').removeClass('form-error');

    } else {
        $('#tel').addClass('form-error');
        return false;

    }
    if (mensagem != '') {
        $('#mensagem').removeClass('form-error');

    } else {
        $('#mensagem').addClass('form-error');
        return false;
    }
    $.post('form-action.php', {

        name: name,
        email: email,
        tel: tel,
        mensagem: mensagem,

    }, function (data) {

        if (data == '1') {
            leadId = new Date();
            $('#envio-contato')[0].reset();
            dataLayer.push({'event': 'lead', 'category': 'Lead', 'action': 'Form', 'label': leadId});
            $('.lead .muda-titulo').text('Obrigado =)');
            $('.lead .muda-desc').text('Informações enviadas com sucesso.');
        } else {

            alert('Ocorreu um erro! Tente Novamente');
        }


    });

    return false; //will not submit the form

}
;
function enviaFormNews() {
    var name = $('#name-form2').val();
    var tel = $('#tel-form2').val();
    if (name != '') {
        $('#name-form2').removeClass('form-error');

    } else {
        $('#name-form2').addClass('form-error');
        return false;
    }
    if (tel != '') {
        $('#tel-form2').removeClass('form-error');

    } else {
        $('#tel-form2').addClass('form-error');
        return false;

    }
    $.post('form-action-news.php', {

        name: name,
        tel: tel

    }, function (data) {

        if (data == '1') {
            leadId = new Date();
            $('#tel-action')[0].reset();
            dataLayer.push({'event': 'lead', 'category': 'Lead', 'action': 'Lig', 'label': leadId});
            alert('Mensagem enviada com sucesso! Em breve iremos retornar para agendar sua consulta!')

        } else {

            alert('Ocorreu um erro! Tente Novamente');
        }


    });

    return false; //will not submit the form

}
;

$().ready(function () {


    $("#tel").numeric();
    $("#tel-form2").numeric();

});
