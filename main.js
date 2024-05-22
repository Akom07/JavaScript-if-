let musicians = 0
if (musicians <= 0){
console.log("not a group");
} else if (musicians == 1)
    {
    console.log("solo");

} else if (musicians == 2){
    console.log("duet");

} else if (musicians==3)
    {
    console.log("trio");

} else if (musicians==4){
    console.log("quartet");

} else if (musicians>=5){
    console.log("this is a large group");

}
//-------------------------------------
let room = 'ballroom'
let suspect = "Mr.Parkes"
let weapon = "poison"
let solved = false

if(solved==true&&room=="ballroom"&& suspect=="Mr.Parkes"&&weapon=="poison" ){
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else if(solved==true&&room=="gallery"&& suspect=="Ms. Van Cleve"&&weapon=="trophy" ){
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else if(solved==true&&room=="billiards"&& suspect=="Mrs. Sparr"&&weapon=="pool stick" ){
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else if(solved==true&&room=="dining"&& suspect=="Mr. Kalehoff"&&weapon=="knife " ){
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}



