$(document).ready(function(){
    if(getCookie("cookiePolicyBar") != "")
    {
        closeCookiePolicyBar();
    }
    AOS.init({ disable: 'mobile' });
});

$(document).ready(function(){
    var stoptransparency = 200; // when to stop the transparent menu
    var hidingmenu = 1200; // when to hide the menu
    var lastScrollTop = 0, delta = 5;
    $(this).scrollTop(0);
	$(window).on('scroll load resize', function() {
		var position = $(this).scrollTop();
		if(position > stoptransparency) {
			$('#transmenu').removeClass('transparency');
		} else {
			$('#transmenu').addClass('transparency');
		}
        if(Math.abs(lastScrollTop - position) <= delta)
            return;
        if (position > hidingmenu && position > lastScrollTop){
            $('#transmenu').fadeOut(600);
        } else {
            $('#transmenu').fadeIn(600);
        }
        lastScrollTop = position;  
	});
    
    $('#transmenu .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('#transmenu .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
});

function closeCookiePolicyBar()
{
    document.getElementById("cookiePolicyBar").toggleDisplay(false);
    document.cookie = "ixianCookieAgreed=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}