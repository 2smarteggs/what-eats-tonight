import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import WEStrings from "../WEStrings.js";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const WEHeader = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={Styles.AppBar}>
                <Toolbar>
                    <DinnerDiningIcon sx={Styles.AppBarIcon} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {WEStrings.header.mainTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const Styles = {
    AppBar: {
        width: '100vw',
    },
    AppBarIcon: {
        display: { xs: 'none', md: 'flex' },
        mr: 1
    },
}

export default WEHeader;