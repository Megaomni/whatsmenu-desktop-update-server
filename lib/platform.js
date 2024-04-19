// Native
const { extname } = require('path')

module.exports = fileName => {
  const extension = extname(fileName).slice(1)
  let arch = ''
  if (extension === 'exe' || extension === 'nupkg') {
    if (fileName.includes('ia32')) {
      arch = '_ia32'
    } else {
      arch = '_x64'
    }
    
  } else {
    arch = (fileName.includes('arm64') || fileName.includes('aarch64')) ? '_arm64' : ''
  }

  if (
    (fileName.includes('mac') || fileName.includes('darwin')) &&
    extension === 'zip'
  ) {
    return 'darwin' + arch
  }

  const directCache = ['exe', 'dmg', 'rpm', 'deb', 'AppImage']
  console.log(extension + arch);
  return directCache.includes(extension) ? (extension + arch) : false
}
