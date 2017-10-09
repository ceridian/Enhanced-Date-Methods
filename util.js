Date.prototype.getFullMinutes = function () {  // if min single diget add a 0
	if (this.getMinutes() < 10) {
		return '0' + this.getMinutes();
	}
	return this.getMinutes();
};
Date.prototype.getFullMonth = function(){  // if month single diget add a 0
	if (this.getMonth() < 9) {
		return '0' + (1 + this.getMonth());
	}
	return 1 + this.getMonth();
};
Date.prototype.getFullHours = function(){  // if hour single diget add a 0
	if (this.getHours() < 10) {
		return '0' + this.getHours();
	}
	return this.getHours();
};
Date.prototype.getFullDate = function(){  // if date single diget add a 0
	if (this.getDate() < 10) {
		return '0' + this.getDate();
	}
	return this.getDate();
};
Date.prototype.dateStamp = function() {  // outputs a string timestamp of a date  // yyyy-mm-dd hh:mm
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	var h = this.getFullHours().toString();
    var m = this.getFullMinutes().toString();
    return yyyy+'-'+mm+'-'+dd+' '+h+':'+m;
	// example: 2016-01-15 14:03
};
Date.prototype.dateStampFS = function(){
    var stamp = this.dateStamp().toString();
    var ret = stamp.replace(/\s+/g, '_');
    var r = ret.replace(/\:/g, '');
    return r;
    //file name friendly
    // example: 2016-1-15_1403
};
Date.prototype.getPreviousDate = function(i){ // get day -i days ago
	return new Date(new Date().setDate(new Date().getDate()-i));
};
Date.prototype.isBetween = function(s, e, d){
    var start = new Date(s);
    var end = new Date(e);
    var date = new Date(d);
    if(date >= start){
        if(date <= end){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
