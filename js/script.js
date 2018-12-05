window.onload = function () {
    
    $(function () {
        //顶部导航切换
        $("#demo-list li").click(function () {
            $("#demo-list li.active").removeClass("active")
            $(this).addClass("active");
        })
    })
    /* ------------------------------------------------------ */

    $("#tag_overview").click(function () {
        $("#dashboard_main").load("./pages/page1.html");
    });
    
    $("#tag_overview").click();
    









} 
