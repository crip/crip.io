module.exports = ({ config }) => {
  try {
    Object.keys(config).forEach(key => {
      const i = key.toUpperCase()
      if (!process.env[i]) {
        process.env[i] = config[key]
      }
    })
  } catch (err) {
    console.log(err)
  }
}
