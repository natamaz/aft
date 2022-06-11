
$(document).ready(function(){

    <!-- табы -->
    $( function() {
        $( "#tabs" ).tabs();
    } );
    <!-- конец табы -->


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

    var navbar =  $('.fix');  // navigation block
    var wrapper = $('.project');        // may be: navbar.parent();

    $(window).scroll(function(){
        var nsc = $(document).scrollTop();
        var bp1 = wrapper.offset().top;
        var bp2 = bp1 + wrapper.outerHeight()-$(window).height();

        if (nsc>bp1) {  navbar.css('position','fixed'); }
        else { navbar.css('position','absolute'); }
        if (nsc>bp2) { navbar.css('top', bp2-nsc); }
        //else { navbar.css('top', '0'); }
    });

});

