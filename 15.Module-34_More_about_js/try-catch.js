// console.log('Hello World!');


function checkAge() {

    const ageField = document.getElementById('age')
    const ageValue = ageField.value;
    const errorTag = document.getElementById('error')

    try {
        // console.log(abcd);

        const age = parseInt(ageValue)

        if (isNaN(age)) {
            // console.log('Enter valid age!', age, ageValue);
            throw 'Plz enter a number!!!'
        }

        else if (age < 18){
            throw 'Baby boy not allow!'
        }
        errorTag.innerText = ''

    } catch (error) {
        console.log('Error!', error);
        // errorTag.innerText = 'Something is WRONG!!!'

        errorTag.innerText = 'Error: ' + error

    }

    finally {
        console.log('All Done inside try catch!!!!');

    }
    console.log(2333);
}
