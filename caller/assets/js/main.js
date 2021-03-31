let col_1_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let col_2_numbers = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let col_3_numbers = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
let col_4_numbers = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
let col_5_numbers = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
let columns = ['1', '2', '3', '4', '5']
let covered_spots = ['col-3-row-3'];

function call(){
    let result = randomNumber();
    $(`#${result[0]}`).addClass("called");
    if(result[1] == 1){
        $("#callResult").html(`The number is S ${result[0]}.`);
    }
    if(result[1] == 2){
        $("#callResult").html(`The number is A ${result[0]}.`);
    }
    if(result[1] == 3){
        $("#callResult").html(`The number is N ${result[0]}.`);
    }
    if(result[1] == 4){
        $("#callResult").html(`The number is T ${result[0]}.`);
    }
    if(result[1] == 5){
        $("#callResult").html(`The number is A ${result[0]}.`);
    }
}

function randomNumber() {
    const randomRow = columns[Math.floor(Math.random() * columns.length)];
    if(randomRow == 1){
        const randomNumber = col_1_numbers[Math.floor(Math.random() * col_1_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1){
            covered_spots.push(randomNumber);
            col_1_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        }else{
            console.log("ROW 1: Number already picked");
            call();
        }
    }
    if(randomRow == 2){
        const randomNumber = col_2_numbers[Math.floor(Math.random() * col_2_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1){
            covered_spots.push(randomNumber);
            col_2_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        }else{
            console.log("ROW 2: Number already picked");
            call();
        }
    }
    if(randomRow == 3){
        const randomNumber = col_3_numbers[Math.floor(Math.random() * col_3_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1){
            covered_spots.push(randomNumber);
            col_3_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        }else{
            console.log("ROW 3: Number already picked");
            call();
        }
    }
    if(randomRow == 4){
        const randomNumber = col_4_numbers[Math.floor(Math.random() * col_4_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1){
            covered_spots.push(randomNumber);
            col_4_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        }else{
            console.log("ROW 4: Number already picked");
            call();
        }
    }
    if(randomRow == 5){
        const randomNumber = col_5_numbers[Math.floor(Math.random() * col_5_numbers.length)];
        if (covered_spots.indexOf(randomNumber) === -1){
            covered_spots.push(randomNumber);
            col_5_numbers.remove(randomNumber);
            return [randomNumber, randomRow, true];
        }else{
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

function resetGame(){
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