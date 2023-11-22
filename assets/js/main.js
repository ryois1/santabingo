const col_1_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const col_2_numbers = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const col_3_numbers = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const col_4_numbers = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const col_5_numbers = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
const free_spot = "col-3-row-3";

var covered_spots = ['col-3-row-3'];
var winners = [
    ['col-1-row-1', 'col-1-row-2', 'col-1-row-3', 'col-1-row-4', 'col-1-row-5'],
    ['col-2-row-1', 'col-2-row-2', 'col-2-row-3', 'col-2-row-4', 'col-2-row-5'],
    ['col-3-row-1', 'col-3-row-2', 'col-3-row-3', 'col-3-row-4', 'col-3-row-5'],
    ['col-4-row-1', 'col-4-row-2', 'col-4-row-3', 'col-4-row-4', 'col-4-row-5'],
    ['col-5-row-1', 'col-5-row-2', 'col-5-row-3', 'col-5-row-4', 'col-5-row-5'],
    ['col-1-row-1', 'col-2-row-1', 'col-3-row-1', 'col-4-row-1', 'col-5-row-1'],
    ['col-1-row-2', 'col-2-row-2', 'col-3-row-2', 'col-4-row-2', 'col-5-row-2'],
    ['col-1-row-3', 'col-2-row-3', 'col-3-row-3', 'col-4-row-3', 'col-5-row-3'],
    ['col-1-row-4', 'col-2-row-4', 'col-3-row-4', 'col-4-row-4', 'col-5-row-4'],
    ['col-1-row-5', 'col-2-row-5', 'col-3-row-5', 'col-4-row-5', 'col-5-row-5'],
    ['col-1-row-1', 'col-2-row-2', 'col-3-row-3', 'col-4-row-4', 'col-5-row-5'],
    ['col-1-row-5', 'col-2-row-4', 'col-3-row-3', 'col-4-row-2', 'col-5-row-1']
];
var possibleWinners = winners.length;

function setupCard(card_id) {
    console.log(`Setting up bingo card for ID: ${card_id}`);
    console.log('Selecing random numbers');
    // Select Random Numbers
    var col_1_random = shuffleNumbers(col_1_numbers).slice(0, 5);
    var col_2_random = shuffleNumbers(col_2_numbers).slice(0, 5);
    var col_3_random = shuffleNumbers(col_3_numbers).slice(0, 5);
    var col_4_random = shuffleNumbers(col_4_numbers).slice(0, 5);
    var col_5_random = shuffleNumbers(col_5_numbers).slice(0, 5);
    // Print those numbers
    console.log(`S Col Numbers: ${col_1_random}`);
    console.log(`First A Col Numbers: ${col_2_random}`);
    console.log(`N Col Numbers: ${col_3_random}`);
    console.log(`T Col Numbers: ${col_4_random}`);
    console.log(`Second A Col Numbers: ${col_5_random}`);
    // Insert into S col
    $("#col-1-row-1").html(col_1_random[0]).attr('data-value', col_1_random[0]);
    $("#col-1-row-2").html(col_1_random[1]).attr('data-value', col_1_random[1]);
    $("#col-1-row-3").html(col_1_random[2]).attr('data-value', col_1_random[2]);
    $("#col-1-row-4").html(col_1_random[3]).attr('data-value', col_1_random[3]);
    $("#col-1-row-5").html(col_1_random[4]).attr('data-value', col_1_random[4]);
    // Insert into first A col
    $("#col-2-row-1").html(col_2_random[0]).attr('data-value', col_2_random[0]);
    $("#col-2-row-2").html(col_2_random[1]).attr('data-value', col_2_random[1]);
    $("#col-2-row-3").html(col_2_random[2]).attr('data-value', col_2_random[2]);
    $("#col-2-row-4").html(col_2_random[3]).attr('data-value', col_2_random[3]);
    $("#col-2-row-5").html(col_2_random[4]).attr('data-value', col_2_random[4]);
    // Insert into N col
    $("#col-3-row-1").html(col_3_random[0]).attr('data-value', col_3_random[0]);
    $("#col-3-row-2").html(col_3_random[1]).attr('data-value', col_3_random[1]);
    $("#col-3-row-3").html("X").attr('data-value', "FREE");
    $("#col-3-row-4").html(col_3_random[3]).attr('data-value', col_3_random[3]);
    $("#col-3-row-5").html(col_3_random[4]).attr('data-value', col_3_random[4]);
    // Insert into T col
    $("#col-4-row-1").html(col_4_random[0]).attr('data-value', col_4_random[0]);
    $("#col-4-row-2").html(col_4_random[1]).attr('data-value', col_4_random[1]);
    $("#col-4-row-3").html(col_4_random[2]).attr('data-value', col_4_random[2]);
    $("#col-4-row-4").html(col_4_random[3]).attr('data-value', col_4_random[3]);
    $("#col-4-row-5").html(col_4_random[4]).attr('data-value', col_4_random[4]);
    // Insert into second A col
    $("#col-5-row-1").html(col_5_random[0]).attr('data-value', col_5_random[0]);
    $("#col-5-row-2").html(col_5_random[1]).attr('data-value', col_5_random[1]);
    $("#col-5-row-3").html(col_5_random[2]).attr('data-value', col_5_random[2]);
    $("#col-5-row-4").html(col_5_random[3]).attr('data-value', col_5_random[3]);
    $("#col-5-row-5").html(col_5_random[4]).attr('data-value', col_5_random[4]);
}

