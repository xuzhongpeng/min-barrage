export default class Barrage {
  el: string = 'body';
  info: Array<any> = []; //显示文字
  img: string = '';
  href: string = '';
  close: boolean = false;
  speed: number = 10;
  color: string = '#ffff';
  backColor: string = '#ccc';
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
  start(message: string) {
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
    let mainChild = document.getElementById(this.parentName);
    if (!mainChild) {
      mainChild = document.createElement('div');
      mainChild.setAttribute('id', this.parentName);
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
    const styles = `
        height: ${this.height};
        background: ${this.backColor};
        display: inline-block;
        word-break:keep-all;
        white-space:nowrap;
        border-radius: 20px;
        line-height: ${this.height};
        padding: 0 20px;
        font-size: ${this.fontSize};
        color:${this.color};
        position: relative;
        left:-1000px;
        top:${top+10}px;
        animation: mymove;
        animation-duration:${this.speed}s;
        animation-timing-function:linear;
        animation-iteration-count:1;
        -moz-animation: mymove;
        -moz-animation-duration:${this.speed}s;
        -moz-animation-timing-function:linear;
        -moz-animation-iteration-count:1;
        -webkit-animation: mymove;
        -webkit-animation-duration:${this.speed}s;
        -webkit-animation-timing-function:linear;
        -webkit-animation-iteration-count:1;
        -o-animation: mymove;
        -o-animation-duration:${this.speed}s;
        -o-animation-timing-function:linear;
        -o-animation-iteration-count:1;
        `;
    myDiv.setAttribute('style', styles);
    // myDiv.setAttribute('class','move-'+this.speed)

    mainChild.appendChild(myDiv);

    myDiv.innerHTML = this.info.shift();

    setTimeout(() => {
      mainChild.removeChild(myDiv);
    }, this.speed * 1000);
    this.animatStyle(myDiv.scrollWidth);
  }
  animatStyle(width: number) {
    const clientWidth = this.getElDom().clientWidth;
    const animations = `
    @keyframes mymove {
      from {
        left: -${width}px;
      }
      to {
        left: ${clientWidth}px;
      }
    }`;
    let style = document.createElement('style');
    style.innerHTML = animations;
    document.querySelector('head').appendChild(style);
    setTimeout(() => {
      document.querySelector('head').removeChild(style);
    }, this.speed * 1000);
  }
  getElDom() {
    let dom = document.querySelector(this.el);
    if (!dom) {
      throw new Error(`'${this.el}'is not a element`);
    }
    return dom;
  }

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
