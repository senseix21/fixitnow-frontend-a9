import { toast } from "react-toastify";

export const success = (message: string) => {
    toast.info(message, {
        position: 'top-center',
        autoClose: 3000, // Adjust the duration as needed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const error = (errorMessage: string) => {
    toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 3000, // Adjust the duration as needed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
