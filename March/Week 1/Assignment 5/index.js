let title = [];

let title_definition = [];

const title_saved = function () {
    const title_name = document.getElementById('title_input');
    const title_value = title_name.value;
    title.push(title_value);
    title_name.value = '';

    print_title();
}
const definition_saved = function () {
    const definition = document.getElementById('define_title');
    const dfn_value = definition.value;
    title_definition.push(dfn_value);
    definition.value = '';
}
const catalyst = function () {
    title_saved();
    definition_saved();
}
const define_btn = document.getElementById('save_dfn');
define_btn.addEventListener('click', catalyst);

const print_title = function () {
    const add = document.getElementById('title_list');
    add.innerHTML = '';
    for (let i = 0; i < title.length; i++) {
        const title_add = document.createElement('li');
        title_add.innerText = title[i];
        title_add.setAttribute('onclick', `show_dfn(${i})`);
        add.appendChild(title_add);
    }
    // addEvent();
}
const show_dfn = function (a) {
    const title_name = document.getElementById('title_value');
    title_name.innerText = title[a];
    const definition = document.getElementById('details_value');
    definition.innerText = title_definition[a];
}