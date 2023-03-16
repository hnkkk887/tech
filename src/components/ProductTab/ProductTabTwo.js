import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { ProductSliderFive } from "../ProductSlider";

const ProductTabTwo = ({
  title,
  newProducts,
  bestSellerProducts,
  featuredProducts,
  saleProducts,
  sign
}) => {
  return (
    <div className="product-tab-area space-pb--r100">
      <Container>
        <Tab.Container defaultActiveKey="new">
          <div className="section-title section-title--style-two space-mb--25 d-flex flex-column flex-lg-row justify-content-between">
            <h2>{title}</h2>
            <Nav
              variant="pills"
              className="product-tab-navigation product-tab-navigation--style-two"
            >
              <Nav.Item>
                <Nav.Link eventKey="new">New Arrival</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bestSellers">Best Sellers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="featured">Featured</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sale">Special Offer</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="new">
              <ProductSliderFive products={newProducts} sign={sign} />
            </Tab.Pane>
            <Tab.Pane eventKey="bestSellers">
              <ProductSliderFive products={bestSellerProducts} sign={sign} />
            </Tab.Pane>
            <Tab.Pane eventKey="featured">
              <ProductSliderFive products={featuredProducts} sign={sign} />
            </Tab.Pane>
            <Tab.Pane eventKey="sale">
              <ProductSliderFive products={saleProducts} sign={sign} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTabTwo;