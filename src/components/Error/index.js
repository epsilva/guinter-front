import React from 'react';
import Lottie from 'react-lottie-web';
import animationBook from '~/assets/lotties/error.json';

export default function Error() {
    return (
        <Lottie
            height={120}
            width={120}
            options={{
                animationData: animationBook,
            }}
        />
    );
}
