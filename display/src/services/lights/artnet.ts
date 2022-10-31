import { io } from 'socket.io-client'

const socket = io('http://127.0.0.1:1447', {
  transports: ['websocket'],
})

export const setArtNet = (...data: number[][]) => {
  if(location.hash.includes('debug')) return
  socket.emit('artnet', ...data)
}

// @ts-ignore
window.setArtNet = setArtNet
