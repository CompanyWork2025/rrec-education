import React from "react";

const WhyChoose = () => {
    // Array containing data for each card
    const chooseUsCards = [
        {
            id: 1,
            title: "EXPERT ADMISSION GUIDANCE",
            description:
                "We provide step-by-step assistance in university selection, document preparation, and admission procedures to ensure a smooth application process.",
        },
        {
            id: 2,
            title: "AFFORDABLE EDUCATION OPTIONS",
            description:
                "We help students access high-quality education at Russian universities with affordable tuition fees and budget-friendly living expenses.",
        },
        {
            id: 3,
            title: "COMPLETE VISA SUPPORT",
            description:
                "From visa application to processing, we guide students through the entire procedure, ensuring a hassle-free journey to their dream university.",
        },
        {
            id: 4,
            title: "RECOGNIZED UNIVERSITIES",
            description:
                "We collaborate with top government-recognized Russian universities, ensuring students receive globally accepted degrees.",
        },
        {
            id: 5,
            title: "STUDENT SUPPORT SERVICES",
            description:
                "Our dedicated team assists students with accommodation, medical insurance, and post-arrival services to help them settle comfortably.",
        },
        {
            id: 6,
            title: "CAREER OPPORTUNITIES",
            description:
                "With degrees recognized worldwide, students can explore global career prospects in various fields after graduation.",
        },
    ];

    return (
        <div className="bg-white py-2 px-4 md:px-8 lg:px-16 mb-8 lg:mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-start md:mb-24 mb-12">
                WHY <span className="text-blue-400">CHOOSE</span> US?
            </h2>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0">
                {chooseUsCards.map((card, index) => (
                     <div
                     key={card.id}
                     className={`group flex flex-col border-t border-b md:border-r border-black items-start text-start p-6 md:p-8 lg:p-8 relative ${
                         // Removing border-right for 2nd, 4th, and 6th cards
                         (index === 1 || index === 3 || index === 5) ? 'md:border-r-0 lg:border-r-0' : ''
                     } ${
                         // Adding left border for 3rd card only on large screens
                         index === 2 ? 'lg:border-l lg:border-r-0 ': ''
                     }${
                        // Adding left border for 3rd card only on large screens
                        index === 4 ? 'lg:border-l' : ''
                    }
                     `}
                 >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            style={{
                                backgroundImage: `url('https://gifdb.com/images/high/cinematic-night-city-shot-01tjsobv8vxh3g2j.gif')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>

                        {/* Card Content */}
                        <div className="relative z-10">
                            {/* Circle number placed outside the card but fully visible */}
                            <div className="absolute -top-12 -left-6 lg:-left-6 lg:-top-14 md:left-28 md:-top-14 flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white text-lg font-bold z-20">
                                {String(card.id).padStart(2, '0')}
                            </div>
                            <h3 className="font-bold text-lg mt-6 mb-2 transition-colors duration-300 group-hover:text-white">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                                {card.description}
                            </p>
                        </div>

                        {/* Purple box button with arrow */}
                        <button className="absolute bottom-0 right-0 w-12 h-12 bg-blue-400 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-transparent border-2 border-transparent">
                            <img src='https://www.svgrepo.com/show/315417/arrow-top-left.svg' alt="arrow" className="w-8 h-8" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChoose;
