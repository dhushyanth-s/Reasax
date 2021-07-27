import './ripple.css'
import { hexToRGB, primary } from './theme'
export const ripple = (
  evt: React.MouseEvent<HTMLElement, MouseEvent>,
  solid: boolean = false,
  color?: string,
  transparent: boolean = false
) => {
  const el = evt.currentTarget
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  let time = 0.6

  if (el.clientWidth > 150) {
    time = 1.2
  }

  const effectContent = document.createElement('div')

  effectContent.className = 'rs-ripple-content'

  const effect = document.createElement('div')

  effect.className = 'rs-ripple'
  if (solid) {
    console.log('solid boys')
    effect.style.background = primary
    effect.style.opacity = '1'
    if (color !== undefined && color !== '') {
      effect.style.background = hexToRGB(color)
    }
  }
  
  if (color !== undefined && color !== '' && transparent) {
    effect.style.background = hexToRGB(color, 0.15)
  }

  effect.style.transition = `all ${time}s ease`

  effect.style.left = `${x}px`
  effect.style.top = `${y}px`

  effectContent.appendChild(effect)

  el.appendChild(effectContent)

  effect.style.width = `${el.clientWidth * 2.5}px`
  effect.style.height = `${el.clientWidth * 2.5}px`
  effect.style.opacity = `1`

  let noTime = false
  setTimeout(() => {
    noTime = true
  }, 300)

  function removeEffect(evt: any) {
    effect.style.transition = `all 0.${time * 600}s ease`
    setTimeout(
      () => {
        effect.style.opacity = '0'
        setTimeout(() => {
          el.removeChild(effectContent)
        }, time * 300)
      },
      noTime ? 0 : time * 400
    )

    evt.target.removeEventListener('mouseup', removeEffect)
    evt.target.removeEventListener('mouseleave', removeEffect)
  }

  evt.target.addEventListener('mouseup', removeEffect)
  evt.target.addEventListener('mouseleave', removeEffect)
}
