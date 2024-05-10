import { useState } from "react";
import Page1DecComponent from "../Components/DecriptionComponents/Page1DecComponent";
import LoginOptionTabs from "../Components/NavigationTabs/LoginOptionTabs";

const Page2 = () => {
    const [openSideBars, setopenSideBars] = useState(false);
    return (
        <>
            <div className={`rightSideContent df ${openSideBars ? 'overlay' : ''}`}>
                {openSideBars && (
                    <div className="sideBars">
                        <LoginOptionTabs page={"Jwellery"} />
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sit earum illo numquam incidunt unde rem odit temporibus dolorum maiores ipsam, obcaecati delectus, officia nostrum voluptas impedit? Libero, voluptatum repellendus!</h1>
                    </div>
                )}
                <Page1DecComponent String={"Page2"} setopenSideBars={setopenSideBars} />
                {/* <Page1DecComponent String={"Page2"} /> */}
                <div className="RightSideTabs" onClick={() => setopenSideBars(false)}>
                    <LoginOptionTabs page={"Jwellery"} />
                </div>
                {/* <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tenetur est at, tempore veniam accusamus cumque porro eos delectus nostrum impedit quod, praesentium quisquam odit, sed expedita incidunt molestiae repudiandae.</h1> */}
            </div>
        </>
    )
}
export default Page2;