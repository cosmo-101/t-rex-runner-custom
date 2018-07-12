$(document).ready(function () {

    //Alternar el dropdown
    $(document).on("focus", "#dropdownMenuButton", function () {
        $(this).next().show("slow");
    });
    $(document).on("blur", "#dropdownMenuButton", function () {
        $(this).next().hide("slow");
    });

    //Trigger del evento change de idiomas al clickar los links
    $(document).on("click", ".language-links a:not(.active-language)", function (e) {
        e.preventDefault();
        var lang_val = $(this).data("language");
        $("#footer-language-select").val(lang_val).trigger("change");
    });

    //Buscar el valor del idioma activo y agregar la clase activar al link correspondiente
    var activeLanguage = $("#footer-language-select option:selected").attr("value");
    $(".language-links a[data-language='" + activeLanguage + "']").addClass("active-language");
    
    
    //Comprobacion para poner o no el footer o no abajo del todo
    if ($("body").height() < $(window).height()) {
        $("footer.flex-container").css({
           'position' : 'fixed',
           'bottom' : '0'
        });
    }
    
});