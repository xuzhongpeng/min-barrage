export default class Barrage {
  el: string = 'body';
  info: Array<any> = []; //显示文字
  img: string = '';
  href: string = '';
  close: boolean = false;
  speed: number = 10;
  color: string = '#ffff';
  backColor: string = 'rgba(204, 204, 204, 0.5)';
  height: string = '40px';
  fontSize: string = '20px';
  parentName:string='barrage';
  constructor(options: any) {
    for (const [option, value] of Object.entries(options)) {
      if (value !== '' && (this as any)[option] !== undefined) {
        if (option === 'info') {
          //this.info.push(value);
        } else (this as any)[option] = value;
      } else {
        throw new Error('传入参数为空或错误');
      }
    }
    this.firstBegin();
  }
  start(message: string,options:any={}) {
    if(options['speed']) this.speed=options['speed'];
    if (message) {
      this.info.push(message);
    }
    if (this.info.length > 0) {
      this.createElement();
    }
  }
  firstBegin() {
    let main = this.getElDom();
    main.setAttribute('style',`overflow:hidden`)
    this.animatStyle()
    let mainChild = document.getElementById(this.parentName);
    if (!mainChild) {
      mainChild = document.createElement('div');
      mainChild.setAttribute('id', this.parentName);
      mainChild.setAttribute('style',`position:absolute;width:100%;height:100%;`)
      main.appendChild(mainChild);
    }else{
      this.parentName+=1;
      this.firstBegin();
    }
  }
  createElement() {
    let mainChild = document.getElementById(this.parentName);
    let myDiv = document.createElement('div');
    let top = this.getElDom().clientWidth * Math.random();
    const clientWidth = this.getElDom().clientWidth;
    const styles = `
        height: ${this.height};
        background: ${this.backColor};        
        line-height: ${this.height};        
        font-size: ${this.fontSize};
        color:${this.color};
        
        // left:-200px;
        top:${top+10}px; 
        transition:transform ${this.speed}s linear 0s;
        transform:translateX(${clientWidth}px);
        // animation: mymove;
        // animation-duration:${this.speed}s;
        // animation-timing-function:linear;
        // animation-iteration-count:1;
        // -moz-animation: mymove;
        // -moz-animation-duration:${this.speed}s;
        // -moz-animation-timing-function:linear;
        // -moz-animation-iteration-count:1;
        // -webkit-animation: mymove;
        // -webkit-animation-duration:${this.speed}s;
        // -webkit-animation-timing-function:linear;
        // -webkit-animation-iteration-count:1;
        // -o-animation: mymove;
        // -o-animation-duration:${this.speed}s;
        // -o-animation-timing-function:linear;
        // -o-animation-iteration-count:1;
        `;
    
    // myDiv.setAttribute('class','move-'+this.speed)
    let text=document.createTextNode(this.info.shift())
    
    myDiv.setAttribute('class','barrage')
    myDiv.addEventListener('mouseover',()=>{
      myDiv.setAttribute('class',myDiv.getAttribute('class')+' pause')
    })
    mainChild.appendChild(myDiv);
    setTimeout(() => {
      myDiv.appendChild(text)
      myDiv.setAttribute('style', styles);
    }, 1000);
      
    

    setTimeout(() => {
      mainChild.removeChild(myDiv);
    }, (this.speed+1) * 1000);
  }
  animatStyle() {
    const clientWidth = this.getElDom().clientWidth;
    const animations = `
    @keyframes mymove {
      from {
        left: -200px;
      }
      to {
        left: ${clientWidth}px;
      }
    }`;
    let style = document.createElement('style');
    style.innerHTML = animations;
    document.querySelector('head').appendChild(style);
    // setTimeout(() => {
    //   document.querySelector('head').removeChild(style);
    // }, this.speed * 1000);
  }
  /**
   * 获取插入的dom
   */
  getElDom() {
    let dom = document.querySelector(this.el);
    if (!dom) {
      throw new Error(`'${this.el}'is not a element`);
    }
    return dom;
  }
  /**
   * 获取右边的宽度
   * @param element 
   */
  getElementLeft(element: any) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
    return actualLeft;
  }
}
