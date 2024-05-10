import { Button } from '@mui/material';
import './DecComponent.css'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
const Page1DecComponent = ({ String ,setopenSideBars }) => {
    const openSideBar = () => {
        setopenSideBars(true);
    }    
    return (
        <>
            <div className="DecComponent">
                {String == "Page1" && (
                    <b>Clothing Trail</b>
                )}
                {String == "Page1" && "Showcase clothing with a variety of models that aligns with your brand’s aesthetic"}
                {String == "Page2" && (
                    <b>Jwellery Trail</b>
                )}
                {String == "Page2" && "Switch shooting scenes and model types to suit any market with any real model image"}
                <Button startIcon={<AddIcon />} variant="contained" style={{ width: '-webkit-fill-available' }} onClick={openSideBar}> New Task</Button>

            </div >
        </>
    )
}
export default Page1DecComponent;