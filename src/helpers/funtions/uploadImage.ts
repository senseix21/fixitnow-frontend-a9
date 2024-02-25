import axios from "axios";

export const uploadImage = async (file: File): Promise<string | null> => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default');


        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dd5oy9xor/image/upload',
            formData
        );
        console.log(response.data.secure_url);
        return response.data.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
};