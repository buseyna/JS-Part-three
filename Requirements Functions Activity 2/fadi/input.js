function infoOutput() {
    var name = document.getElementById("fulName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    document.getElementById("output").innerHTML= name + " " + middleName + " " + lastName + " " + email + " ";
}