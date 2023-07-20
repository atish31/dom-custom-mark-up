const markup = [
    {
        type: 'p',
        id: 'first-parent',
        child: [
            {
                type: 'text',
                value: 'This is the paragraph.',
            },
        ],
    },
    {
        type: 'div',
        id: 'second-parent',
        child: [
            {
                type: 'text',
                value: 'This is the div.',
            }
        ],
    },
    {
        type: 'span',
        id: 'third-parent',
        child: [
            {
                type: 'text',
                value: 'This is the span.',
            }
        ],
    },
];

const addElementsToParent = (markup, element) => {
    const main = document.getElementById('app');

    for (let i = 0; i < markup.length; i++) {
        if (markup[i].type === 'text' && element) {
            element.innerText = markup[i].value;
        } else {
            element = document.createElement(markup[i].type);
            element.setAttribute('id', markup[i].id);
        }

        if (markup[i].child) {
            addElementsToParent(markup[i].child, element);
        }
        main.appendChild(element);
    }
    console.log(main, '!!! main')
}

addElementsToParent(markup);