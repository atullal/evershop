import PropTypes from 'prop-types';
import React from 'react';

export default function ProductPreviewGrid({ products }) {
  return (
    <table className="listing sticky">
      <thead>
        <tr>
          {/* Add the headers here */}
          <th>Product Name</th>
          <th>Price</th>
          <th>SKU</th>
          <th>Qty</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.uuid}>
            {/* Add the product properties here */}
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.sku}</td>
            <td>{p.qty}</td>
            <td>{p.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductPreviewGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sku: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired
    })
  ).isRequired
};
