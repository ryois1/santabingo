let col_1_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let col_2_numbers = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let col_3_numbers = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
let col_4_numbers = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
let col_5_numbers = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
let columns = ['1', '2', '3', '4', '5']
let covered_spots = ['col-3-row-3'];
let covered_numbers = [];

function call() {
    let result = randomNumber();
    covered_numbers.push(result[0]);
    $(`#${result[0]}`).addClass("called");
    if (result[1] == 1) {
        $("#callResult").html(`The number is S ${result[0]}.`);
    }
    if (result[1] == 2) {
        $("#callResult").html(`The number is A ${result[0]}.`);
    }
    if (result[1] == 3) {
        $("#callResult").html(`The number is N ${result[0]}.`);
    }
    if (result[1] == 4) {
        $("#callResult").html(`The number is T ${result[0]}.`);
    }
    if (result[1] == 5) {
        $("#callResult").html(`The number is A ${result[0]}.`);
    }
}

function randomNumber() {
    const randomRow = columns[Math.floor(Math.random() * columns.length)];
    if (randomRow == 1) {
        const randomNumber = col_1_numbers[Math.floor(Math.random() * col_1_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1) {
            covered_spots.push(randomNumber);
            col_1_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        } else {
            console.log("ROW 1: Number already picked");
            call();
        }
    }
    if (randomRow == 2) {
        const randomNumber = col_2_numbers[Math.floor(Math.random() * col_2_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1) {
            covered_spots.push(randomNumber);
            col_2_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        } else {
            console.log("ROW 2: Number already picked");
            call();
        }
    }
    if (randomRow == 3) {
        const randomNumber = col_3_numbers[Math.floor(Math.random() * col_3_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1) {
            covered_spots.push(randomNumber);
            col_3_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        } else {
            console.log("ROW 3: Number already picked");
            call();
        }
    }
    if (randomRow == 4) {
        const randomNumber = col_4_numbers[Math.floor(Math.random() * col_4_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1) {
            covered_spots.push(randomNumber);
            col_4_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        } else {
            console.log("ROW 4: Number already picked");
            call();
        }
    }
    if (randomRow == 5) {
        const randomNumber = col_5_numbers[Math.floor(Math.random() * col_5_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1) {
            covered_spots.push(randomNumber);
            col_5_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        } else {
            console.log("ROW 5: Number already picked");
            call();
        }
    }
}

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

window.onbeforeunload = function (event) {
    return confirm("Do you want to leave this page? This will lose your progress!");
};

function resetGame() {
    Swal.fire({
        title: `Are you sure you want to reset this game?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF4500',
        cancelButtonColor: '#00B32C',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })
}

function scanQR() {
    Swal.fire({
        title: 'Scan QR Code',
        html: '<div id="scanner" style="width:100%; height:100%;"></div>',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        didOpen: () => {
            scanQRCodeJS();
        },
        willClose: () => {
            jbScanner.stopScanning();
        }
    })
}

function onQRCodeScanned(scannedText) {
    console.log("QR Code Scanned: " + scannedText);
    Swal.close();
    // if you want to stop the scanner after the first successful scan, uncomment the next line
    jbScanner.stopScanning();
    //scannedText contains the text decoded from QR, find the bingo card spot and call it
    let isAWinner = false;
    let isValidNumber = [];
    scannedText.split(",").forEach(function (item) {
        console.log(item);
        console.log(covered_numbers)
        // Skip FREE
        if (item == "FREE") {
            console.log("FREE is a valid number")
            isValidNumber.push(true);
            return;
        }
        // Find item in covered_numbers
        if (covered_numbers.indexOf(parseInt(item)) !== -1) {
            console.log(`${item} is a valid number`)
            isValidNumber.push(true);
        } else {
            console.log(`${item} is not a valid number`)
            isValidNumber.push(false);
        }
    }
    );
    if (isValidNumber.indexOf(false) === -1) {
        isAWinner = true;
    }
    if (isAWinner) {
        popupClosed = false;
        Swal.fire({
            title: 'Bingo!',
            html: 'This person has a bingo.',
            icon: 'success'
        })
    } else {
        Swal.fire({
            title: 'Invalid QR Code!',
            html: 'This bingo card does not match the caller\'s card.',
            icon: 'error'
        })
    }
}
let jbScanner;
//this function will be called when JsQRScanner is ready to use
function scanQRCodeJS() {
    //create a new scanner passing to it a callback function that will be invoked when
    //the scanner succesfully scan a QR code
    jbScanner = new JsQRScanner(onQRCodeScanned);
    //reduce the size of analyzed images to increase performance on mobile devices
    jbScanner.setSnapImageMaxSize(300);
    var scannerParentElement = document.getElementById("scanner");
    if (scannerParentElement) {
        //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
    }
}