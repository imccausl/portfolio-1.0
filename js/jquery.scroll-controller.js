        /* jquery scroll controller */
$(document).ready(function(){
        
            /** 
     * change the colour of the hamburger menu depending on the background color */
     
    $('.site-wrap').scroll(function(){
        var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
        var div_top = $('#nav-anchor').offset().top;
            if (window_top > div_top) {
                $('#nav-color').html('<style>#nav-toggle span, #nav-toggle span:before, #nav-toggle span:after{background-color:black;}</style>');
            } else {
                $('#nav-color').html('<style>#nav-toggle span, #nav-toggle span:before, #nav-toggle span:after{background-color:white;}</style>');
            }
    });
    
        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $('.nav-item').parent(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        
        $('.site-wrap').scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();
            
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).outerHeight(true); // get the height of the div in question
               
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $('a[href="' + theID + '"] .nav-item').addClass('nav-active');
                } else {
                    $('a[href="' + theID + '"] .nav-item').removeClass('nav-active');
                }
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!$(".nav:last-child .nav-item").hasClass('nav-active')) {
                    var navActiveCurrent = $(".nav-active ~ a").attr('href');
                    $('a[href="' + navActiveCurrent + '"] .nav-item').removeClass('nav-active');
                    $('.nav:last-child .nav-item').addClass('nav-active');
                }
            }
        });
});