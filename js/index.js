function calcTexiFee() {
    var distance = document.getElementById('txtDistance').value;
    var waitingTime = document.getElementById('txtWaitingTime').value;
    var uberType;
    var uberXRadio = document.getElementById('uberX');
    var uberSUVRadio = document.getElementById('uberSUV');
    var uberBlackRadio = document.getElementById('uberBlack');
    var fistKm = 0;
    var secondKm = 0;
    var thirdkm = 0;
    var monTime = 0;
    var sum = 0;
    if (uberXRadio.checked) {
        uberType = 'uberX';
        fistKm = 8000;
        secondKm = 12000;
        thirdkm = 10000;
        monTime = 2000;
    } else if (uberSUVRadio.checked) {
        uberType = 'uberSUV';
        fistKm = 9000;
        secondKm = 14000;
        thirdkm = 12000;
        monTime = 3000;
    } else if (uberBlackRadio.checked) {
        uberType = 'uberBlack';
        fistKm = 10000;
        secondKm = 16000;
        thirdkm = 14000;
        monTime = 4000;
    } else {
        alert('Please check Type Of Uber!');
        return false;
    }
    if (distance > 20) {
        sum = fistKm + 19 * secondKm + (distance - 20) * thirdkm + monTime * waitingTime;
    } else if (distance > 1) {
        sum = fistKm + (distance - 1) * secondKm;

    } else {
        sum = fistKm * distance;
    }
    alert("Sum of Taxi Fee: " + sum);

}