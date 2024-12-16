"use client";

import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <div className="bg-primary pb-5">
      <SubHeader />
      <MainHeader />
    </div>
  );
};

export default Header;
