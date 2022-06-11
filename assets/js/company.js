$(document).ready(function(){

    <!-- плагин высоты -->
    $(function() {
        $('.box img').matchHeight({
            property: 'height',
        });
    });
    <!-- конец плагин высоты -->

    <!-- слайдеры -->
    $('.command_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        dotsClass:'myDots',
        centerMode: true,
        variableWidth: true,
        responsive: [
            {


            },
            {

                breakpoint: 2000,
                settings: {
                    centerMode:false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1920,
                settings: {
                    centerMode:false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1600,
                settings: {
                    centerMode:false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,
                    infinite:true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    infinite:true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    <!-- конец слайдеры -->

    <!-- анимация текста -->
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function() {
            cw[i].className = 'letter out';
        }, i*80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function() {
            nw[i].className = 'letter in';
        }, 340+(i*80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);
    <!-- конец анимация текста -->
});
