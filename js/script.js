let radioButton = document.querySelectorAll(".radio-btn");

radioButton.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let target = event.target;
        console.log(target);
        let parent = target.closest('.fontsItem');
        console.log(parent);
        if (target.checked) {
            parent.classList.add('fontsItem_active');
            checkRadioBtn();
        }
    });

});

function checkRadioBtn() {
    radioButton.forEach(function (item) {
        if (!item.checked) {
            item.closest('.fontsItem').classList.remove('fontsItem_active');
        }
    })
}

