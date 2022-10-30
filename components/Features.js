import React from 'react'

const Features = () => {
    return (
        <section id="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                {/* Whats Different */}
                <div className='flex flex-col space-y-12 md:w-1/2'>
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">What&apos;s Different about Wesy</h2>
                    <p
                        className="max-w-sm text-center text-gray-500 md:text-left"
                    >
                        Wesy Exchange is Fast and lets you receive your money in minutes
                    </p>
                </div>

                {/* Numbered List */}
                <div className='flex flex-col space-y-8 md:w-1/2'>
                    {/* List item 1 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-teal-500 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 mr-2 text-white rounded-full md:py-1 bg-teal-500">
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">Honesty</h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Honesty</h3>
                            <p
                                className="text-gray-500"
                            >
                                We understand that honesty is the best<br />
                                way to keep you coming back to us,<br />
                                and we pledge to stay glued to this, more<br />
                                reason why our deals are fair and transparent.
                            </p>
                        </div>
                    </div>
                    {/* List item 2 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-teal-500 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 mr-2 text-white rounded-full md:py-1 bg-teal-500">
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">24/7 Service</h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">24/7 Service</h3>
                            <p
                                className="text-gray-500"
                            >
                                We are always online, 24/7 ready to attend to<br />
                                your needs. Our customer service is unique in<br />
                                the sense that they are polite, attentive and warm.
                            </p>
                        </div>
                    </div>
                    {/* List Item 3 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-teal-500 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 mr-2 text-white rounded-full md:py-1 bg-teal-500">
                                    03
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">Security</h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Security</h3>
                            <p
                                className="text-gray-500"
                            >
                                There is a guaranteed zero chance of transaction<br />
                                failure. Several testimonials confirm our professionalism<br />
                                and efficiency. We offer the most flexible and prompt<br />
                                payment you’ll find.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features