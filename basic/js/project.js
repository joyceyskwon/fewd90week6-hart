$('nav a').click(setCurrentNavItem);
$('#submit').click(showIpsum);
$('#paragraphs').focus(resetInput);

function setCurrentNavItem() {
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    resetInput();
}

function showIpsum() {

    var numParagraphs = $('#paragraphs').val();
    if (!numParagraphs > 0) {
        alert('Please choose how many paragraphs you would like.');
        return false;
    }

    var ipsumType = $('nav a.current').attr('data-ipsum');
    var $ipsumElem = $('#' + ipsumType)
    $ipsumElem.find('p').slice(0, numParagraphs).css({'display' : 'block'});
    $ipsumElem.slideDown();
}

function resetInput() {
    $('#paragraphs').val('');
    $('.ipsum').slideUp(400, function() {
        $(this).find('p').css({'display': 'none'});
    });
}
