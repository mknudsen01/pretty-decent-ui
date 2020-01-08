import React from 'react';
import { Transition } from 'react-transition-group';

const DIRECTIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

const getDefaultStyles = ({ duration }) => ({
  transition: `all ${duration}ms ease`,
})

const getTransitionStyles = ({ from, amount }) => {
  if (from === DIRECTIONS.BOTTOM) {
    return {
      entering: { opacity: 0, transform: `translateY(${amount})` },
      entered: { opacity: 1, transform: 'translateY(0)' },
    }
  }
  if (from === DIRECTIONS.TOP) {
    return {
      entering: { opacity: 0, transform: `translateY(-${amount})` },
      entered: { opacity: 1, transform: 'translateY(0)' },
    }
  }
  if (from === DIRECTIONS.LEFT) {
    return {
      entering: { opacity: 0, transform: `translateX(-${amount})` },
      entered: { opacity: 1, transform: 'translateX(0)' },
    }
  }
  if (from === DIRECTIONS.RIGHT) {
    return {
      entering: { opacity: 0, transform: `translateX(${amount})` },
      entered: { opacity: 1, transform: 'translateX(0)' },
    }
  }
}

const Fade = ({ in: inProp = false, from = DIRECTIONS.BOTTOM, amount = '5%', timeout = 100, duration = 300, children }) => {
  const transitionStyles = getTransitionStyles({ from, amount });
  return (
    <Transition in={inProp} timeout={timeout}>
      {state => (
        <div style={{
          ...getDefaultStyles({ duration }),
          ...transitionStyles['entering'],
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  )
}

Fade.DIRECTIONS = DIRECTIONS;

export default Fade;
