// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const header = document.getElementById("header")

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        } else if (styles.contains('reset')){
            count = 0;
        } else if (styles.contains('increase')){
            count++;
        }
        if (count < 0){
            header.style.color = "red";
            value.style.color = "red";
        } else if (count > 0){
            header.style.color = "green";
            value.style.color = "green";
        } else {
            header.style.color = "blue";
            value.style.color = "blue";
        }
        value.textContent = count;
    });
});