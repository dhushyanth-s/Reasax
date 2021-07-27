import { styled } from '../util/theme'
import React, { ReactNode, useState } from 'react'
import { ripple } from '../util/ripple'

export default function RsButton({
  disabled = false,
  type = 'normal',
  onClick = () => {},
  children,
}: RsButtonProps) {
  const [state, setState] = useState<'default' | 'active'>('default')

  return (
    <RsButtonRaw
      onMouseDown={(event) => {
        if (!disabled) {
          ripple(event, '', type === 'flat' || 'bordered' && state === 'default')
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
    >
      {children}
    </RsButtonRaw>
  )
}

export interface RsButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'normal' | 'flat' | 'bordered'
  disabled?: boolean
}

const RsButtonRaw = styled('button', {
  padding: '8px 14px',
  border: 'none',
  background: '$primary',
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
      normal: {
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0px 10px 20px -10px $primary',
        },
      },
      flat: {
        background: '$primaryBg',
        color: '$primary',

        '&:focus': {
          outline: 'none',
        },
      },
      bordered: {
        background: 'transparent',
        color: '$primary',
        boxShadow: '$primary'
      },
    },

    state: {
      default: {},
      active: {},
    },

    disabled: {
      true: {
        opacity: 0.3
      }
    }
  },

  compoundVariants: [
    {
      state: 'active',
      type: 'flat',
      css: {
        background: '$primary',
        color: 'white',
        transition: 'all 0.3s ease, background 0.3s ease 0.2s',
      },
    },
    {
      state: 'active',
      type: 'bordered',
      css: {
        background: '$primary',
        color: 'white',
        transition: 'all 0.3s ease, background 0.3s ease 0.2s',
      },
    },
  ],
})
