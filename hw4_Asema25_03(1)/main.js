function displayPeople(people) {
    const peopleList = document.getElementById('people-list');
    people.forEach(person => {
        const listItem = document.createElement('li');
        listItem.textContent = person.name;
        peopleList.appendChild(listItem);
    });
}
// Выполнение запроса
fetch('people.json')
    .then(response => response.json())
    .then(data => {
        displayPeople(data);
    })
    .catch(error => {
        console.log('Произошла ошибка:', error);
    });
