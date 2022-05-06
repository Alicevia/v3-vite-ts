this.addEventListener('message', (e) => {
  console.log('sone', e.data)
  if (e.data === 'end') return this.close()
  postMessage(e.data)
})
