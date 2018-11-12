document.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById('home').classList.toggle('page');

    let sendBtn = document.getElementById('btnSend');
    let backBtn = document.getElementById('btnBack');

    sendBtn.addEventListener('click', function () {
        document.getElementById('home').classList.toggle('page');
        document.getElementById('list').classList.toggle('page');

        let formData = new FormData();
        let options = {
            mode: 'cors',
            method: 'post',
            body: formData
        };
        let url = 'https://davidst.edumedia.ca/mad9014/nums.php?';

        formData.append('digits', document.getElementById('digits').value);
        formData.append('max', document.getElementById('max').value);


        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let numbers = data.numbers.join(", ");
                return numbers;
            })
            .then(function (data) {
                let myli = document.querySelector('li');
                myli.textContent = data;
                return data;

            })


    });

    backBtn.addEventListener('click', function () {
        document.getElementById('home').classList.toggle('page');
        document.getElementById('list').classList.toggle('page');
    });

}
