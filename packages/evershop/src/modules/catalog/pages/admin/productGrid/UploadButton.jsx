import PropTypes from 'prop-types';
import React from 'react';
import Button from '@components/common/form/Button';

export default function UploadButton({ uploadProducts }) {
  return <Button url={uploadProducts} title="Upload" />;
}

UploadButton.propTypes = {
  uploadProducts: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'pageHeadingRight',
  sortOrder: 10
};

export const query = `
  query Query {
    uploadProducts: url(routeId: "uploadProducts")
  }
`;
