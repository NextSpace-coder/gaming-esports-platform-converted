import { NavLink } from "react-router-dom";


const categoryData = [
    {
      id: 1,
      imgSrc: '/assets/img/products/product-5-1.png',
      title: "Keyboard",
      columnClass: "col-lg-6",
    },
    {
      id: 2,
      imgSrc: '/assets/img/products/product-5-2.png',
      title: "Headset",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 3,
      imgSrc: '/assets/img/products/product-5-3.png',
      title: "Joystick",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 4,
      imgSrc: '/assets/img/products/product-5-4.png',
      title: "Accessories",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 5,
      imgSrc: '/assets/img/products/product-5-5.png',
      title: "Microphone",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 6,
      imgSrc: '/assets/img/products/product-5-6.png',
      title: "Desk Table",
      columnClass: "col-lg-6",
    },
  ];
  
  export default function ProductCategory() {
    return (
      <section
        className="product-category__area section-pt-120 section-pb-120"
        data-background="/assets/img/bg/item-category-bg.png"
        style={{backgroundImage:`url(/assets/img/bg/item-category-bg.png)`}}
      >
        <div className="container custom-container4">
          <div className="row gy-4">
            {categoryData.map((category) => (
              <div key={category.id} className={category.columnClass}>
                <div className="shop__category">
                  <div className="shop__category-thumb">
                    <img src={category.imgSrc} alt={category.title} />
                  </div>
                  <div className="shop__category-content">
                    <h4 className="title">
                      <NavLink to="/shop">{category.title}</NavLink>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  