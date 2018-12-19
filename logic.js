const lock = {
    key: '',
    guess: []
}

function set(code) {
    console.log("The new code is set!")
    code = Math.floor(Math.random()*899+100);
    return lock.key = code.toString();
}

const chk = function(crack) {
    this.crack = crack;
    lock.guess = crack.toString();
    console.log(lock.guess);
}
