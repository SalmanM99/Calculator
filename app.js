function getValue(num){
    var getNumber = document.getElementById("getNumber");
    getNumber.value += num;
}

function clearAll(){
    var getNumber = document.getElementById("getNumber");
    getNumber.value = "";
}

function getResult(){
    var getNumber = document.getElementById("getNumber");
    getNumber.value = eval(getNumber.value);
}
function sqrNum(){
    var getNumber = document.getElementById("getNumber");
    getNumber.value = Math.pow(getNumber.value,2);
}
function clearOne(){
    var getNumber = document.getElementById("getNumber").value;
    document.getElementById("getNumber").value = getNumber.substr(0, getNumber.length - 1);

}
