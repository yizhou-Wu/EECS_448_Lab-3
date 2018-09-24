function compare()
{
  var pass_1=document.getElementById("pass_1").value
  var pass_2=document.getElementById("pass_2").value
  var result;
  if(pass_1.length<8||pass_2.length<8)
  {
    result="Not long enough<br>"
  }
  else
  {
    if(pass_1==pass_2)
    {
      result="Match!<br>"
    }
    else
    {
      result="Error!<br>"
    }
  }

  document.getElementById("display").innerHTML=result
}
//compare()
