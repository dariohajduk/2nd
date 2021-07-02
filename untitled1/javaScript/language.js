function languageSection (form) {
    let newIndex = form.language.selectedIndex;
    let lang;
    if (newIndex === 0) {
        alert("Please Select Your Language!");
    } else {
        lang = form.language.options[newIndex].value;
        window.location.assign(lang);

    }
}