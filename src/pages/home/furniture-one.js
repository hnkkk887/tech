import { useSelector } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutThree } from "../../layouts";
import { HeroSliderThree } from "../../components/HeroSlider";
import { IconBoxThree } from "../../components/IconBox";
import { ProductSliderSix } from "../../components/ProductSlider";
import { BrandLogoTwo } from "../../components/BrandLogo";
import { ImageSliderOne } from "../../components/ImageSlider";
import { ProductGridOne } from "../../components/ProductGrid";
import { BannerFour } from "../../components/Banner";

import heroSliderThreeData from "../../data/hero-sliders/hero-slider-three.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";
import brandLogoData from "../../data/brand-logo/brand-logo-one.json";

const FurnitureOne = () => {
  const { products } = useSelector((state) => state.product);
  const featuredProducts = getProducts(products, "furniture", "featured", 8);
  const bestSellerProducts = getProducts(products, "furniture", "popular", 8);
  
  return (
    <LayoutThree navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderThree heroSliderData={heroSliderThreeData} />
      {/* icon box */}
      <IconBoxThree />
      {/* grid product */}
      <ProductGridOne
        title="Exclusive Products"
        products={bestSellerProducts}
      />
      {/* banner */}
      <BannerFour />
      {/* product slider */}
      <ProductSliderSix title="Featured Products" products={featuredProducts} />
      {/* image slider */}
      <ImageSliderOne imageSliderData={imageSliderData} />
      {/* brand logo */}
      <BrandLogoTwo brandLogoData={brandLogoData} />
    </LayoutThree>
  );
};

export default FurnitureOne;
