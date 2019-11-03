$(document).ready(() => {
    //THE ADD TO CART BUTTON
    for (let c of $(".cart")) {
        $(c).click(function() {
            $(this).text("In cart")
            $(this).addClass("in");
            $(".track").text(Number($(".track").text()) + 1)

            //ALERT(item added to the cart)
            function slideTop() {
                $(".popUp").slideUp();
            }

            $(".popUp").slideDown();
            setTimeout(slideTop, 2500);
            //

            $(this).off("click");
        })
    }

})