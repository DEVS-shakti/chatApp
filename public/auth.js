const inpName=document.querySelector('#name')
const inppswd=document.querySelector('#pswd')
const form=document.querySelector('#form')
const content=document.querySelector('.content')
form.addEventListener('submit',e=>{
    e.preventDefault()
    const name=inpName.value;
    const password=inppswd.value;
    console.log(name, password)
    const div=document.createElement('div')
    if(name===''||password==='')
        { 
            div.textContent = 'Please enter author name and password'
            content.append(div);
    }else if(name!=='shakti'&&password!=='shakti785'){
        content.remove(div)
        div.textContent = 'wrong author name and password'
        content.append(div);
        inpName.value=''
        inppswd.value=''
    }
    else{
        if(name==='shakti'&&password==='shakti785')
            {
                window.location.href='chat.html';
            }
        }
        div.classList.add('msg')


})