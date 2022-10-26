function greety()
{
 var a = document.getElementById('firstno').value;
  var b= document.getElementById('secondno').value;
  var c= document.getElementById('operation').value;
  if  (c =="+")
  {
    result=  parseInt(a) + parseInt(b);
   
   
  }
  if  (c =="-")
  {
    result=  parseInt(a) + parseInt(b);
   
   
  }
  if  (c =="*")
  {
    result=  parseInt(a) * parseInt(b);
   
   
  }
  if  (c =="/")
  {
 result=  parseInt(a) / parseInt(b);
   
   
  }
 document.getElementById('result').value=result;
  

 


}