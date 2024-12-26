console.log('js file connected!');

const addToLocalStorage = () => {

    let idField = document.getElementById('storage-id')
    let id = idField.value

    const valueField = document.getElementById('storage-value')
    const value = valueField.value

    if (id && value) {
        localStorage.setItem(id, value)
    }
    idField.value = ''
    valueField.value = ''


}