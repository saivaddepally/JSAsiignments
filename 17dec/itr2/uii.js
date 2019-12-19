
const rdiv=document.getElementById('test')
var x=1;
function loaddata()

{
  url='https://reqres.in/api/users?page='+x
  var request=new XMLHttpRequest()
  request.open('GET',url,true)
request.onload=function()
{
var info=JSON.parse(this.response)
var data=info['data']

  for(let i=0;i<data.length;i++)
  {
  const localdata=data[i]
  UI.addElm(localdata)

  }
}
x=x+1
request.send()
}

var UI={

}
UI.addElm=function(localdata)
{

    const card=document.createElement('div')
    card.setAttribute('class','card')

    const details=document.createElement('div')
    details.setAttribute('class','details')
    if(localdata.avatar)
    {

    const image=document.createElement('img')
    const imgdiv = document.createElement('div')
    imgdiv.setAttribute('class','imgdiv')
    image.src=localdata.avatar
    imgdiv.appendChild(image)
    card.appendChild(imgdiv)
    }
    else{
      const imgdiv=document.createElement('div')
      imgdiv.setAttribute('class','abc')
      imgdiv.textContent=localdata.first_name.charAt(0) +localdata.last_name.charAt(0);
      card.appendChild(imgdiv)
    }

    const h1=document.createElement('h2')
    h1.textContent=localdata.email 

    const p=document.createElement('h1')
    p.textContent=localdata.first_name + " "+ localdata.last_name

    

    rdiv.append(card)
   
    
    card.appendChild(details)
    details.appendChild(h1)
    details.appendChild(p)
  
  }
 