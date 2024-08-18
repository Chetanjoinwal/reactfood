import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item to="/about">
        About
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>   
  );
}

export default BreadcrumbExample;