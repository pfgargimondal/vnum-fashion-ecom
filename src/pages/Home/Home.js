import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Home.css";
import "swiper/css";

export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  {/*featued products start*/}

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const URL = "http://localhost:8000/featured_products";
      const response = await fetch(URL);
      const data = await response.json();
      setFeaturedProducts(data);  
      console.log(data);    
    }

    fetchFeaturedProducts();
  }, []);

  {/*featued products end*/}


  return (
    <>
      <div className="dfgdfvsdfsdfsdf">
        <div className="container-fluid">
          <div className="sdfsdfd">
            <div className="row">
              <div className="col-lg-4 ps-0 pe-0">
                <div className="gdfgdf215">
                  <img src="./images/fashion (3).jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div
                  className="lvjhfbvdf558"
                  style={{
                    backgroundImage: "url('./images/bgc.jpg')",
                    backgroundSize: "100% 100%"
                  }}
                >
                  <div className="jhsbfsdf">
                    <h6>Set Your Style</h6>
                    <h2>INSTILEY</h2>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                      consectetur adipisci velit sed quia non numquam eius modi
                      tempora incidunto.
                    </p>
                  </div>
                  <div className="dfbfbhgfdg">
                    <div className="row">
                      <div className="col-lg-6">
                        <button className="jdfhbtn">SHOP WOMEN</button>
                      </div>
                      <div className="col-lg-6">
                        <button className="jdfhbtn">SHOP MEN</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div className="gdfgdf215">
                  <img src="./images/fashion (2).jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jdfgdfg65dfdf">
        <div className="container-fluid">
          <div className="dfghdfg548">
            <div className="row">
              <div className="col-lg-6">
                <div className="dfkhgdfgdf">
                  <h2>FREE SHIPPING OVER $99*</h2>
                  <p>Plus, two-day delivery on thousands of items.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dfkhgdfgdf">
                  <h2>AMAZING VALUE EVERY DAY</h2>
                  <p>Items you love at prices that fit your budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fbgvdsdfd6568">
        <div className="container-fluid">
          <div className="ghbgfgdf">
            <div className="row">
              <div className="col-lg-3">
                <div className="dfnghfd">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (1).png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="cfgncfgb">
                        <h4>FREE GIFT WRAPPING</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dfnghfd">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (2).png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="cfgncfgb">
                        <h4>FREE GIFT WRAPPING</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dfnghfd">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (3).png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="cfgncfgb">
                        <h4>STUDENT DISCOUNT</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dfnghfd5">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="sdhgdfg">
                        <img src="./images/fagift (4).png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="cfgncfgb">
                        <h4>100% SECURE SHOPPING</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dfndfjhdfgdf">
        <div className="container-fluid">
          <div className="dfhdfgd464">
            <h2>Top Categories</h2>
          </div>

          <div className="fgjdfgf3298">
            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (1).jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (1).webp" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (1).webp" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (2).webp" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Co-ords</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (3).webp" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (4).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (5).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Jeans</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (6).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (7).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Lingeries</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (8).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (8).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Skirts &amp; Tops</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (1).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (3).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (6).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dfhdfg">
              <div className="fbdfg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="dfgh">
                      <img src="./images/fapo (2).webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fbsdsdf">
                      <h4 className="mb-0"><Link to="/">Activewear</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sdfnjhdfbgdfg">
        <div className="container-fluid">
          <div className="fgnhfgh">
            <h2>#MUST Have</h2>
          </div>
          <div className="dfhgudfg">
            <div className="row">
              <div className="col-lg-6 pe-0 ps-0">
                <div className="fhdfgdf">
                  <img src="./images/poster (1).png" alt="" />
                </div>
              </div>
              <div className="col-lg-6  pe-0 ps-0">
                <div className="fhdfgdf">
                  <img src="./images/poster (2).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="xfdjgdfgdfg"
        style={{
          background: "url('./images/downbanner (3).png')",
          backgroundSize: "100% 100%"
        }}
      >
        <div className="container-fluid">
          <div className="dfbghd5488"></div>
        </div>
      </div>
      <div className="xfbxdfgsdf">
        <div className="container-fluid">
          <div className="dfngjhdfgdfg">
            <marquee behavior="" direction="" className="gfjhfgjfg">
              <span>
                USE CODE: SALE70 <i className="fa-solid fa-bolt" />
              </span>{" "}
              <span className="hfg55543">
                SALE 70% OFF <i className="fa-solid fa-bolt" />
              </span>{" "}
              <span>
                END OF SEASON
                <i className="fa-solid fa-bolt" />
              </span>
            </marquee>
          </div>
        </div>
      </div>
      <div className="fbnghksdfsdfsf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>Brand We Love</h4>
          </div>
          <div className="dfgnhdfgdf">
            <div className="row">
              <div className="col-lg-4 ps-0 pe-0">
                <div className="nhgf65dfgdf">
                  <img src="./images/fashiondwn3 (1).png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div className="nhgf65dfgdf">
                  <img src="./images/fashiondwn3 (2).png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 ps-0 pe-0">
                <div className="nhgf65dfgdf">
                  <img src="./images/fashiondwn3 (3).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fvbhgfbfgvf5865">
        <div className="container-fluid">
          <div className="gbfhdvgdfg">
            <div className="row">
              <div className="col-lg-3 ps-0 pe-0">
                <div className="dfdfdffd">
                  <img src="./images/fashion40.png" alt="" />
                </div>
              </div>
              <div className="col-lg-9 ps-0 pe-0">
                <div className="dfdfdffd">
                  <img src="./images/fashion39.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fcknjhfvgdf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>New Arrivals</h4>
          </div>
          <div
            className="sdfsdfsdfsd"
            style={{ backgroundImage: "url('./images/new-arrivle.png')" }}
          ></div>
        </div>
      </div>
      <div className="kdnfghdfsdf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>#Trend Now</h4>
          </div>
          <div className="dfdfhgdf65">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: "url('./images/new-product.png')" }}
                >
                  <div className="dfdfsdf">
                    <h4>
                      <span>NEW IN</span>{" "}
                    </h4>
                    <h2>
                      <span className="dftgh525">
                        SHOES &amp; <br /> BOOTS
                      </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: "url('./images/new-product (2).png')" }}
                >
                  <div className="dfdfsdf">
                    <h4>
                      <span>MUST HAVE</span>
                    </h4>
                    <h2>
                      <span className="dftgh525">
                        EDITOR'S <br /> PICKS
                      </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="dfgyhdfgdf"
                  style={{ backgroundImage: "url('./images/new-product (3).png')" }}
                >
                  <div className="dfdfsdf">
                    <h4>
                      <span>NEW IN</span>{" "}
                    </h4>
                    <h2>
                      <span className="dftgh525">
                        SHOES &amp; <br /> BOOTS
                      </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dfbgghdfdfgdf">
        <div className="container-fluid">
          <div className="sdf58sdfs">
            <h4>Featured Products</h4>
          </div>

          <div className="fgjhdfgdfgdf py-4">
            <Swiper {...swiperConfig}>
              {featuredProducts.map((featuredProduct) => (
                <SwiperSlide key={featuredProduct.id}>
                  <div className="dfgjhbdfg">
                    <div className="images">
                      <div className="image position-relative">
                        <img src={featuredProduct.img1} alt="not found" />
                       
                        <img className="first" src={featuredProduct.img2} alt="not found" />
                        
                        <div className="dbgdfhgv">
                          <button>QUICK ADD</button>
                        </div>
                        
                        <div className="fdbdfgdfgdf">
                          <h6>{featuredProduct.title}</h6>
                          <h4>{featuredProduct.description}</h4>
                          <h5>${featuredProduct.price}</h5>
                        </div>
                        <div className="dsgdfgsdf">
                          <div className="selection-group">
                            <input id="a" type="radio" name="rate" defaultValue="a" />                            
                            <label htmlFor="a">
                              <img src="./images/color1 (1).jpg" />
                            </label>
                            
                            <input id="b" type="radio" name="rate" defaultValue="b" />                            
                            <label htmlFor="b">
                              <img src="./images/color1 (1).png" />
                            </label>

                            <input id="c" type="radio" name="rate" defaultValue="c" defaultChecked="" />                            
                            <label htmlFor="c">
                              <img src="./images/color1 (2).png" />
                            </label>
                          </div>
                          <p>MORE SIZE AVAILABLE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <hr />
      <div className="yudfdfgdfbgdfgdffgfg">
        <div className="container-fluid">
          <div className="dfgjhfdg2455f">
            <div className="fgnjhdf">
              <h6>
                There are many variations of passages of Lorem Ipsum available
              </h6>
            </div>
            <div className="dfghdfg654">
              <h6>
                Contrary to popular belief, Lorem Ipsum is not simply random text:
              </h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem Ipsum is not simply:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <div className="dfghdfg654">
              <h6>Contrary to popular belief, Lorem Ipsum is not simply:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
          </div>
          <div className="dfngjhdfgd5151fg">
            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Featured Designers:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak &amp; Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>
            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Top Designers for Wedding :</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak &amp; Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>
            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Celebrity Styles:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak &amp; Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>
            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Shop By Occasions:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak &amp; Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>
            <div className="kdfbhjgdfg65468546">
              <div className="fbgfd">
                <h6>Aza Magazine:</h6>
              </div>
              <div className="fbgdfgd">
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Isha Gupta Tayal </a>
                <a href="/">Deepika Arora</a>
                <a href="/">Palak &amp; Mehak</a>
                <a href="/">LABEL SHRISTI CHETANI </a>
                <a href="/">Nirmooha</a>
                <a href="/">Sheetal Batra</a>
                <a href="/">AFFROZ</a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
                <a href="/">Fayon Kids </a>
                <a href="/">POMCHA JAIPUR</a>
                <a href="/">Masaba</a>
                <a href="/">Gulabo Jaipur</a>
                <a href="/">Chotibuti</a>
                <a href="/">Paulmi and Harsh</a>
                <a href="/">Basanti - Kapde Aur Koffee </a>
                <a href="/">LASHKARAA</a>
                <a href="/">Sabyasachi </a>
                <a href="/">Kasbah</a>
                <a href="/">Aryavir Malhotra </a>
                <a href="/">Samyukta Singhania</a>
                <a href="/">KARAJ JAIPUR</a>
                <a href="/">Aariyana Couture</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}