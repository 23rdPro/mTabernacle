import Countdown from "react-countdown";

export const useRenderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
        return null 
    } else {
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
}