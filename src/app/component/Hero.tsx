import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="flex justify-between">
        <div className="">
          <a href="" title="Go to home" className="flex " rel="home">
            <img
              id="logo"
              className="p-3"
              src="https://unakoti.nic.in/wp-content/themes/district-theme-5/images/emblem-dark.png"
              alt="State Emblem of India"
            />
            <div className="pl-4 pt-8">
              <strong lang="bn" className="text-[20px]">
                কুমারঘাট আর.ডি. ব্লক{" "}
              </strong>
              <h1 className="text-[28px]">Kumarghat R.D. Block</h1>
            </div>
          </a>
        </div>
        <div className="header-right clearfix">
          <div className="right-content clearfix">
            <div className="flex gap-2">
              <a href="https://panchayat.gov.in">
                <Image
                  className="m-3 bg-white"
                  src={"/Panchayat LOGO PNG.png"}
                  alt="Panchyat Raj"
                  width={90}
                  height={95}
                />
              </a>

              <a href="https://panchayat.gov.in">
                <Image
                  className="m-3"
                  src={"/LSDG logo.png"}
                  alt="LSDG logo"
                  width={100}
                  height={105}
                />
              </a>
              <a href="https://nrega.nic.in">
                <Image
                  className="m-3"
                  src={"/MGNREGA_Logo PNG.png"}
                  alt="MGNREGA_Logo PNG"
                  width={70}
                  height={80}
                />
              </a>
              <a href="https://trlm.tripura.gov.in">
                <Image
                  className="m-3"
                  src={"/TRLM logo PNG.png"}
                  alt="TRLM logo PNG"
                  width={90}
                  height={95}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-black" />
    </section>
  );
};

export default Hero;
