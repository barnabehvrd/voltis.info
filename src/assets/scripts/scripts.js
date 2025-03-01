(() => {
    const birthDate = new Date('2005-08-04');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('age').innerText = age;
})();

(() => {
    const today = new Date();

    document.getElementById('currYear').innerText = today.getFullYear();
})();

