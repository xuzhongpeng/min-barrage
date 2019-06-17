import Barrage from '../src/js/barrage.ts'
import '../lib/style.css'
function component() {
    let barrage=new Barrage({el:'.myDan',isLeft:true});
    barrage.start('这是一个测试111',{speed:5,headImg:'static/1.jpeg'});
    barrage.start('这是第二个测试',{speed:10,url:'http://JSShou.cn'});
  } 
  component()