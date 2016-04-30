'use strict'

window.addEventListener("load", function () {
    var hideBtn = $("<button data-hidden=\"false\" class=\"hidden-file aui-button aui-button-light\">Hide it</button>");
    hideBtn.click(hideHandler);

    $(".sbs").before(hideBtn);
});

function hideHandler(){
    var that = $(this);
    var reviewBox = that.closest(".heading").nextAll(".diff-content-container");
    if(that.data("hidden")){
        expandMargins(that.closest("section"));
        reviewBox.show();
        that.html("Hide it");
        that.data("hidden", false);
    }else{
        shrinkMargins(that.closest("section"));
        reviewBox.hide();
        that.html("Show it");
        that.data("hidden", true);
    }
}

function shrinkMargins(section){
    section.css("margin-top", "5px");
    section.next().css("margin-top", "0px");
}

function expandMargins(section){
    section.css("margin-top", "40px");
    section.next().css("margin-top", "40px");
}