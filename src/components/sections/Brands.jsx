import React from 'react';
import { brands } from '../../constants/data';

const Brands = ({ t }) => {
  const logoHeight = "h-8 md:h-12";
  return (
    <div className="py-20 relative overflow-hidden h-auto flex flex-col items-center gap-0">
      <div className="premium-badge-purple">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-sm h-1.5 w-1.5 bg-primary"></span>
        </span>
        {t.brands.badge}
      </div>
      
      <div className="w-full relative flex items-center h-48 md:h-64 -mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
        <div className="flex w-max animate-brand-scroll gap-0 items-center px-4">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="w-[120px] md:w-[320px] shrink-0 flex items-center justify-center grayscale">
              <img src={brand.logo} alt={brand.name} className={`max-w-full w-auto ${brand.size || logoHeight} logo-white object-contain`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
