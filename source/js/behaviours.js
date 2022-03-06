import $ from "jquery";

/**
 * Hide navbar dropdowns if clicked outside of them
 */
$(window).on("click", function() {
    $(document).on("click", function(event) {
        $(".navbar-item.dropdown").each(function () {
            if (!$.contains($(this).get(0), $(event.target).get(0))) {
                $(this).toggleClass("is-active", false);
            }
        });
    });
});

