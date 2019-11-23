import React from 'react';
import Lottie from 'react-lottie-web';
import animationBook from '~/assets/lotties/loading.json';

export default function Loading() {
    return (
        <Lottie
            height={80}
            width={80}
            options={{
                animationData: animationBook,
            }}
        />
    );
}
