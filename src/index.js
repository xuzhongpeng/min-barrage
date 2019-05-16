import Barrage from '../lib/bundle'
import './css/style.scss'
function component() {
    let barrage=new Barrage({
      info:'a',
      el:'.myDan',
      speed:10,
      defaultHeader:'static/1.jpeg'
    });
    let i=1
    //let a=setInterval(()=>{
      barrage.start('我的大哥是拱格式发顺丰'+i++,{speed:10,headImg:'static/1.jpeg'});
      barrage.start('我的大哥是拱格式发顺丰'+i++,{speed:10,url:'http://www.baidu.com'});
      barrage.start();
      barrage.start('gogog')
    //   if(i>100){
    //     i=1
    //   }
    // },1000)
  } 
  component()