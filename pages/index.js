import Head from "next/head";
import Image from "next/image";
import Browsepropertiesmv from "./Browsepropertiesmv";
import Brands from "./components/Webapp/Brandsportion/Brands";
import Featureview from "./components/Webapp/Featureevent/Featureview";
import Mvdownmenu from "./components/Webapp/MvDown/Mvdownmenu";
import Propertycardview from "./components/Webapp/Card/Propertycardview";
import Topinvestview from "./components/Webapp/Topinvest/Topinvestview";
import Videogrid from "./components/Webapp/Video/Videogrid";
import Banner from './components/Web/Banner/index'
import Navbar from "./Navbar";
import Searchbarmv from "./Searchbarmv";

export default function Home() {
  return (
    <>
{/* Mobile View */}
      <div className="grid grid-row-3 gap-0 md:hidden ">
        <Navbar />
        <div>
          {" "}
          <Searchbarmv />
        </div>

        <div>
          <Browsepropertiesmv />
        </div>
        <div>
          {" "}
          <Topinvestview />{" "}
        </div>
        <div>
          {" "}
          <Featureview />{" "}
        </div>
        <div>
          {" "}
          <Propertycardview />{" "}
        </div>
        <div>
          <Videogrid />{" "}
        </div>
        <div>
          {" "}
          <Brands />{" "}
        </div>
        <div className="mt-3">
          <Mvdownmenu />
        </div>
      </div>
{/* Mobile View End */}
<div className="hidden  md:visible md:grid md:grid-col-1 md:gap-0 ">
<div>
<Banner/>
</div>

</div>
{/* Web View */}



{/* Web View End */}
    </>
  );
}
