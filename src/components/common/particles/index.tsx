import React from 'react';
import './styles.scss';
import Particles from 'react-particles-js';
import { IParticles } from './interface';

const ParticlesWrapper = (props: IParticles) => {
  const { type } = props;

  return (
    <div id="particle-wrapper">
      {type === 'bubble' && bubbleParticle()}
      {type === 'snow' && snowParticle()}
      {type === 'line' && liesParticle()}
      {type === 'code' && codeParticles()}
    </div>
  );
};

const bubbleParticle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
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
            onhover: {
              enable: true,
              mode: 'bubble',
            },
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
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
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

const liesParticle = () => {
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

const codeParticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: 'out',
          },
          shape: {
            type: ['images', 'circle'],
            images: [
              {
                src: '/react.cd2ab268.svg',
                height: 20,
                width: 23,
              },
              {
                src: '/k8s.2d579d24.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/code.b3b4c4f4.png',
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default ParticlesWrapper;
