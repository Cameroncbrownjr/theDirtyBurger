$(document).ready(function () {

    $("#devour").on("click", function () {
        var id = $(this).data("id");

        $.ajax("/api/burger/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        );
    });
    

    $('#submit').on('click', function () {
        $.post('/api/burger', $('input'))
        location.reload();
    })

})