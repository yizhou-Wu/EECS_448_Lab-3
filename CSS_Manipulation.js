function change()
{
    var mytag=document.getElementById("para")
    var Border_R=document.getElementById("Border_R").value
    var Border_G=document.getElementById("Border_G").value
    var Border_B=document.getElementById("Border_B").value
    var Border_W=document.getElementById("Border_W").value
    var Background_R=document.getElementById("Background_R").value
    var Background_G=document.getElementById("Background_G").value
    var Background_B=document.getElementById("Background_B").value

    mytag.style.borderColor="rgb("+Border_R+","+Border_G+","+Border_B+")"
    mytag.style.borderWidth=Border_W+"px"
    mytag.style.backgroundColor="rgb("+Background_R+","+Background_G+","+Background_B+")"
}