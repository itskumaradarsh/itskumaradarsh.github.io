import React from 'react';
import './styles.scss';
import Particles from 'react-particles-js';
import { IParticles } from './interface';

const ParticlesWrapper = (props: IParticles) => {
  const { type } = props;

  return (
    <div id="particle-wrapper" className={type}>
      {type === 'bubble' && bubbleParticle()}
      {type === 'snow' && snowParticle()}
      {type === 'line' && linesParticle()}
    </div>
  );
};

const bubbleParticle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 5,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
};

const snowParticle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: false,
            },
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            direction: 'bottom',
            out_mode: 'out',
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'remove',
            },
          },
          modes: {
            remove: {
              particles_nb: 10,
            },
          },
        },
      }}
    />
  );
};

const linesParticle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );
};

export default ParticlesWrapper;
