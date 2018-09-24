var current=1
let result="p"

function prev()
{
  current=current-1
  if(current<1)
  {
    current=5
  }
  final="p"+current+".jpg"
  document.getElementById("ss").src="images/"+final
}

function next()
{
  current=current+1
  if(current>5)
  {
    current=1
  }
  final="p"+current+".jpg"
  document.getElementById("ss").src="images/"+final
}
