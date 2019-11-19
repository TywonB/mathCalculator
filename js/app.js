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
