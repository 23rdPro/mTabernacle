import React from "react";
import axios from "axios";

export const useForm = () => {
    React.useEffect(() => {
        try {
            const postForm = async () => {
                const form = await axios.post('/api/form', {})
            }
            postForm();
        } catch (error) {
            console.error(error)
        }
    });
}