$(document).ready(function(){
    var link = 0;
    var header = 0;
    $(".join_btn").on("click",function(){
        header = $(".main").height() *1.5;
        link = $(".section2").offset().top - header;
        window.scrollTo({ left: 0, top: link, behavior: "smooth" });
    });
    $(".link_btn").on("click",function(){
        header = $(".main").height() *1;
        if($(this).attr("link") == "1"){
            link = $(".section2").offset().top - header;
        } else if ($(this).attr("link") == "2") {
            link = $(".section3").offset().top - header;
        } else if ($(this).attr("link") == "3") {
            link = $(".section4").offset().top - header;
        } else if ($(this).attr("link") == "4") {
            link = $(".section6").offset().top - header;
        }
        window.scrollTo({ left: 0, top: link, behavior: "smooth" });
    });
    $(".main_logo").on("click",function(){
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

    });

    const u = document.querySelector(".submit_btn");
    u.addEventListener("click", function() {
        const r = document.querySelectorAll(".form_inputs")
            , t = document.querySelector(".form_textarea")
            , s = `
            Name: ${r[0].value}
            Email: ${r[1].value}
            Message: ${t.value}
            `
            , n = `mailto:ceo@a-on.shop?subject=엘앤케이 컴퍼니_Contact&body=${encodeURIComponent(s)}`;
        window.open(n)
    });
});