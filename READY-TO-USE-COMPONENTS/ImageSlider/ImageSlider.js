import { useState, useEffect } from "react";

export default function ImageSlider({ _slides }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [showArrow, setShowArrow] = useState(true);
    const slides = _slides;
    const arrowTimeout = 3000;

    function nextSlide() {
        setShowArrow(true);
        if (currentSlideIndex === slides.length - 1) {
            setCurrentSlideIndex(0);
            return;
        }
        setCurrentSlideIndex(currentSlideIndex + 1);
    }

    function previousSlide() {
        setShowArrow(true);
        if (currentSlideIndex === 0) {
            setCurrentSlideIndex(slides.length - 1);
            return;
        }
        setCurrentSlideIndex(currentSlideIndex - 1);
    }

    function goToSlide(index) {
        setShowArrow(true);
        setCurrentSlideIndex(index);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowArrow(false);
        }, arrowTimeout);
        return () => clearTimeout(timer);
    }, [showArrow]);

    function imageTransition(index) {
        if (currentSlideIndex === index) {
            return " -translate-x-1/2 -translate-y-1/2 ";
        }
        if (currentSlideIndex < index) {
            return " translate-x-full scale-75 -translate-y-1/2 ";
        }
        if (currentSlideIndex > index) {
            return "-translate-x-1/2 scale-75 translate-y-full ";
        } else {
            return "translate-x-1/2 translate-y-1/2 ";
        }
    }

    return (
        <div className="">
            <div id="default-carousel" className="relative ">
                <div className="relative z-0 h-40  overflow-hidden rounded-lg sm:h-56  md:h-96">
                    {slides.map((slide, index) => {
                        return (
                            <>
                                <span
                                    className={
                                        "absolute z-20 text-sm md:text-xl transition-all ease-in-out   duration-150 font-semibold text-white mt-4 -translate-x-1/2 -translate-y-1/2 bottom-3 md:bottom-10 left-1/2  dark:text-gray-800 " +
                                        (currentSlideIndex === index
                                            ? "opacity-90"
                                            : "opacity-0")
                                    }
                                >
                                    {slide.title ? slide.title : null}
                                </span>
                                <img
                                    src={slide.imageSrc}
                                    className={
                                        imageTransition(index) +
                                        "  top-1/2 left-1/2 absolute block object-contain w-full h-full transition-transform ease-in-out duration-500 "
                                    }
                                    // "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                                    alt={slide.caption ? slide.caption : ""}
                                    onClick={() => {
                                        // go to ref
                                        if (
                                            slide.ref != "" &&
                                            slide.ref != null
                                        ) {
                                            window.location.href = slide.ref;
                                        }
                                    }}
                                    key={slide.id ? slide.id : index}
                                />
                            </>
                        );
                    })}
                </div>

                <div className="absolute z-40  flex items-center space-x-3 -translate-x-1/2 bottom-2 md:bottom-5 left-1/2">
                    {slides.map((slide, index) => {
                        return (
                            <button
                                type="button"
                                className={
                                    (currentSlideIndex === index
                                        ? "w-2 h-2 md:w-4 md:h-4"
                                        : "w-2 h-1 md:w-3 md:h-2") +
                                    " bg-slate-500 rounded-full px-2 mx-2 shadow-md transition-all ease-in-out duration-200  "
                                }
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className={
                        "absolute top-0 left-0 z-30 flex items-center justify-center h-full mx-2 md:mx-8 cursor-pointer group focus:outline-none transition-all ease-in-out   duration-150" +
                        (showArrow ? " opacity-100" : " opacity-20")
                    }
                    onClick={previousSlide}
                >
                    <span
                        className={
                            "inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                        }
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                            ></path>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className={
                        "absolute top-0 right-0 z-30 flex items-center justify-center h-full mx-2 md:mx-8   cursor-pointer group focus:outline-none transition-all ease-in-out   duration-150" +
                        (showArrow ? " opacity-100" : " opacity-20")
                    }
                    onClick={nextSlide}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
