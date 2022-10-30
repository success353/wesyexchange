import React from 'react'

const Hero = () => {
    return (
        <section id="hero">
            <div
                className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
            >
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1
                        className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
                    >
                        Trade your Gift Cards for Crypto
                    </h1>
                    <p
                        className="max-w-sm text-center text-gray-500 md:text-left"
                    >
                        Wesy Makes it easier to trade your Gift Cards and Cryptos
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero