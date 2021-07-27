import { styled, hexToRGB } from '../util/theme'
import React, { ReactNode, useState } from 'react'
import { ripple } from '../util/ripple'

export default function RsButton({
  disabled = false,
  type = 'default',
  onClick = () => {},
  children,
  color = 'primary'
}: RsButtonProps) {
  const [state, setState] = useState<'default' | 'active'>('default')

  console.log((type === 'flat' || type === 'bordered' || type !== 'transparent'))

  return (
    <RsButtonRaw
      onMouseDown={(event) => {
        if (!disabled) {
          ripple(
            event,
            (['flat', 'bordered', 'shadow'].includes(type)) && state === 'default',
            color === 'primary' ? undefined : color,
            type === 'transparent'
          )
          setState('active')
        }
      }}
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}
      type={type}
      onFocus={() => console.log('hello there focussed button')}
      onBlur={() => {
        setState('default')
      }}
      state={state}
      disabled={disabled}
      css={{
        $$color: color !== 'primary' ? color : '$colors$primary',
        $$bg: color !== 'primary' ? hexToRGB(color, 0.15) : '$colors$primaryBg'
      }}
    >
      {children}
    </RsButtonRaw>
  )
}

export interface RsButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'default' | 'flat' | 'bordered' | 'transparent' | 'shadow'
  disabled?: boolean,
  color?: 'primary' | string
}

const RsButtonRaw = styled('button', {
  padding: '8px 14px',
  border: 'none',
  background: '$$color',
  color: 'white',
  borderRadius: 12,
  fontFamily: 'Lexend',
  // fontSize: '0.8rem',
  cursor: 'pointer',
  transition: 'all .3s ease-out',
  // opacity: 0.1,
  position: 'relative',
  zIndex: 1,

  '&:focus': {
    outline: 'none',
  },

  variants: {
    type: {
      default: {
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0px 10px 20px -10px $$color',
        },
      },
      flat: {
        background: '$$bg',
        color: '$$color',

        '&:focus': {
          outline: 'none',
        },
      },
      bordered: {
        background: 'transparent',
        color: '$$color',
        boxShadow: '0 0 2px $$color',
      },
      transparent: {
        background: 'transparent',
        color: '$$color',
        position: 'relative',

        '&::after': {
          content: '',
          position: 'absolute',
          background: '$$bg',
          width: 0,
          height: 0,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease',
        },

        '&:hover': {
          '&::after': {
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
          },
        },

        '&:active': {
          '&::after': {
            width: '90%',
            height: '90%',
          },
        },
      },
      shadow: {
        color: 'black',
        background: 'white',

        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '$raised',
        },
      },
    },

    state: {
      default: {},
      active: {},
    },

    disabled: {
      true: {
        opacity: 0.3,
      },
    },
  },

  compoundVariants: [
    {
      state: 'active',
      type: 'flat',
      css: {
        background: '$$color',
        color: 'white',
        transition: 'all 0.3s ease, background 0.3s ease 0.2s',
      },
    },
    {
      state: 'active',
      type: 'bordered',
      css: {
        background: '$$color',
        color: 'white',
        transition: 'all 0.3s ease, background 0.3s ease 0.2s',
      },
    },
    {
      state: 'active',
      type: 'transparent',
      css: {
        // color: 'white',
        '&::after': {
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
        },
      },
    },
    {
      state: 'active',
      type: 'shadow',
      css: {
        transform: 'translateY(-3px)',
        boxShadow: '$raised',
        background: '$$color',
        color: 'white',
        transition: 'all 0.3s ease, background 0.3s ease 0.2s',
      },
    },
  ],
})
