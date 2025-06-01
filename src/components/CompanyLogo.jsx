import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocomerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLogo = () => {

    const logos = [slack, amazon, woocomerce, meundies, sitepoint];
  return (
    <div className='w-full container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start overflow-x-hidden'>
      <div className='w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-400 bg-white py-2 px-6 z-10 sm:text-base text-xl font-semibold text-left'>
        Proud partner at <br /> Hubspot & Segment
      </div>

      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
            <img src={logo} alt="Company Logo" key={index} className="mx-12 h-8 w-36 object-contain cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
        ))}

        {logos.map((logo, index) => (
            <img src={logo} alt="Company Logo" key={`duplicate-${index}`} className="mx-12 h-8 w-36 cursor-pointer object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogo
