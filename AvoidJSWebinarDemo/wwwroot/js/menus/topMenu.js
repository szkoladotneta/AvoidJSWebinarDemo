var switchMenu = function () {
    var sidebarSize = $('body').attr('data-sidebar-size');
    if (sidebarSize === 'condensed') {
        $('body').attr('data-sidebar-size', 'default');
    } else {
        $('body').attr('data-sidebar-size', 'condensed');
    }
}