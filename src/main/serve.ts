(async () => {
  const port = 8080
  const app = (await import('../main/config/app')).default
  app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
})()
