import React, { HTMLAttributes, useState } from 'react'
import { styled } from '../util/theme'

export interface InputProps {
  placeholder?: string
  label?: string
  labelType?: 'floating' | 'subtle' | 'fixed',
  prefix?: React.ReactNode,
  loading?: boolean
}

export default function Input({
  placeholder,
  labelType = 'subtle',
  label,
  prefix,
  loading = false,
  ...rest
}: InputProps & HTMLAttributes<HTMLInputElement>) {
  const [active, setActive] = useState(false)
  const [content, setContent] = useState('')
  return (
    <InputContainer>
      <InputLabel
        active={active}
        labelType={labelType == 'fixed' ? 'subtle' : labelType}
      >
        {placeholder}
      </InputLabel>
      {label && (labelType == 'fixed' || labelType == 'subtle') && (
        <InputLabel labelType="fixed" active={active}>
          {label}
        </InputLabel>
      )}
      <RawInput
        placeholder={placeholder}
        onFocus={() => {
          setActive(true)
        }}
        onBlur={() => {
          if (content === '') {
            setActive(false)
          }
        }}
        active={active}
        onChange={(e) => {
          setContent(e.currentTarget.value)
        }}
        {...rest}
      />
      {/* {loading && <div style={{
          height: '100%',
          width: 25,
          position: 'absolute',
          right: 0,
          background: 'black',
          
      }}></div>} */}
    </InputContainer>
  )
}

const RawInput = styled('input', {
  outline: 'none',
  border: 'none',
  background: 'transparent',
  padding: 10,
  transition: 'all 0.3s ease-out',

  '&::placeholder': {
    color: 'transparent',
  },

  variants: {
    active: {
      true: {
        transform: 'translateX(5px)',
      },
    },
  },
})

const InputContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  marginTop: '1rem',
  backgroundColor: 'rgb(244,247,248)',
  width: 'max-content',
  borderRadius: 12,
})

const InputLabel = styled('label', {
  position: 'absolute',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease-out',
  transform: 'translateX(15px)',
  pointerEvents: 'none',
  color: 'lightgrey',

  variants: {
    active: {
      true: {},
    },

    labelType: {
      floating: {},
      subtle: {
        color: 'lightgrey',
        transform: 'translateX(10px)',
      },
      fixed: {
        transform: 'translate(5px, -80%)',
        color: 'grey',
      },
    },
  },

  compoundVariants: [
    {
      labelType: 'subtle',
      active: true,
      css: {
        transform: 'translate(15px)',
        opacity: 0,
      },
    },
    {
      labelType: 'floating',
      active: true,
      css: {
        transform: 'translate(5px, -80%)',
        color: '$primary',
      },
    },
  ],
})
