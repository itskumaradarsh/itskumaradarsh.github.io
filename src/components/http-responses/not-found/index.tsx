import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../../../utils/urls';
import { Spacer } from '../../common';

const NotFoundPage = () => {
  return (
    <>
      <Spacer height={100} />
      <div className="center">
        <h1>Error 404</h1>
        <h1>We can&apos;t seem to find the page you are looking for.</h1>
        <Spacer height={30} />
        <h4>
          <Link to={HOME_PAGE}>Go to Home Page.</Link>
        </h4>
      </div>
    </>
  );
};

export default NotFoundPage;
