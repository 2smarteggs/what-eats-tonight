import WEHeader from "./components/WEHeader.jsx";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import WEFoodSelectionArea from "./components/WEFoodSelectionArea.jsx";

function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );


    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <WEHeader/>
                <WEFoodSelectionArea />
            </ThemeProvider>
        </>
    );
}

export default App
