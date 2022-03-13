const array = ['image_1','image_2','image_3','image_4','image_5','image_6','image_7','image_8','image_9','image_10','image_11','image_12',]

const zoom = function (a) {
    const background = document.getElementById('black').classList;
    background.replace('display_none','black_bg');

    const container = document.getElementById('zoom_image').classList;
    container.replace('display_none', 'zoom_to_images');

    const check = document.getElementById(array[a]).classList;
    check.replace('display_none','zoom');

    const btn = document.getElementById('close_button').classList;
    console.log(btn);
    btn.replace('display_none','close_btn');

}

const all_close = function(){
    for(let i=0;i<array.length;i++){
        const check = document.getElementById(array[i]).classList;
        if(check.contains('zoom')){
            check.replace('zoom','display_none');
        }  
    }
    const btn = document.getElementById('close_button').classList;
    btn.replace('close_btn','display_none');

    const background = document.getElementById('black').classList;
    background.replace('black_bg','display_none');

    const container = document.getElementById('zoom_image').classList;
    container.replace( 'zoom_to_images','display_none');
}