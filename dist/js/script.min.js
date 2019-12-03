let modifyText = () => {
    const text = document.getElementById("text");
    const regexpFirst = /\'\B|\B\'/g;
    const regexpSecond = /\"/g;
    if (regexpFirst.test(text.textContent) === true) {
         text.innerHTML = text.textContent.replace(regexpFirst, '"');
    } else {
         text.innerHTML = text.textContent.replace(regexpSecond, "'");
    }
};

let button = document.getElementById("magic");
button.addEventListener("click", modifyText);