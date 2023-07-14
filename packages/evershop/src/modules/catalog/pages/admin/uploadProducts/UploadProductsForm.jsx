import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Area from '@components/common/Area';
import { Form } from '@components/common/form/Form';
import { get } from '@evershop/evershop/src/lib/util/get';
import Button from '@components/common/form/Button';
import * as XLSX from 'xlsx';
import ProductPreviewGrid from './ProductPreviewGrid';

export default function UploadProductsForm({ action }) {
  const id = 'uploadForm';
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setProducts(data);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
        <Button onAction={handleSubmit} title="Upload" />
      </form>
      <Area id={id} noOuter />
      <ProductPreviewGrid products={products} />
    </>
  );
}

UploadProductsForm.propTypes = {
  action: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    action: url(routeId: "createProduct")
    gridUrl: url(routeId: "productGrid")
  }
`;
