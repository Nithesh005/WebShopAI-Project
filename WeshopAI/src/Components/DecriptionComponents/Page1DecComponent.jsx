import { Button } from '@mui/material';
import './DecComponent.css'
import AddIcon from '@mui/icons-material/Add';
const Page1DecComponent = ({ String }) => {
    return (
        <>
            <div className="DecComponent">
                {String == "Page1" && (
                    <b>Clothing Trail</b>
                )}
                <h2>{String == "Page1" && "Showcase clothing with a variety of models that aligns with your brand’s aesthetic"}</h2>
                {String == "Page2" && (
                    <b>Jwellery Trail</b>
                )}
                <h2>{String == "Page2" && "Switch shooting scenes and model types to suit any market with any real model image"}</h2>
                <br />
                <Button  startIcon={<AddIcon />} variant="contained" style={{ width: '-webkit-fill-available' }}> New Task</Button>
            </div >
        </>
    )
}
export default Page1DecComponent;