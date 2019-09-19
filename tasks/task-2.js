let obj = parseUrl("http://ffwagency.com/do/any.php?a=1#foo");

function parseUrl(href) {
    let location = document.createElement("a");
    location.href = href;
    return location;
}

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);