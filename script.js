const currDate=new Date( );
let currYear=currDate.getFullYear();
let currMonth=currDate.getMonth();
var currDay=currDate.getDate();
var provideDate=document.getElementById("date-data");
provideDate.max=new Date().toISOString().split("T")[0];

document.getElementById("cal-but").addEventListener("click",()=>{
    
    console.log(provideDate.value);
    console.log(currDay);
    if(provideDate.value==" "){
        alert("Chosse DOB!");
    }
    else{
        
        calculateAgeDifference(provideDate);
    }
})
function calculateAgeDifference(provideDate){
    var dateAgeDiff;
    
    let p=new Date(provideDate.value);
    
     let provideYear=p.getFullYear();
    
    let provideMonth=p.getMonth();
    let provideDay=p.getDate();
    //year difference

    let yearAgeDiff = currYear - provideYear;
    
    //month difference
    let monthAgeDiff;
    if(currMonth >= provideMonth){
        monthAgeDiff = currMonth - provideMonth;
    }
    else{
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - provideMonth;
    }

    //days difference
    
    if(currDay>=provideDay){
        dateAgeDiff = currDay - provideDay;
    }
    else{
        monthAgeDiff--;
        var noOfDaysInDOB = daysInMonth(provideMonth,provideYear);
        console.log(noOfDaysInDOB+" + "+currDay+" - "+provideDay);
        dateAgeDiff = noOfDaysInDOB + currDay - provideDay;
        console.log("else"+noOfDaysInDOB +dateAgeDiff);
        //case when monthAgeDiff goes negative
        if(monthAgeDiff<0){
            console.log(negative);
            monthAgeDiff=11;
            yearAgeDiff--;
        }
        
    }
    //console.log("ddassf"+dateAgeDiff);
    document.getElementById("year-data").innerHTML=yearAgeDiff;
        document.getElementById("month-data").innerHTML=monthAgeDiff;
        document.getElementById("day-data").innerHTML=dateAgeDiff;
        //alert("next!");

}
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}