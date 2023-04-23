import React from 'react'

const About = () => {
    return (
        <>
            <div className="flex flex-col text-center w-full mb-12">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    About Us
                </div>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services.
                </p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    The company’s world headquarters are situated near Beaverton, Oregon, in the Portland metropolitan area (USA). It is a major producer of sports equipment and one of the world’s largest suppliers of athletic shoes and apparel.
                </p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Apart from its own brand, Nike market its products under Nike Pro, Nike+, Nike Golf, Nike Blazers, Air Jordan, Air Max and other as well as subsidiaries including brands  Jordan, Hurley Int. and Converse.
                </p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of “Just Do It” and the Swoosh logo (which represents the wing of the Greek goddess Nike).
                </p>
            </div>

            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Cushioning for Your Miles
                </div>
                <div className="text-md md:text-xl">
                    A lightweight Nike ZoomX midsole is combined with
                    increased stack heights to help provide cushioning
                    during extended stretches of running.
                </div>
            </div>
        </>
    )
}

export default About
