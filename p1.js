let ran_number = Math.floor(Math.random() * 100) + 1;
const guessess = document.querySelector('.guesses');
const lastR = document.querySelector('.last_result');
const loworhi = document.querySelector('.loworhi');
const guessInput = document.querySelector('.in');
const submitbutton = document.querySelector('.but');
let guess_count = 1;
let reset_button;

function checkguess() {
    // alert("bhai pahucha hu");
    let user_guess = Number(guessInput.value);
    if (guess_count === 1) {
        guessess.textContent = 'Previous guesses: ';
    }
    guessess.textContent = `${guessess.textContent} ${user_guess}`;
    guessess.style.backgroundColor='pink';
    if (user_guess === ran_number) {
        lastR.textContent = "Yuhhhu.... You won!";
        lastR.style.backgroundColor = 'green';
        loworhi.textContent = '';
        getover();
    } else if (guess_count === 5) {
        alert('result was'+ran_number);
        lastR.textContent = "!!! Game Over !!!";
        lastR.style.backgroundColor = 'red';
        loworhi.textContent = '';
        getover();
    } else {
        lastR.textContent = 'Wrong!';
        lastR.style.backgroundColor = 'red';
        if (user_guess > ran_number) {
            loworhi.textContent = "Your guess was higher than the number!";
        } else {
            loworhi.textContent = "Your guess was lower than the number!";
        }
    }
    guess_count++;
    guessInput.value = '';
    guessInput.focus();
}

submitbutton.addEventListener('click', checkguess);

function getover() {
    guessInput.disabled = true;
    submitbutton.disabled = true;
    reset_button = document.createElement('button');
    reset_button.textContent = 'Restart Game';
    reset_button.style.borderRadius='5px';
    document.body.appendChild(reset_button);
    // reset_button.style.backgroundColor='pink';
    reset_button.style.textColor='white';
    reset_button.addEventListener('click', reset);
}

function reset() {
    guess_count = 1;
    const resetpara = document.querySelectorAll('.nichhe p');
    resetpara.forEach((para) => {
        para.textContent = '';
    });
    reset_button.parentNode.removeChild(reset_button);
    guessInput.disabled = false;
    submitbutton.disabled = false;
    guessInput.focus();
    lastR.style.backgroundColor = 'white';
    loworhi.textContent = '';
    ran_number = Math.floor(Math.random() * 100) + 1;
}
