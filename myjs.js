var star = document.getElementById('star');
var snowman = document.getElementById('msnowman');
var path = document.getElementById('path');
var house = document.getElementById('house');
var door = document.getElementById('door');


var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');

house.addEventListener('click', function () {
    // This part takes you to page 2
    page1.style.display = 'none';

    if (page2.style.display == 'block') {
        page2.style.display = 'none';
    } else {
        page2.style.display = 'block';
    }

});

door.addEventListener('click', function () {

    page2.style.display = 'none';

    if (page1.style.display == 'block') {
        page1.style.display = 'none';
    } else {
        page1.style.display = 'block';
    }

});

snowman.addEventListener('click', function () {
    var snowmanfactcontainer = document.getElementById('snowmanfactcontainer');

    numClicks++;

    snowmanfactcontainer.innerHTML = 'Ethiopia has 13 months. They celebrate New Years on September 11.';
    console.log('displayed fact');
    snowmanfactcontainer.style.padding = '10px';

    if (snowmanfactcontainer.style.display == 'block') {
        snowmanfactcontainer.style.display = 'none';
    } else {
        snowmanfactcontainer.style.display = 'block';
    }

});

star.addEventListener('click', function () {
    var starfactcontainer = document.getElementById('starfactcontainer');
    numClicks++;
    starfactcontainer.innerHTML = 'In Korea and some other Asian countries, when you are born, you are considered one year old and everyone’s age increases one year on New Year’s. So if you were born on December 29th, on New Year’s day, you will be considered 2 years old.';
    console.log('displayed fact');
    starfactcontainer.style.padding = '10px';

    if (starfactcontainer.style.display == 'block') {
        starfactcontainer.style.display = 'none';
    } else {
        starfactcontainer.style.display = 'block';
    }

});

path.addEventListener('click', function () {
    var pathfactcontainer = document.getElementById('pathfactcontainer');

    numClicks++;

    pathfactcontainer.innerHTML = 'Some people wear adult diapers while celebrating New Year at Time Square due to the lack of toilets..';
    console.log('displayed fact');
    pathfactcontainer.style.padding = '10px';

    if (pathfactcontainer.style.display == 'block') {
        pathfactcontainer.style.display = 'none';
    } else {
        pathfactcontainer.style.display = 'block';
    }

});

// INSIDE THE GINGERBREAD HOUSE

var gbman = document.getElementById('gbman');
var housewindow = document.getElementById('housewindow');
;

var rightarrow = document.getElementById('rightarrow');
var numClicks = 0;

gbman.addEventListener('click', function () {
    var gbmanfactcontainer = document.getElementById('gbmanfactcontainer');
    numClicks++;

    gbmanfactcontainer.innerHTML = 'The ancient Hawaiian New Year was four months long, war was forbidden, people stopped working, and the people spent time dancing, feasting and having a good time.';
    console.log('displayed fact');
    gbmanfactcontainer.style.padding = '10px';


    if (gbmanfactcontainer.style.display == 'block') {
        gbmanfactcontainer.style.display = 'none';
    } else {
        gbmanfactcontainer.style.display = 'block';
    }

});

housewindow.addEventListener('click', function () {
    var housewindowfactcontainer = document.getElementById('housewindowfactcontainer');
    console.log('clicked the window');

    numClicks++;

    housewindowfactcontainer.innerHTML = 'Spanish tradition is to eat 12 grapes at midnight of 31st December. While eating these grapes, Spaniards will make wishes. This tradition is believed to bring good luck for those who practice it. This grape eating tradition started back in 1895..';
    console.log('displayed window fact');
    housewindowfactcontainer.style.padding = '10px';

    if (housewindowfactcontainer.style.display == 'block') {
        housewindowfactcontainer.style.display = 'none';
    } else {
        housewindowfactcontainer.style.display = 'block';
    }

});


gift.addEventListener('click', function () {
    var gift = document.getElementById('gift');

    numClicks++;

    giftfactcontainer.innerHTML = '2,000 pounds (907kg) of confetti are dropped on the crowd in Times Square at midnight';
    giftfactcontainer.style.padding = '10px';

    if (giftfactcontainer.style.display == 'block') {
        giftfactcontainer.style.display = 'none';
    } else {
        giftfactcontainer.style.display = 'block';
    }

});


var tree = document.getElementById('tree');
var present1 = document.getElementById('present1');
var present2 = document.getElementById('present2');
var present3 = document.getElementById('present3');
present1.addEventListener('click', function () {
    var present1factcontainer = document.getElementById('present1factcontainer');
    console.log('present 1 clicked');

    numClicks++;

    present1factcontainer.innerHTML = 'Lobster and chicken are considered bad luck because lobsters can move backward and chickens can scratch in reverse, so it is thought these foods could bring a reversal of fortune..';
    console.log('displayed fact');
    present1factcontainer.style.padding = '10px';

    if (present1factcontainer.style.display == 'block') {
        present1factcontainer.style.display = 'none';
    } else {
        present1factcontainer.style.display = 'block';
    }

});

present2.addEventListener('click', function () {
    var present2factcontainer = document.getElementById('present2factcontainer');
    console.log('present 2 clicked');

    numClicks++;

    present2factcontainer.innerHTML = 'Ukrainians celebrate the New Year twice, once on January 1st and then again on January 14th.';
    console.log('displayed fact');
    present2factcontainer.style.padding = '10px';

    if (present2factcontainer.style.display == 'block') {
        present2factcontainer.style.display = 'none';
    } else {
        present2factcontainer.style.display = 'block';
    }

});

present3.addEventListener('click', function () {
    var present3factcontainer = document.getElementById('present3factcontainer');
    console.log('present 2 clicked');

    numClicks++;

    present3factcontainer.innerHTML = 'The song traditionally sung on New Year’s, “Auld Lang Syne,” means “times gone by”.';
    console.log('displayed fact');
    present3factcontainer.style.padding = '10px';

    if (present3factcontainer.style.display == 'block') {
        present3factcontainer.style.display = 'none';
    } else {
        present3factcontainer.style.display = 'block';
    }

});






