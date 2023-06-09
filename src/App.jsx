import WEHeader from "./components/WEHeader.jsx";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";

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
            </ThemeProvider>
        </>
    );
}

export default App
