let nav = document.getElementById("navbar");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction(){
        if (document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80) {
               nav.classList.add("list");
            }else {
                nav.classList.remove("list");
            }
    };