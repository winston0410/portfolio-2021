const getPath = (path: string, prefix = '') => {
  const regex = /([\/\w\-]+?)(\/index)?\.\w+/
  return prefix + path.match(regex)[1]
}

const prefixPath = (path: string) => `/blog${path}`

// TODO type this function, a glob object from Vite
const globToArray = (glob) => {
  const array = Object.keys(glob).map((key) => {
    const path = prefixPath(getPath(key))
    const post = glob[key]
    return {
      key,
      path,
      ...post,
    }
  })

  return array
}

export default globToArray
