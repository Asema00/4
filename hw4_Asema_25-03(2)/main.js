const xhr = new XMLHttpRequest();
xhr.open("GET", "people.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
xhr.send();