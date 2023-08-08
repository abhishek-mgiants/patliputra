import React ,{useEffect} from 'react'
import './Clients.css'


const Clients = () => {
  useEffect(()=>{
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
      gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
          return xPercents[i];
        }
      });
      gsap.set(items, {x: 0});
      totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
          .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = vars => toIndex(curIndex+1, vars);
      tl.previous = vars => toIndex(curIndex-1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
      }
      const boxes = gsap.utils.toArray(".elem");
      const loop = horizontalLoop(boxes, {paused: false, repeat:-1});
  },[])


   
  
// const loop = horizontalLoop(, elems, {paused: true});
    const clientsData = [
        {
          id: 1, 
          clientName: 'Amazon',
          imgPath:'https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png'
        },
        {
          id: 2,
          clientName: 'FlipKart',
          imgPath:'https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png'
        },
        {
          id: 3,
          clientName: 'CarlsBerg',
          imgPath:'https://1000logos.net/wp-content/uploads/2016/10/Carlsberg-logo.jpg'
        },
        {
          id: 4,
          clientName: 'Nestle',
          imgPath:'https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-Nestle-Logo.jpg'
        },
        {
          id: 5,
          clientName: 'Vishal',
          imgPath:'https://pbs.twimg.com/media/EMnRgEcU0AAftCT.png'
        },
       
        {
          id: 6,
          clientName: 'Prestige',
          imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHr8S2O9__ipufI7spZojWiybkVrGRZKVT-YQFWIv0A&s'
        },
        {
          id: 7,
          clientName: 'Bluedart',
          imgPath:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Blue_Dart_logo_transparent.png'
        },
        {
          id: 8,
          clientName: 'arzooo',
          imgPath:'https://media.licdn.com/dms/image/C4E0BAQHqqHVBNWFVpQ/company-logo_200_200/0/1601550951931?e=2147483647&v=beta&t=pHLzpqCV1bk4oHa2adNIxfBdEA5lUJbffzYtdllJeHA'
        },
        {
          id: 9,
          clientName: 'big basket',
          imgPath:'https://logos-download.com/wp-content/uploads/2021/01/Bigbasket_Logo.png'
        },
        {
          id: 10,
          clientName: 'Alpex',
          imgPath:'https://alpexsolar.com/assets/LOGO.png'
        },
        
      ]
  return (
    <div className='client-main'>
    <div className='clients-heading'>
      OVER <span>1000+ CLIENTS</span> ALL OVER INDIA 
     </div>


        <div className="clients-main">
          <div id="stripe">
            <div className="cnt">
          
            {
            clientsData.map((client) => (
              <div key={client.id} className="elem">
                <div  className="clients-card">
            <img src={client.imgPath} alt="" />
               
           </div>
           
              </div>
            ))
          }
        
           
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Clients