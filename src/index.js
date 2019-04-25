import Barrage from './js/barrage.ts'
import './css/style.scss'
function component() {
    let barrage=new Barrage({
      info:'a',
      el:'.myDan',
      speed:6
    });
    let i=1
    let a=setInterval(()=>{
      barrage.start('我的大哥是拱格式发顺丰'+i++,{speed:i++});
      if(i>100){
        i=1
      }
    },1000)
    // setTimeout(() => {
    //   clearInterval(a)
    // }, 500);
    // barrage.start('我的大哥是拱格式发顺丰'+i++);
    // barrage.start('我的大哥是拱格式发顺丰'+i++);
    // barrage.start('我的大哥是拱格式发顺丰'+i++);
    // barrage.start('我的大哥是拱格式发顺丰'+i++);
    
  } 
  component()