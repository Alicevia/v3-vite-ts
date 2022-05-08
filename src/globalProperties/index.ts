const modules = import.meta.globEager('./*.ts')

export function setupGlobalProperties(app) {
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) {
      modules[key].default(app)
    }
  }
}
