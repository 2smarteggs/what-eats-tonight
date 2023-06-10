import WEFoodCard from "./WEFoodCard.jsx";
import WEStrings from "../WEStrings.js";
import {Typography} from "@mui/material";

const WEFoodSelectionArea = () => {
    return(<div style={Styles.Area}>
        <div style={Styles.AreaHeader}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {WEStrings.selection.primary.title}
            </Typography>
        </div>
        <div style={Styles.AreaContent}>
            <WEFoodCard name={WEStrings.selection.primary.food[0].name} desc={WEStrings.selection.primary.food[0].desc} />
        </div>
    </div>);
}

const Styles = {
    Area: {
        display: 'flex',
        flexDirection: 'column',
    },
    AreaHeader: {
        padding: '1vw',
        height: '20%'
    },
    AreaContent: {
        height: '80%'
    }
}

export default WEFoodSelectionArea;