const image_array = ['image_1','image_2','image_3','image_4','image_5','image_6','image_7','image_8','image_9','image_10',];

const API_KEY = 'UToPIHe0VZ3WxaQwSxfzCActzwVeAneA';

const trending_url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`

const hide_src = document.getElementById('sub_head1').classList;
hide_src.replace('search_results','display_none');

const convert_to_json = function(response){
    return response.json();
}

const handle_data = function(trend){
    first_store = trend.data;
    for(let i = 0;i<first_store.length;i++){
        second_store = first_store[i];
        third_store = second_store.images;
        fourth_store = third_store.downsized;
        image_link = fourth_store.url;
        const put_image = document.getElementById(image_array[i]);
        put_image.src = image_link;
    }
}

fetch(trending_url).then(convert_to_json) .then(handle_data);

const again = function(){
    const show = document.getElementById('sub_head1').classList;
    show.add('display_none');
    const hide = document.getElementById('sub_head').classList;
    hide.remove('display_none');
    fetch(trending_url).then(convert_to_json) .then(handle_data);
}

const repeat = document.getElementById('trend_button');
repeat.addEventListener('click',again);