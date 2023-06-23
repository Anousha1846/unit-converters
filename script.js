// start of feet and inch

var feet = document.getElementById('inputFeet');
var inch = document.getElementById('inputInch');

feet.addEventListener('input',function(){
    var f = this.value;
    var i = f*12;
    inch.value = i
})

inch.addEventListener('input',function(){
    var i = this.value;
    var f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(3)
    };
    feet.value = f;
})
// end of feet and inch

// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C
//start of celcius and farehite and kelvin
var Celcius = document.getElementById('Celcius');
var farehite = document.getElementById('farehite');
var Kelvin = document.getElementById('Kelvin');

Celcius.addEventListener('input', function(){
    var c = this.value;
    var f = (c*9/5)+32;
    var k = c + 273;
    farehite .value = f;
    Kelvin .value = k;
    
})
// (32°F − 32) × 5/9 + 273.15 = 273.15K
farehite.addEventListener('input',function(){
    var f = this.value;
    var c = (f-32)*5/9;
    var k = (f-32)*5/9 + 273;
    if(!Number.isInteger(k)){
        k = k.toFixed(3);
        c = c.toFixed(3);

    }
    Celcius.value = c;
    Kelvin .value = k;

})
// (0K − 273.15) × 9/5 + 32 = -459.7°F
Kelvin.addEventListener('input',function(){
    var k = this.value;
    var c = k-273;
    var f = (k-273.15)* 9/5 + 32
    if(!Number.isInteger(c)){
        c = c.toFixed(3);
        f = f.toFixed(3);
    }
    Celcius.value = c;
    farehite .value = f;

})
//end of celcius, farenheit and kelvin

// start of pound and kilogram
var Pound = document.getElementById('Pound');
var Kilogram = document.getElementById('Kilogram');

Pound.addEventListener('input',function(){
    var p = this.value;
    var kg = p/2.2;
    Kilogram.value = kg;
})

Kilogram.addEventListener('input',function(){
    var kg = this.value;
    var p = kg*2.2;
    if(!Number.isInteger(p)){
        p = p.toFixed(3)
    }
    Pound.value = p;
})
// end of pound and kg

// start of milimeter centimeter and meter
var Millimeter  = document.getElementById('Millimeter');
var Centimeter = document.getElementById('Centimeter');
var Meter = document.getElementById('Meter');

Millimeter.addEventListener('input',function(){
    var mm = this.value;
    var cm = mm/1000;
    var m = cm/100;
    Centimeter.value = cm;
    Meter.value = m;
})

Centimeter.addEventListener('input',function(){
    var cm = this.value;
    var mm = cm*10;
    var m = cm/100;
    Millimeter .value = mm;
    Meter.value = m;
})
Meter.addEventListener('input',function(){
    var m = this.value;
    var mm = m/1000;
    var cm = m/100;
    Millimeter .value = mm;
    Centimeter.value = cm;
})

// end of milimeter centimeter and meter

// start of SECOND, MINUTE AND HOURS
var second  = document.getElementById('second');
var minute = document.getElementById('minute');
var hour = document.getElementById('hour');

second.addEventListener('input',function(){
    var sec = this.value;
    var min = sec/60;
    var hr = sec/3600;
    minute.value = min;
    hour.value = hr;
})
minute.addEventListener('input',function(){
    var min = this.value;
    var sec = min*60;
    var hr = min/60;
    second.value = sec;
    hour.value = hr;
})
hour.addEventListener('input',function(){
    var hr = this.value;
    var min = hr*60;
    var sec = hr*3600;
    minute.value = min;
    second.value = sec;
})



// end of SECOND, MINUTE AND HOURS