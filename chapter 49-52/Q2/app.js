
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');

let flag = true;

span1.addEventListener('click', () => {
    if (flag) {
        span2.style.display = 'inline';
        span1.textContent = 'see less';
        span1.style.color = 'blue';
        flag = false;
    }
    else {
        span2.style.display = 'none';
        span1.textContent = '...';
        span1.style.color = 'black';
        flag = true;
    }
})