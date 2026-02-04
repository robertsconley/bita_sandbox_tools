function D(dice) {
    return Math.ceil(dice * Math.random());
}

function _1D6() {
	return D(6);
}

function _2D6() {
	return D(6) + D(6);
}

function _3D6() {
	return D(6) + D(6) + D(6);
}

function _4D6() {
	return D(6) + D(6) + D(6) + D(6);
}

function _5D6() {
	return D(6) + D(6) + D(6) + D(6) + D(6);
}

function _6D6() {
	return D(6) + D(6) + D(6) + D(6) + D(6) + D(6);
}

function _2D8() {
	return D(8) + D(8);
}

function _3D8() {
	return D(8) + D(8) + D(8);
}

function _2D12() {
	return D(12) + D(12);
}

function _1D10() {
	return D(10);
}

function _2D10() {
	return D(10) + D(10);
}

function _3D10() {
	return D(10) + D(10) + D(10);
}

function _1D20() {
	return D(20);
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function _1DF() {
    var roll = D(6);
    var result = 0;
    switch (roll) {
        case 1:
            return -1;
        case 2:
            return -1;
        case 3:
            return 0;
        case 4:
            return 0;
        case 5:
            return 1;
        case 6:
            return 1;
    }
}

function _4DF() {
    //return _1DF() + _1DF() + _1DF() + _1DF();
	//return D(6)-D(6);
	return D(6)+D(6);
	//return D(5)+D(5);
	//return D(3)+D(3)+D(3)+D(3);
}

function CopyContent() {
  var copyText = document.getElementById("contentcopyResult");
  copyText.value = document.getElementById("contentResult").innerHTML
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Result: " + copyText.value);

}

class StringBuilder {
	constructor(){
		this.stringresult = "";
	}
	
	Test() {
		this.stringresult = "Test Done";
		return;
	}
	
	Append(stringtext){
		this.stringresult = this.stringresult + stringtext;
	}

	AppendWithDelimiter(stringtext, delimiter){
		if (stringtext != "") {
			if (this.stringresult != "") this.stringresult = this.stringresult + delimiter;
			this.stringresult = this.stringresult + stringtext;
		}
	}
	
	ToString(){
		return this.stringresult;
	}
}

class RandomTable {
	constructor() {
		this.rEntries = [];
		this.nEntries = 0;
	}
	Add(value, loVal, hiVal){
		var tEntry = new RandomEntry(value, loVal, hiVal);
		this.rEntries.push(tEntry);
		this.nEntries++;
	}
	
	Push(value) {
		this.nEntries++;
		var tEntry = new RandomEntry(value,this.nEntries,this.nEntries);
		this.rEntries.push(tEntry);
	}
	
	Generate(Roll){
		var I = 0;
		var result = "";
		for (I = 0; I < this.nEntries; I++)
		{
			if (this.rEntries[I].IsBetween(Roll)) {
				result = this.rEntries[I].value;
			}
		}
		return result;
	}
	
	Pick() {
		var Roll = D(this.nEntries);
		var result = "";
		result = this.rEntries[Roll - 1].value;
		return result;
	}
	
}

class RandomEntry {
	constructor(value, loVal, hiVal) {
		this.value = value;
		this.loVal = loVal;
		this.hiVal = hiVal;
	}

	
	IsBetween(aValue){
		var result = false;
		if (aValue >= this.loVal) {
			if (aValue <= this.hiVal) {
				result = true;
			}
		}
		return result;
	}
}
