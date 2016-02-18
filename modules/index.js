import Linter from 'inline-style-linter'

export default ({config, style}) => {
  const warnings = new Linter(config.linter).lint(style)

  warnings.forEach(warning => {
    console.warn(warning.hint, warning) // eslint-disable-line
  })
}
