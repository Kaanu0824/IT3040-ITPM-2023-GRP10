import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to CIS
                      </span>
                      <p>
                      We offer a tremendous gathering of books in the various classifications of Fiction,
                       Non-fiction, Biographies, History, Religions, Self – Help, and Children. 
                       We likewise move in immense accumulation of Investments and Management, 
                       Computers, Engineering, Medical, College, and School content references 
                       books proposed by various foundations as scheduled the nation over. 
                       Besides this, we offer an expansive gathering of E-Books at a reasonable value.
                      </p>
                      <p>
                      We endeavor to broaden consumer loyalty by providing food with simple 
                      easy-using web indexes, brisk and easy-to-understand installment alternatives,
                       and snappier conveyance frameworks. Upside to the majority of this, 
                       we are arranged to give energizing offers and charming limits on our books.
                      </p>
                      <p>
                      Too, we modestly welcome every one of the merchants around the nation to band 
                      together with us. We will, without a doubt, give you the stage to many
                       shimmering areas and develop the “Organization Name” family. We might 
                       want to thank you for shopping with us. You can keep in touch with us
                        for any new musings at “email-id,” helping us to ad-lib for the peruser fulfillment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default About;
