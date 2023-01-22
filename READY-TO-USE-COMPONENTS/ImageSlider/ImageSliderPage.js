import ImageSlider from "../components/ImageSlider";

export default function ImageSliderPage() {
    const slides = [
        {
            id: 0,
            imageSrc:
                "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",
            title: "",
            caption: "Wild Landscape",
            ref: "",
        },
        {
            id: 1,
            imageSrc:
                "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg",
            title: "Landscape 2",
            caption: "Wild Landscape",
            ref: "",
        },
        {
            id: 2,
            imageSrc:
                "http://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg",
            title: "Landscape 3",
            caption: "Wild Landscape",
            ref: "https://www.google.com",
        },
        {
            imageSrc:
                "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
        },
        {
            id: 4,
            imageSrc:
                "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ5sX538vpRSulChMYF2y9aUET426aJ_716bQ6SRd4Z1c0Gy8ByLkALE3viLusd6QRhtRToVB71Hte2wy2X5s0",
            title: "Landscape 5",
            caption: "Wild Landscape",
            ref: "",
        },
    ];

    return (
        <>
            <div className="flex justify-around m-2 ">
                <div className="bg-blue-400 ">
                    <h1 className="text-2xl font-bold m-4 w-1/2">
                        Image Slider
                    </h1>
                </div>
                <div className="w-1/3 m-1">
                    <ImageSlider _slides={slides} />
                </div>
            </div>
            <div className="mx-auto p-4">
                <ImageSlider _slides={slides} />
            </div>
        </>
    );
}