function shuffleNumbers(number_array) {
    for (var j, x, index = number_array.length; index; j = parseInt(Math.random() * index), x = number_array[--index], number_array[index] = number_array[j], number_array[j] = x);
    return number_array;
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

function coverSpot(div) {
    if ($(`#${div}`).hasClass("overlay")) {
        let value = $(`#${div}`).attr("data-value");
        Swal.fire({
            title: `Are you sure you want to uncover the spot, ${value}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF4500',
            cancelButtonColor: '#00B32C',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                covered_spots.remove(`${div}`);
                $(`#${div}`).removeClass("overlay");
                console.log(`Uncovered div: ${div} with value: ${value}`);
            }
        })
    } else {
        $(`#${div}`).addClass("overlay");
        let value = $(`#${div}`).attr("data-value");
        console.log(`Covered up div: ${div} with value: ${value}`);
        let winning_numbers = [];
        if (covered_spots.indexOf(value) === -1) covered_spots.push(div);
        for (var i = 0; i < possibleWinners; i++) {
            var cellExists = 0;
            winning_numbers = [];
            for (var j = 0; j < 5; j++) {
                if ($.inArray(winners[i][j], covered_spots) > -1) {
                    cellExists++;
                    // Get number from div
                    let value = $(`#${winners[i][j]}`).attr("data-value");
                    // Add to winning numbers array
                    winning_numbers.push(value);
                }
            }
            if (cellExists == 5) {
                // Get the 5 winning numbers
                console.log(`Winning Numbers: ${winning_numbers}`);
                Swal.fire({
                    title: 'Bingo!',
                    html: 'You have a bingo, show this QR code to the caller. <br><div id="qrcode"></div>',
                    icon: 'info'
                })
                const covered_numbers = covered_spots.map(function (x) {
                    return $(`#${x}`).attr("data-value");
                });
                new QRCode(document.getElementById("qrcode"), winning_numbers.join(","));
            }
        }
    }
}

$(document).ready(function () {
    setupCard("bingo_card");
    randomBackground();
});

window.onbeforeunload = function () {
    return confirm("Do you want to leave this page? This will lose your progress!");
};

function resetCard(card_id){
    Swal.fire({
        title: `Are you sure you want to reset your bingo card?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF4500',
        cancelButtonColor: '#00B32C',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            setupCard(card_id);
            covered_spots = [];
            covered_spots = ['col-3-row-3'];
            $(".col").removeClass("overlay");
            console.log("Reset bingo card!");
            console.log(`Covered Spots: ${covered_spots}`);
        }
    })
}

function randomBackground(){
    const width = window.innerWidth * window.devicePixelRatio;
    const height = window.innerHeight * window.devicePixelRatio;
    $(".background-image").css("background-image", `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 100%), url('https://source.unsplash.com/random/${width}x${height}/?christmas')`);
}