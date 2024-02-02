import React from "react";
import { useMediaQuery } from "react-responsive";

// const useScreenQuery = (): boolean => {
//     const [isLargeScreen, setIsLargeScreen] = React.useState<boolean>(false);
    
//     React.useEffect(() => {
//         setIsLargeScreen(window.innerWidth >= 1024)
//     }, [isLargeScreen]);

//     React.useEffect(() => {
//         if (window.FB) {
//             window.FB.XFBML.parse();
//         }
//     }, [isLargeScreen])

//     return isLargeScreen
// };

// export default useScreenQuery;

const useScreenQuery = () => {
    const isLargeScreen = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return isLargeScreen;
};

export default useScreenQuery;