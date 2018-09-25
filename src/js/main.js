import { createElement } from '@scriptleaf/treejs'
import '../scss/main.scss'

createElement('header', { id: 'toolbar' })
createElement('aside', { id: 'tool-pane' })
createElement('iframe', { id: 'slide-pane' })
createElement('footer', { id: 'live-pane' })
