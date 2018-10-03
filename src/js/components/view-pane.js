/* global createElement */
const viewpane = createElement({ id: 'view-pane' })
createElement({ className: 'toolbar header', innerText: 'Edit Slide' }, viewpane)
createElement('iframe', { id: 'slide-pane', src: 'http://localhost:3777' }, viewpane).onload = function () {
  let doc = this.contentDocument
  doc.getElementById('title').contentEditable = true
  doc.getElementById('content').contentEditable = true
}
createElement({ className: 'toolbar header', innerText: 'Live View Slide' }, viewpane)
createElement('iframe', viewpane)
export default viewpane
