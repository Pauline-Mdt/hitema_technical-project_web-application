import React from 'react';
import Webcam from 'react-webcam';
import {UserContext} from '../../contexts/userContext';

const ImageCapture: React.FC = () => {
    const webcamRef: React.MutableRefObject<any> = React.useRef(null);
    const videoConstraints = {
        height: { min: 300 },
        aspectRatio: 2/3,
        facingMode: "user"
    };
    const {userProfile, setUserProfile} = React.useContext(UserContext);

    const captureImage = () => {
        const imageCaptured = webcamRef.current.getScreenshot();
        setUserProfile({...userProfile, picture: imageCaptured});
    };

    return (
        <div className="image-capture">
            <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            height={300}
            width={200}
        />
            <p>
                <button type="submit" className="button" onClick={captureImage}>Prendre la photo</button>
            </p>
        </div>
    );
}

export default ImageCapture;