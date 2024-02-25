import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { getUserInfo } from '@/services/auth.services';
import { User } from '@/types';

type BookingFormData = {
    name: string;
    phone: string;
    email: string;
    slot: string;
};

const BookingModal: React.FC<{ treatments: any; selected: Date; setTreatments: any; refetch: () => void }> = ({
    treatments,
    selected,
    setTreatments,
    refetch,
}) => {
    const user: User | unknown = getUserInfo();
    const { name, slots, price } = treatments;
    const date = format(selected, 'PP');

    const { register, handleSubmit } = useForm<BookingFormData>();

    const handleModalSubmit: SubmitHandler<BookingFormData> = (data) => {
        // Combine form data with additional treatment details
        const patient = {
            treatment: name,
            patient: data.name,
            date,
            slot: data.slot,
            phone: data.phone,
            email: data.email,
            price,
        };

        // Log the patient data and reset the form
        console.log(patient);
        setTreatments(null);

        // Make your API call or other actions here
        // ...

        // Reset the form after submission
        // Note: You might need to add logic to handle API calls and form reset asynchronously
        // form.reset();
    };

    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex justify-between items-center">
                        <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">
                            ✕
                        </label>
                        <h4 className="font-bold">{name}</h4>
                    </div>
                    {/* Form with react-hook-form */}
                    <form onSubmit={handleSubmit(handleModalSubmit)} className="mx-auto mt-10 text-center">
                        <input
                            type="text"
                            value={date}
                            placeholder="Type here"
                            className="input input-bordered w-full  mb-3"
                            readOnly
                        />

                        <input
                            type="text"
                            defaultValue={user.displayName}
                            placeholder="Fullname"
                            className="input input-bordered w-full  mb-3"
                            required
                            readOnly
                            {...register('name')}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered w-full  mb-3"
                            required
                            {...register('phone')}
                        />
                        <input
                            type="email"
                            defaultValue={user.email}
                            placeholder="Email"
                            className="input input-bordered w-full  mb-3"
                            required
                            readOnly
                            {...register('email')}
                        />
                        <button type="submit" className="btn btn-outline btn-primary w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
