function SetCookie(name, value, daysToLive) {
    let cookie = name + "=" + encodeURIComponent(value);

    if (typeof daysToLive === "number") {

        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);

        document.cookie = cookie;
    }
}

function DefCookies() {
    let username = document.details.username.value;
    let password = document.details.password.value;
    let firstName = document.details.firstName.value;
    let lastName = document.details.lastName.value;
    let cell = document.details.cell.value;
    let city = document.details.city.value;
    let street = document.details.street.value;
    let apart = document.details.apart.value;
    SetCookie("apart", apart, 5);
    SetCookie("username", username, 5);
    SetCookie("password", password, 5);
    SetCookie("first name", firstName, 5);
    SetCookie("last name", lastName, 5);
    SetCookie("phone number", cell, 5);
    SetCookie("city", city, 5);
    SetCookie("street", street, 5);

}
function DeleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    location.reload()
}

function getCookie(name) {
    let name1 = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name1) === 0) {
            return c.substring(name1.length, c.length);
        }
    }
    return "";
}