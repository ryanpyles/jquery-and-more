let div = $("<div>Click Here.</div>");
let body = $("body");
let para = $("<p>這是我用中文寫一個網站的嘗試。如果願意，請單擊文本以顯示消息。</p>");

body.append(div);
div.append(para);

div.on('click', () => {
    alert(`Bonjour le monde! 世界，大家好！`)
})

body.css({
    backgroundColor: 'lightblue',
    color: 'darkblue'
});