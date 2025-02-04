import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        university: "",
        phone: "",
        message: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        setFormData({ ...formData, termsAccepted: checked });
    };

    // Inline validation function
    const validate = () => {
        let formErrors = {};
        if (!formData.firstName) formErrors.firstName = "First name is required";
        if (!formData.lastName) formErrors.lastName = "Last name is required";
        if (!formData.city) formErrors.city = "City is required";
        if (!formData.country) formErrors.country = "Country is required";
        if (!formData.university) formErrors.university = "University is required";
        if (!formData.phone) formErrors.phone = "Phone number is required";
        else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) formErrors.phone = "Phone number is invalid";
        if (!formData.message) formErrors.message = "Message is required";
        if (!formData.termsAccepted) formErrors.termsAccepted = "You must agree to the terms and conditions"; // Checkbox validation

        return formErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);

        // Proceed if no validation errors
        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);

            // Send email via EmailJS
            emailjs
                .sendForm(
                    "service_nqcxku8",  // Your Service ID
                    "YOUR_TEMPLATE_ID",  // Your Template ID
                    e.target,  // The form
                    "YOUR_PUBLIC_KEY"   // Your Public Key
                )
                .then(
                    (result) => {
                        console.log(result.text, result.status, result.text); // Use result, not response
                        setStatus('Message sent successfully!');
                        setFormData({
                            firstName: "",
                            lastName: "",
                            city: "",
                            country: "",
                            university: "",
                            phone: "",
                            message: "",
                            termsAccepted: false, // Reset the checkbox state
                        });
                        setErrors({}); // Clear any previous errors
                    },
                    (error) => {
                        console.error(error.text);
                        alert("Something went wrong, please try again.");
                    }
                );

            setIsSubmitting(false);
        }
    };



    return (
        <>
            <Helmet>
                <title>Apply Now - Secure Your Spot Today</title>
                <meta name="description" content="Don't miss out on your chance! Apply now to secure your spot or contact us for quick assistance. Call +7 9515190376 or use our online form." />
                <meta name="keywords" content="apply now, admissions, secure your spot, quick assistance, application form, contact us" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Apply Now - Secure Your Spot Today" />
                <meta property="og:description" content="Don't miss out on your chance! Apply now to secure your spot or contact us for quick assistance." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.studymedicalmbbsinrussia.co.in/apply" />
                <meta property="og:image" content="https://www.studymedicalmbbsinrussia.co.in/apply/logo.png" />
            </Helmet>

            <div className="bg-gradient-to-b from-gray-100 to-white md:max-h-[130vh] min-h-[20vh] flex flex-col items-center justify-center py-6 lg:py-10 lg:px-4">

                {/* Section for "GET IN TOUCH!" heading and info */}
                <div className="w-full text-center lg:text-left md:space-y-6 lg:-mt-8 md:-mb-14 p-2 lg:p-14">
                    <h1 className="text-5xl md:text-8xl mb-6 md:mb-2 lg:mb-12 font-bold text-[#343434]">
                        APPLY <span className="text-purple-400">NOW!</span>
                    </h1>
                    <p className="text-[#1F1F1F] font-semibold text-md md:text-2xl">
                        Don't miss out! Apply now to secure your spot or contact us at <a href="tel:+7 9515190376" className="text-[#1F1F1F]">+7 9515190376</a> for quick assistance.  or send us a message via our online form.
                    </p>
                </div>

                {/* Left and Right sections side by side */}
                <div className="flex flex-wrap lg:flex-nowrap mt-0 md:mt-4 lg:mt-0 w-full p-4 md:p-14 items-stretch gap-x-12">

                    {/* Left Side - Contact Info */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6 md:space-y-2 lg:space-y-6 flex flex-col justify-start">
                        <div className="space-y-8 md:space-y-8 lg:space-y-8 text-[#101010]">
                            <h2 className="text-2xl md:text-3xl font-semibold">
                                Start Your MBBS Journey Today! <span className="text-purple-400">Apply Now</span> for Admission Assistance.
                            </h2>
                            <p className="text-md md:text-lg font-semibold">
                                Fill out the form with your details, and our experts will guide you through the admission process. Have questions? Contact us for personalized support.
                            </p>

                            <p className="text-lg md:text-2xl lg:text-lg flex flex-row md:flex-row font-semibold items-center">
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/call-up.png" alt="Phone" className="w-8 h-8 mr-4 lg:w-5 lg:h-5 md:mb-0 md:mr-2" />
                                <a href="tel:+7 9515190376" className="hover:underline">
                                    +7 9515190376
                                </a>
                            </p>
                            <p className="text-lg md:text-lg flex flex-row font-semibold md:flex-row items-center">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/024/831/288/small_2x/3d-render-red-pin-map-location-pointer-icon-png.png" alt="Location" className="w-8 h-8 mr-2 md:w-5 md:h-5 mb-2 md:mb-0 md:mr-2" />
                                Office no. 608, 6th floor, Aggarwal Cyber Plaza-1 Netaji Subhash Place, Pitampura, New Delhi - 110034 Delhi, India
                            </p>
                        </div>

                        {/* Horizontal Border Section */}
                        <div className="hidden lg:block border-b-2 border-[#44006C] pt-6 pb-2"></div>
                        <h3 className="hidden lg:block text-3xl font-semibold">Follow Us On</h3>
                        {/* Social Icons (PNG format) */}
                        <div className="hidden lg:flex space-x-12 md:space-x-12 pt-4">
                            <a href="#" className="relative w-14 h-14 group">
                                <img src="https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png" alt="Facebook" className="w-full h-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-90" />
                            </a>
                            <a href="#" className="relative w-14 h-14 group">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt="Instagram" className="w-full h-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-90" />
                            </a>
                            <a href="#" className="relative w-14 h-14 group">
                                <img src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.png" alt="Youtube" className="w-full h-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-90" />
                            </a>
                        </div>
                    </div>


                    {/* Right Side - Contact Form */}
                    <div className="lg:w-1/2 mt-10 md:mt-8 lg:-mt-10 w-full flex justify-center">
                        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-3xl border-2 border-[#44006C] shadow-sm w-full flex-grow">
                            {/* Name Fields */}
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2 relative">
                                    <label className="block font-semibold mb-2 text-[#44006C]">Your Name  <span className="text-red-500 ml-1">*</span> </label>
                                    <div className="flex items-center">
                                        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="icon" className="w-8 h-5 top-12 absolute left-3" />
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="First"
                                            className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.firstName ? "border-red-500" : ""}`}
                                        />
                                    </div>
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                </div>
                                <div className="w-1/2 relative">
                                    <label className="block mb-2 text-[#44006C]">&nbsp;</label>
                                    <div className="flex items-center">
                                        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="icon" className="w-8 h-5 top-12 absolute left-3" />
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Last"
                                            className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.lastName ? "border-red-500" : ""}`}
                                        />
                                    </div>
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>
                            </div>

                            {/* City & Country Fields */}
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2 relative">
                                    <label className="block font-semibold mb-2 text-[#44006C]">City <span className="text-red-500 ml-1">*</span> </label>
                                    <div className="flex items-center">
                                        <img src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-modern-black-city-icon-vector-png-png-image_5709711.png" alt="city icon" className="w-4 h-6 top-12 absolute left-3" />
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            placeholder="City"
                                            className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.city ? "border-red-500" : ""}`}
                                        />
                                    </div>
                                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                                </div>

                                <div className="w-1/2 relative">
                                    <label className="block font-semibold mb-2 text-[#44006C]">Country <span className="text-red-500 ml-1">*</span> </label>
                                    <div className="flex items-center">
                                        <img src="https://static.thenounproject.com/png/2450449-200.png" alt="country icon" className="w-5 h-5 top-12 absolute left-3" />
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            placeholder="Country"
                                            className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.country ? "border-red-500" : ""}`}
                                        />
                                    </div>
                                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                                </div>
                            </div>


                            {/* University Field */}
                            <div className="mb-4 relative">
                                <label className="block font-semibold mb-2 text-[#44006C]">University <span className="text-red-500 ml-1">*</span> </label>
                                <div className="flex items-center">
                                    <img src="https://purepng.com/public/uploads/thumbnail//purepng.com-graduation-cap-clipartclipartgraduation-cap-cliparthat-cap-student-school-graduation-mortarboard-education-university-object-degree-diploma-college-graduate-6315223241997bjqy.png" alt="graduation cap icon" className="w-5 h-5 top-12 absolute left-3" />
                                    <input
                                        type="text"
                                        name="university"
                                        value={formData.university}
                                        onChange={handleInputChange}
                                        placeholder="University"
                                        className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.university ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {errors.university && <p className="text-red-500 text-sm">{errors.university}</p>}
                            </div>


                            {/* Phone Field */}
                            <div className="mb-4 relative">
                                <label className="block font-semibold mb-2 text-[#44006C]">Phone Number <span className="text-red-500 ml-1">*</span> </label>
                                <div className="flex items-center">
                                    <img src="https://pngimg.com/d/phone_PNG48982.png" alt="icon" className="w-5 h-5 top-12 absolute left-3" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91"
                                        className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.phone ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>

                            {/* Message Field */}
                            <div className="mb-4 relative">
                                <label className="block font-semibold mb-2 text-[#44006C]">Message <span className="text-red-500 ml-1">*</span> </label>
                                <div className="flex items-center">
                                    <img src="https://icons.veryicon.com/png/o/miscellaneous/ios-icon-library/message-message-3.png" alt="icon" className="w-5 h-5 top-12 absolute left-3" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Type Your Message"
                                        className={`mt-1 p-2 w-full bg-[#F5E4FF] border rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] pl-10 focus:outline-none focus:ring-2 focus:ring-[#44006C] ${errors.message ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            {/* Terms and Submit */}
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-sm">
                                    <input
                                        type="checkbox"
                                        id="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleCheckboxChange}
                                        className="mr-2"
                                    />
                                    I agree to the Terms & Conditions
                                </label>
                            </div>
                            {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>} {/* Inline error message for checkbox */}

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="text-white font-semibold py-2 px-6 lg:px-8 rounded-full"
                                    style={{
                                        background: 'linear-gradient(270deg,rgb(158, 31, 184) 0%,rgb(234, 117, 250) 100%)',
                                    }}
                                >
                                    {isSubmitting ? "Sending..." : "SUBMIT"}
                                </button>
                            </div>
                            {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
                        </form>
                    </div>
                    <div className="lg:hidden md:ml-36 ml-16 px-4">
                        <h3 className="lg:hidden text-3xl text-center mt-8 mb-4 font-bold">Follow Us On</h3>
                        {/* Social Icons (PNG format) */}
                        <div className="lg:hidden flex space-x-8 pt-4">
                            <a href="#" className="relative w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md group">
                                <img src="https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png"
                                    alt="Facebook"
                                    className="w-12 h-12 rounded-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-90" />
                            </a>
                            <a href="#" className="relative w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md group">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                                    alt="Instagram"
                                    className="w-12 h-12 rounded-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-90" />
                            </a>
                            <a href="#" className="relative w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md group">
                                <img src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.png" alt="Youtube"
                                    className="w-12 h-12 rounded-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-90" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactPage;
