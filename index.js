function answer(el) {
    let inputElement = document.getElementById(el);
    if (inputElement.value === "yes")
    {
        alert("Corect");
        inputElement.style.border = "2px solid green";
    }
    else{
        alert("Incorrect");
        inputElement.style.border = "2px solid red";
    }
}