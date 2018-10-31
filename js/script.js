var myNav = document.getElementById('navwrapper').classList;
var scrollState = 0;

function downAction() {
    myNav.remove('navOpen');
    myNav.add('navCollapse');
}

function upAction() {
    myNav.remove('navCollapse');
    myNav.add('navOpen');
}

var scrollTop = function() {
    return window.scrollY;
};

function homeAction() {

}

// Primary scroll event function
var scrollDetect = function(home, down, up) {
    // Current scroll position
    var currentScroll = scrollTop();
    if (scrollTop() === 0) {
      home();
    } else if (currentScroll > scrollState) {
      down();
    } else {
      up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
};

window.addEventListener("scroll", function() {
    scrollDetect(homeAction, downAction, upAction);
});