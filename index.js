
//check to make sure program runs
console.log('Hello World')

//Set a var to saved values, as a string.
let cookiesStored = localStorage.getItem('savedCookies') || 0;
let clickStrengthStored = localStorage.getItem('savedClickStrength') || 1;
let costOfUpgrade1Stored = localStorage.getItem('savedCostOfUpgrade1') || 50;
let costOfCpsUpgrade1Stored = localStorage.getItem('savedCostOfCpsUpgrade1') || 50;
let CPSStored = localStorage.getItem('savedCPS') || 0;
//Convert from sting to number
let cookiesNum = parseInt(cookiesStored, 10);
let clickStrengthNum = parseInt(clickStrengthStored, 10);
let costOfUpgrade1Num = parseInt(costOfUpgrade1Stored, 10);
let costOfCpsUpgrade1Num = parseInt(costOfCpsUpgrade1Stored, 10);
let CPSNum = parseInt(CPSStored, 10);
//Set variables to stored value
let cookies = cookiesNum;
let clickStrength = clickStrengthNum;
let costOfUpgrade1 = costOfUpgrade1Num;
let costOfCpsUpgrade1 = costOfCpsUpgrade1Num;
let CPS = CPSNum
reload()
function save() {
    localStorage.setItem('savedCookies', cookies);
    localStorage.setItem('savedClickStrength', clickStrength)
    localStorage.setItem('savedCostOfUpgrade1', costOfUpgrade1);
    localStorage.setItem('savedCostOfCpsUpgrade1', costOfCpsUpgrade1);
    localStorage.setItem('savedCPS', CPS);
}
function reload(){
    document.getElementById("cookieCount").innerHTML = cookies;
    document.getElementById("clickUpgrade1").innerHTML = costOfUpgrade1 + " cookies";
    document.getElementById("cpsUpgrade1").innerHTML = costOfCpsUpgrade1 + " cookies";
}
function done() {
    reload();
    save();
}
function cookieClicked () {
    cookies += clickStrength
    done();
}
function clickUpgrade1 (num) {
    if (cookies >= num) {
        cookies -= num;
        clickStrength ++;
        costOfUpgrade1 *= 2;
        done();
    }
}
function cpsUpgrade1 (num) {
    if (cookies >= num) {
        cookies -= num;
        CPS ++;
        costOfCpsUpgrade1 *= 2;
        done();
    }

}
function autoClick() {
    cookies += CPS
    done();
}
function resetAndClearData() {
    cookies = 0;
    clickStrength = 1;
    costOfUpgrade1 = 50;
    costOfCpsUpgrade1 = 50;
    CPS = 0;
    localStorage.clear()
}
//add __ coookies per seccond
const intervalID = setInterval(autoClick, 1000);

