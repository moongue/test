let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.responseType = 'json';
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();


request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
        let data = request.response;
        console.log(data[0].name);
        showUser(data);
    }
});


function showUser(list) {
    for (let i = 0, endI = list.length; i < endI; i++) {
        let user = document.createElement('div'),
            userName = document.createElement('h3'),
            userEmail = document.createElement('div');

        userName.classList.add('user__name');
        userEmail.classList.add('user__email');
        user.classList.add('user');

        userName.textContent = list[i].name;
        userEmail.textContent = list[i].email;

        document.body.appendChild(user);
        user.appendChild(userName);
        user.appendChild(userEmail);
    }
}