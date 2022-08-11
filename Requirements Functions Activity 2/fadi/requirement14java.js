function nameInfo() {
    var name = document.getElementById("fName").value;
    var mname =  document.getElementById("mName").value;
    var lname = document.getElementById("lName").value;

    document.getElementById("fullName").innerHTML = name + " " + mname + " " + lname + " ";
}