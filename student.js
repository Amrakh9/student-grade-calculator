function getmarks() {
    var maths = Number(document.getElementById("maths").value);
    var english = Number(document.getElementById("english").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);

    var totalMarks = 400;
    var grade = ""
    var marksObtained = maths + english + physics + chemistry;

    var percentage = (marksObtained / totalMarks) * 100; 

    document.getElementById('percentage').innerHTML = percentage.toFixed(0) + '%';




    if (percentage > 90) {
        grade = "A+";
    } else if (percentage < 90 && percentage > 80) {
        grade = "A";
    } else if (percentage < 80 && percentage > 60) {
        grade = "B";
    } else if (percentage < 60) {
        grade = "F";
    } 

    document.getElementById('grade').innerHTML  = grade;


    if(percentage < 60){
        document.getElementById('pass').innerHTML = 'You failed! But don\'t be upset. Try again :-)';
    }else{
        document.getElementById('pass').innerHTML = 'You did nice job fella. You deserved some rest :-)';
    }

}
