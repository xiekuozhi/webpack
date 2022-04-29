import x from './x.js'
console.log(x)
import jpg from './assets/R-C.jpg'  //加载图片

const div=document.getElementById('app')
div.innerHTML=`<img src="${jpg}">`    //loader会帮我解决添加哈希



const button=document.createElement('button')
button.innerHTML='懒加载'
button.onclick=()=>{
    const promise =import('./lazy')     //懒加载用import括号加载
    promise.then((module)=>{
   const fn=module.default //default 默认值 
    fn()
},()=>{})
}
div.appendChild(button)