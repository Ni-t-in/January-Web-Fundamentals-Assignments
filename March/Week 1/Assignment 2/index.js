function search(){
    var store = document.getElementById('home').classList;
    var show = document.getElementById('searchFeed').classList;
    var bar = document.getElementById('searchBar').classList;
    var head = document.getElementById('header').classList;
    var profilestore = document.getElementById('profilePage').classList;
    var profilebarstore = document.getElementById('profile').classList;
    if(store.contains('homeImages') || profilestore.contains('profileui')){
        store.replace('homeImages','display_none');
        show.replace('display_none','searchImages')
        head.replace('headBar','display_none');
        bar.replace('display_none','searchinput');
        profilebarstore.replace('profileBar','display_none');
        profilestore.replace('profileui','display_none');
    }
}
function homebutton(){
    var store = document.getElementById('home').classList;
    var show = document.getElementById('searchFeed').classList;
    var bar = document.getElementById('searchBar').classList;
    var head = document.getElementById('header').classList;
    var profilestore = document.getElementById('profilePage').classList;
    var profilebarstore = document.getElementById('profile').classList;
    if(store.contains('display_none')){
        store.replace('display_none','homeImages');
        show.replace('searchImages','display_none')
        head.replace('display_none','headBar');
        bar.replace('searchinput','display_none');
        profilebarstore.replace('profileBar','display_none');
        profilestore.replace('profileui','display_none');
    }
}
function profilebutton(){
    var store = document.getElementById('home').classList;
    var show = document.getElementById('searchFeed').classList;
    var bar = document.getElementById('searchBar').classList;
    var head = document.getElementById('header').classList;
    var profilestore = document.getElementById('profilePage').classList;
    var profilebarstore = document.getElementById('profile').classList;
    if(profilebarstore.contains('display_none')){
        profilebarstore.replace('display_none','profileBar');
        show.replace('searchImages','display_none')
        head.replace('headBar','display_none');
        store.replace('homeImages','display_none');
        bar.replace('searchinput','display_none');
        profilestore.replace('display_none','profileui');
    }
}