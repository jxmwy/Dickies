$(function () {
    $(".list p").click(function () {
        // console.log($(this).closest(".list").find("ul")[0])
        $(this).closest(".list").find("ul").slideToggle("fast")
    })
})