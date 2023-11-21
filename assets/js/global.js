function validateForm(inputs) {
    for (let val = 0; val < inputs.length; val++) {
        let input_value = $(inputs[val]).val().trim();

        if (input_value === "") {
            $(inputs[val]).addClass("border-red");
        } else {
            $(inputs[val]).removeClass("border-red");
        }
    }
}