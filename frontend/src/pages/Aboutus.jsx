import React from "react";
import { useBrandContext } from "../context";

const Aboutus = () => {
  const { siteConfig } = useBrandContext();
  return (
    <>
      <div className="container-fluid">
        <div className="container-sm mb-3">
          <div className="row py-4">
            <div className="col-lg">
              <h1 className="display-2 font-semibold text-center">
                <span className="text-prime">{siteConfig.appName}</span> {siteConfig.aboutUsHeroHeading}
              </h1>
            </div>
          </div>
        </div>
        <div className="container-sm mb-3">
          <div className="row py-4">
            <div className="col-lg">
              <img
                src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg">
              <h3 className="text-prime h3">About us</h3>
              <p>
                {siteConfig.aboutUsDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
