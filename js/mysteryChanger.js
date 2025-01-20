function mysteryChanger(m) {
    var c = 0;
    var beginBack = false;
    var imgMystery = m - 1;

    $('#show2').css('display', 'none');
    $('#show3').css('display', 'none');
    $('#show4').css('display', 'none');

    // Select the navigation component
    const navComponent = document.querySelector('navigation-component');

    $('#show1button').click(function() {
        c = 1;
        $('.counter').html("<h3>" + c + "</h3>");
        $('#show1').css('display', 'none');
        $('#show2').css('display', 'block');
        // Update the image source dynamically
        navComponent.updateImage('../images/rosary/m' + m + '/rosary-m' + m + 'm' + c + '.jpg');
        scrollInstead();
    });

    $('#show2button').click(function() {
        if (c < 10) {
            c++;
            $('.counter').html("<h3>" + c + "</h3>");
            navComponent.updateImage('../images/rosary/m' + m + '/rosary-m' + m + 'm' + c + '.jpg');
            scrollInstead();
        } else if (c == 10) {
            $('#show2').css('display', 'none');
            $('#show3').css('display', 'block');
            navComponent.updateImage('../images/rosary/m' + m + '/rosary-father' + m + '.jpg');
            c = 10;
            scrollInstead();
        }
    });

    $('#back2button').click(function() {
        if (c > 1) {
            c--;
            $('.counter').html("<h3>" + c + "</h3>");
            navComponent.updateImage('../images/rosary/m' + m + '/rosary-m' + m + 'm' + c + '.jpg');
            scrollInstead();
        } else if (c == 1) {
            $('#show2').css('display', 'none');
            $('#show1').css('display', 'block');
            if (m == 1) {
                navComponent.updateImage('../images/rosary/rosary-start.jpg');
            } else {
                navComponent.updateImage('../images/rosary/m' + imgMystery + '/rosary-father' + imgMystery + '.jpg');
            }
            c = 0;
            scrollInstead();
        }
    });

    // Handle other button clicks as needed
    $('#show3button').click(function() {
        $('#show3').css('display', 'none');
        $('#show4').css('display', 'block');
        scrollInstead();
    });

    $('#back3button').click(function() {
        $('#show3').css('display', 'none');
        $('#show2').css('display', 'block');
        navComponent.updateImage('../images/rosary/m' + m + '/rosary-m' + m + 'm' + c + '.jpg');
        scrollInstead();
    });

    $('#back4button').click(function() {
        $('#show4').css('display', 'none');
        $('#show3').css('display', 'block');
        scrollInstead();
    });
}

function scrollInstead() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}
