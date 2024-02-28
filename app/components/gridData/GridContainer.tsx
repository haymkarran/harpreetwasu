import React from 'react';

interface GridDataProps {
  gridCols: string;
  // React.ReactNode allows any type of React element (components, elements, etc.)
  children: React.ReactNode;
}

const GridContainer: React.FC<GridDataProps> = ({ gridCols, children }) => {
  return (
    <>
      <div className={`grid ${gridCols} smPhone:gap-2 mdPhone:gap-3.6 lgPhone:gap-2.5 xlPhone:gap-2.5 flexScreen:gap-2.5 smTablet:gap-4.5 lgTablet:gap-5 smLaptop:gap-5 lgLaptop:gap-5 min1661px:gap-12`}>
        {children}
      </div>
    </>
  );
};

export default GridContainer;