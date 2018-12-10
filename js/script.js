var currentTag = "";
window.onload = function () {
    var tags = store.get("tags");
    for (var i = 0; i < tags.length; i++) {
        $("#demo-list").append('<li class="defined_tag" id="' + tags[i].name + '"><a href="#"><i class="fa fa-user"></i>' + tags[i].name + '</a></li>');
    }

    $("#tag_overview").click(function () {
        store.set("lastLocation", "tag_overview");
        $("#dashboard_main").load("./pages/page1.html");
    });

    $("#create_tag").click(function () {
        store.set("lastLocation", "create_tag");
        $("#dashboard_main").load("./pages/page2.html");
    });

    $(".defined_tag").click(function () {
        store.set("lastLocation", "tag_overview");
        currentTag = $(this).attr("id");
        $("#dashboard_main").load("./pages/page3.html");
    });

    if (store.get("lastLocation") == "tag_overview") {
        $("#tag_overview").click();
    } else {
        $("#create_tag").click();
    }

    /* ------------------------------------------------------ */
    $(function () {
        // 菜单选中效果
        $("#demo-list li").click(function () {
            $("#demo-list li.active").removeClass("active")
            $(this).addClass("active");
        })
    });
} 
