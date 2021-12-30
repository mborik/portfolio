/**
 * Media Query Generator
 *
 * @param {array} breakPoints
 */
const mediaQueryGenerator = breakPoints => {
  return breakPoints.map(
    item => `@media screen and (${item.type}-width: ${item.size}em)`
  )
}

export default mediaQueryGenerator
