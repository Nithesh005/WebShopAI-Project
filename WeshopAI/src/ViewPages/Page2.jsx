import Page1DecComponent from "../Components/DecriptionComponents/Page1DecComponent";
import LoginOptionTabs from "../Components/NavigationTabs/LoginOptionTabs";

const Page2 = () => {
    return (
        <>
            <div className="rightSideContent df">
                <Page1DecComponent String={"Page2"}/>
                <div className="RightSideTabs">
                    <LoginOptionTabs page={"Jwellery"}/>
                </div>
                {/* <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tenetur est at, tempore veniam accusamus cumque porro eos delectus nostrum impedit quod, praesentium quisquam odit, sed expedita incidunt molestiae repudiandae.</h1> */}
            </div>
        </>
    )
}
export default Page2;