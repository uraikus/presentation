import sse from './server.js'
import imageList from './imageList.js'
import toolkit from './components/toolkit.js'
import setpane from './components/set-pane.js'
import slidepane from './components/slide-pane.js'
import viewpane from './components/view-pane.js'
setTimeout(() => {
  sse.send({
    background: imageList[1],
    title: 'Hello World',
    content: 'some long text is really right here!'
  }, 'slide')
}, 3000)
