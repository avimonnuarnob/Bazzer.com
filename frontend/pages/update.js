import React from 'react';
import UpdateProduct from '../components/UpdateProduct';

const updatePage = ({ query }) => (
  <div>
    <UpdateProduct id={query.id} />
  </div>
);

export default updatePage;
