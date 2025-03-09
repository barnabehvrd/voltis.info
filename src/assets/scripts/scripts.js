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

(() => {
    particlesJS('particles-js', {
        "particles": {
            "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#8A4FFF"},
            "shape": {"type": "circle"},
            "opacity": {"value": 0.35, "random": false},
            "size": {"value": 3, "random": true},
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8A4FFF",
                "opacity": 0.25,
                "width": 1.25
            },
            "move": {"enable": true, "speed": 0.175, "direction": "top", "random": true}
        }
    });
})();