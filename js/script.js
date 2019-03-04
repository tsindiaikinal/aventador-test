$('document').ready( function () {
	// body...
<<<<<<< HEAD
   //  var menuId = document.getElementById('menu');
   // var menuItem = menuId.getElementsByTagName('li');
   // console.log(menuItem);
   //  menuId.addEventListener('click', menuActive);
   //   function menuActive(event) {
   //     var menuLink = document.querySelector('.menu__link');
   //     console.log(event.target);
   //     var eventClickLink = event.target;
   //     var classHas = eventClickLink.classList.contains('active');
   //     var mouseRemoveItem = document.querySelectorAll('.menu li');
   var activeElem = document.querySelectorAll('.menu a'); // выбираем все ссылки в нашем меню
=======
	var activeElem = document.querySelectorAll('.menu a'); // выбираем все ссылки в нашем меню
>>>>>>> c5f672626b630baaac982269c5d950055876057c
// и прогоняем через цикл

for(i=0; i<activeElem.length; i++){ 
// если значение атрибута совпадает с урлом в браузере то
    if(activeElem[i].href==window.location){
        activeElem[i].classList="active menu__link"; // добавляем нужный класс для выделения пункта
    }
}
<<<<<<< HEAD
    var chapter2 = document.querySelectorAll('.chapter-2 p');
    for (var i = 0; i < chapter2.length; i++) {

    if(screen.height == 1024) {
        // alert(screen.height);
        chapter2[i].style.width =  screen.width / 4 + '%';
        chapter2[i].style.height = '90px';
        chapter2[i].style.fontSize = '0.7rem';
        chapter2[i].style.color = 'red';
    }
}
       // if(classHas == false) {
       //      eventClickLink.classList.add('active');
       // } else {
       //      eventClickLink.classList.remove('active');
       //  }
       // mouseRemoveItem.mouseout = function(event) {
       //      var target = event.target;
       //      if( target == true) {
       //      eventClickLink.classList.remove('active');
       //  }
       // }
       // menuLink.event.target.classList.toggle('active');
    // };
=======
>>>>>>> c5f672626b630baaac982269c5d950055876057c

	$('#slider').slick({
        prevArrow: '<button type="button" class="slick-prev slider-arrows__prew"></button>',

        nextArrow: '<button type="button" class="slick-next slider-arrows__next"></button>'
});

	var linkSocial = $('.social-nets__link');
	console.log(linkSocial[0].href);
	Share = {
    /**
     * Показать пользователю диалог шаринга в сооветствии с опциями
     * Метод для использования в inline-js в ссылках
     * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
     *
     * @example <a href="" onclick="return share.go(this)">like+</a>
     *
     * @param Object _element - элемент DOM, для которого
     * @param Object _options - опции, все необязательны
     */
    go: function(_element, _options) {
        var self = Share,
            options = $.extend(
                {   // тип соцсети
                    url:        location.href,  // какую ссылку шарим
                    count_url:  location.href,  // для какой ссылки крутим счётчик
                    title:      document.title, // заголовок шаринга
                    image:        '',             // картинка шаринга
                    text:       '',             // текст шаринга
                },
                $(_element).data(), // Если параметры заданы в data, то читаем их
                _options            // Параметры из вызова метода имеют наивысший приоритет
            );
  
        if (self.popup(link = self[options.type](options)) === null) {
            // Если не удалось открыть попап
            if ( $(_element).is('a') ) {
                // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
                $(_element).prop('href', link);
                return true;
            }
            else {
                // Если это не <a>, то пытаемся перейти по адресу
                location.href = link;
                return false;
            }
        }
        else {
            // Попап успешно открыт, просим браузер не продолжать обработку
            return false;
        }
    },
  
    // ВКонтакте
    vk: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);
  
        return ''
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },
  
    // Одноклассники
    ok: function(_options) {
        var options = $.extend({
                url:    location.href,
                text:   '',
            }, _options);
  
        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },
  
    //Facebook
    fb: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);
  
        return ''
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url)
            + '&p[images][0]=' + encodeURIComponent(options.image);
    },
  
    // Твиттер
    tw: function(_options) {
        var options = $.extend({
                url:        location.href,
                count_url:  location.href,
                title:      document.title,
            }, _options);
  
        return ''
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url)
            + '&counturl=' + encodeURIComponent(options.count_url);
    },
  
    // Открыть окно шаринга
    popup: function(url) {
        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
}
	$(document).on('click', '.social-nets__link', function(){
    Share.go(this);
	});
});

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
