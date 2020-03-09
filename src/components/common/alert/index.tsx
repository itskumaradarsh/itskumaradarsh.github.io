import React from 'react';
import './styles.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IAlert } from './interface';

const MySwal = withReactContent(Swal);

const Alert = (props: IAlert) => {
  const { type } = props;
  return (
    <div id="adarsh-alert">
      {type === 'loading' &&
        MySwal.fire({
          title: 'Sending Request, Please Wait...',
          timer: 2000000,
          timerProgressBar: false,
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        })}
      {type === 'success' &&
        MySwal.fire({
          icon: 'success',
          title: 'Your message has sent',
        })}
      {type === 'error' &&
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })}
    </div>
  );
};

export default Alert;
