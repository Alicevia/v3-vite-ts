this.addEventListener('message', (e) => {
  if (e.data === 'end') return this.close()
  postMessage(e.data)
})
