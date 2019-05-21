import Barrage from '../src/js/barrage.ts'
import '../lib/style.css'
function component() {
    let barrage=new Barrage({el:'.myDan',isLeft:true});
    let i=1
    //let a=setInterval(()=>{
    barrage.start('我的大哥是拱格式发顺丰'+i++,{speed:10,headImg:'static/1.jpeg'});
    barrage.start('我的大哥是拱格式发顺丰'+i++,{speed:10,url:'http://www.baidu.com'});
    // barrage.start();
    // barrage.start('gogog')
  } 
  component()