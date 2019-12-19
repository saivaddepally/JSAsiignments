var request=new XMLHttpRequest()
const rdiv=document.getElementById('test')

request.open('GET',' https://reqres.in/api/users?page=1',true)
request.onload=function()
{
var info=JSON.parse(this.response)
var data=info['data']
if (request.status >= 200 && request.status < 400)
{
for(let i=0;i<data.length;i++)
{

    const card=document.createElement('div')
    card.setAttribute('class','card')

    const details=document.createElement('div')
    details.setAttribute('class','details')

    const image=document.createElement('img')
    image.src=data[i].avatar

    const h1=document.createElement('h2')
    h1.textContent=data[i].email 

    const p=document.createElement('h1')
    p.textContent=data[i].first_name

    const imgdiv = document.createElement('div')
    imgdiv.setAttribute('class','imgdiv')

    imgdiv.appendChild(image)
    //const h2=documet.createElement('h2')
    //h2.textContent=data[i].last_name

    

    rdiv.append(card)
   
    card.appendChild(imgdiv)
    card.append(details)
    details.appendChild(h1)
    details.appendChild(p)
   
    


}
}
}
 request.send()   
    
     
       
    
