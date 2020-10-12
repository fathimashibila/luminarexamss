dob_date=Number(prompt("enter the dob date="))
dob_month=Number(prompt("enter the dob month="))
dob_year=Number(prompt("enter the dob year="))
current_date=Number(prompt("enter the current date="))
current_month=Number(prompt("enter the current month="))
current_year=Number(prompt("enter the current year="))

year=current_year-dob_year
month=current_month-dob_month
if(year==0){
    console.log("Age="+ month+ "months")}
else if ((year==1) && (dob_month!=current_month) ){
    console.log("Age="+ month+ "months")}
else{
    console.log("Age="+year)}