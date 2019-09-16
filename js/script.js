window.addEventListener('DOMContentLoaded', function () {
    let radioButton = document.querySelectorAll(".radio-btn");

    radioButton.forEach(function (item) {
        item.addEventListener('click', function (event) {
            let target = event.target;
            let parent = target.closest('.fontsItem');
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

    let tab = document.querySelectorAll('.tabsItem'),
        tabBlock = document.querySelector('.tabs'),
        tabContent = document.querySelectorAll('.tab-content');

    function hideTabContent(a) {
        for (let i = a, endI = tabContent.length; i < endI; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tabContent[b].classList.add('fade');
        }
    }

    function clearActive() {
        tab.forEach(function (item) {
            item.classList.remove('tabsItem_active');
        })
    }

    tabBlock.addEventListener('click', function (event) {
        clearActive();
        let target = event.target;
        target.classList.add('tabsItem_active');
        if (target && target.classList.contains('tabsItem')) {
            for (let i = 0, endI = tab.length; i < endI; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    })
});



