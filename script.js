fetch('list.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        return response.json();
    })
    .then(json => {
        document.title = json.title;
        appendTitle(json.title);
        appendItems(json.items);
    })
    .catch(function (error) {
        console.error(error.message);
    })

function appendTitle(title) {
    let h1 = document.createElement('h1');
    h1.innerHTML = title
    document.body.appendChild(h1);
}

function appendItems(items) {
    var ul = document.createElement('ul')
    items.forEach(item => {
        var node = parseItem(item.value);
        ul.appendChild(node);
    });

    document.body.appendChild(ul);
}

function parseItem(value) {
    if (typeof value == "string") {
        return parseString(value);
    } else if (Array.isArray(value)) {
        return parseArray(value);
    }
}

function parseString(string) {
    var li = document.createElement('li');

    var label = document.createElement('label');
    label.innerHTML = string;

    var input = document.createElement('input');
    input.type = 'checkbox';

    label.prepend(input);
    li.appendChild(label);
    return li;
}

function parseArray(array) {
    var ul = document.createElement('ul')
    array.forEach(item => {
        var node = parseItem(item.value);
        ul.appendChild(node);
    });
    return ul;
}
