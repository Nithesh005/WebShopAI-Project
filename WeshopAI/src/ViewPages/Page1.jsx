import { useState } from "react";
import Page1DecComponent from "../Components/DecriptionComponents/Page1DecComponent";
import LoginOptionTabs from "../Components/NavigationTabs/LoginOptionTabs";
import './pages.css'
const Page1 = () => {
    const [openSideBars, setopenSideBars] = useState(false);

    return (
        <>
            <div className={`rightSideContent df ${openSideBars ? 'overlay' : ''}`}>
                {openSideBars && (
                    <div className="sideBars">
                        <LoginOptionTabs page={"clothing"} />
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis laboriosam, quisquam tempora adipisci animi esse autem dolorem non iure! In ipsum praesentium harum sunt quo deserunt qui voluptas? Ratione, dolores?</h1>
                    </div>
                )}
                <Page1DecComponent String={"Page1"} setopenSideBars={setopenSideBars} />
                <div className="RightSideTabs" onClick={() => setopenSideBars(false)}>
                    <LoginOptionTabs page={"clothing"} />
                </div>
            </div>
        </>
    )
}
export default Page1;