import React from 'react';
import ImageCapture from '../parts/ImageCapture';
import {useNavigate} from 'react-router-dom';
import UserForm from '../parts/UserForm';

const Submission: React.FC = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 300000);

        return () => clearTimeout(timer);
    });

    return (
        <>
            <div className="submission">
                <ImageCapture />
                <UserForm />
            </div>
        </>
    );
}

export default Submission;