document.addEventListener("keyup", function () {
    
    let keycode = event.keyCode;
    if (keycode >= 96 && keycode <= 105 || keycode >= 48 && keycode <= 57) {
        self.insert(event.key);
    }
    if ([111, 106, 109, 107, 13].includes(keycode)) {
        if(keycode == 13) {
            equal();
        } else {
        self.insert(event.key, 'keyOperator');
        }
    }
    if (keycode == 8) {
        back();
    }
    console.log(event);
});

function insert(num) {
    document.form.numberDisplay.value = document.form.numberDisplay.value+num;
}

function allClear() {
    document.form.numberDisplay.value = ""
}

function back() {
    var value = document.form.numberDisplay.value;
    document.form.numberDisplay.value = value.substr(0, value.length - 1);
}

function equal() {
    var value = document.form.numberDisplay.value
    if (value) {
        document.form.numberDisplay.value = eval(value)
    }
}

// event listeners and coding out the logic of the calculator