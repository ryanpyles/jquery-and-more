let newDiv = $('<div> Click Here</div>');
let page  = $('body');
page.append(newDiv);

let  ul = $('<ul></ul>');
page.append(ul);

newDiv.on('click', () => {
    console.log('test');
    let input = $('#myInput');
    let myLi = $(`<li>${input.val()}</li>`)
    ul.append(myLi);

    input.val(''); //clears text for input
})

page.css({
    backgroundColor: "blue",
    color: "white"
})