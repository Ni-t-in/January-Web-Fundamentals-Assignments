let search_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=10&q=`;


const handle_search = function(search_item){
    first_store = search_item.data;
    for(let i = 0;i<first_store.length;i++){
        second_store = first_store[i];
        third_store = second_store.images;
        fourth_store = third_store.downsized;
        image_link = fourth_store.url;
        const put_image = document.getElementById(image_array[i]);
        put_image.src = image_link;
    }
}

const begin_search = function(){
    const hide = document.getElementById('sub_head').classList;
    hide.add('display_none');
    const show = document.getElementById('sub_head1').classList;
    show.remove('display_none');
    const search_input = document.getElementById('search_query');
    const term = search_input.value;
    temprory_url = search_url + term;
    console.log(temprory_url);
    fetch(temprory_url).then(convert_to_json) .then(handle_search);
    search_input.value = '';
    console.log('repeat');
}

const clear_field = function(){
    for(let i = 0;i<image_array.length;i++){
        const put_image = document.getElementById(image_array[i]);
        put_image.src = '';
    }
}
const catalyst = function(){
    begin_search();
    clear_field();
}
const button = document.getElementById('search_button');
button.addEventListener('click',catalyst);

