import Barrage from './js/barrage.ts'
import './css/style.scss'
function component() {
    let barrage=new Barrage({
      info:'a',
      el:'.myDan'
    });
    //setInterval(()=>{
      barrage.start('我的大哥是拱格式发顺丰');
   // },500)
    
  } 
  component()