import {Typography} from "@mui/material";
import WEStrings from "../WEStrings.js";

const WEHeader = () => {
    return(<>
        <Typography variant="h3" gutterBottom>
            {WEStrings.header.mainTitle}
        </Typography>
    </>)
}

export default WEHeader;