function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
        var x = new Date()
var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
hours = x.getHours( ) % 12;
hours = hours ? hours : 12;
hours=hours.toString().length==1? 0+hours.toString() : hours;

var minutes=x.getMinutes().toString()
minutes=minutes.length==1 ? 0+minutes : minutes;

var seconds=x.getSeconds().toString()
seconds=seconds.length==1 ? 0+seconds : seconds;

var monthArr = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Nov","Dec"]
var month=(x.getMonth() +1).toString();
month=month.length==1 ? 0+month : month;
month = monthArr[month-1];
var dt=x.getDate().toString();
dt=dt.length==1 ? 0+dt : dt;

var x1= dt + " " + month  + " " + x.getFullYear(); 
x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
document.getElementById('ct').innerHTML = x1;
display_c();
    }
    display_ct();