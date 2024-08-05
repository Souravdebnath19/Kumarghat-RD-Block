"use client";
import { useState, forwardRef } from "react";

interface AboutBlockProps {
  // You can add other props here if needed
}

const AboutBlock = forwardRef<HTMLDivElement, AboutBlockProps>((props, ref) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div ref={ref} className="w-[75%] m-4">
      <h1 id="Body" className="text-3xl font-bold mb-2">
        ABOUT BLOCK
      </h1>
      <p className="text-gray-600 ">
        Kumarghat R.D.Block started its journey in the year 1955. This block is
        under administrative control of Unakoti District. This block falls under
        two assembly constituencies namely: - 50-Pabiacherra Assembly
        Constituency and 51- Fatikroy Assembly Constituency under 2-East Tripura
        Parliamentary (ST) Constituency.
      </p>
      <p className="text-gray-600">
        Geographically speaking this block area is mostly plain lands with and
        small area in hilly land in between with an area of 267 Sq. Km. The
        coordinates of kumarghat RD Block lies between 24° 16´North (Latitude) &
        92° 04´ East (Longitude). The main river is Manu, which is also the
        longest river of Tripura. The climate condition of the Block area is
        mostly warm and humid with a dry cool winter for a short Period.
        Temperature varies from a maximum 36 ° C (approx) to a minimum 5 ° C
        (approx) range and the average annual rainfall is 2000 mm. At present
        Kumarghat R.D. Block consists of 25 nos. Gram Panchayats & 9 nos. ADC
        Villages with a Population of 106914 nos. Demographically the Population
        is divided into Bengali & Tribal Community peoples. Basic economical
        activity of the people of this Block is Agriculture. Main crop is Paddy,
        but now people are more attracted towards Rubber plantation and others
        Horticulture based plantations.
      </p>
    </div>
  );
});

AboutBlock.displayName = "AboutBlock"; // This is necessary to avoid naming issues with forwardRef

export default AboutBlock;
