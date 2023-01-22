React Tailwind projeleri icin geliştirilmiş bir ImageSlider componenti.

ImageSlider.js dosyasını projenize dahil edip ImageSlider komponentine ornekdeki gibi props vererek kullanabilirsiniz. Sliderin ornek goruntuleri images klasorunde bulunmaktadir.

```js
const slides = [
    {
    export default function ImageSliderPage() {
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
            "http://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg",
        title: "Landscape 3",
        caption: "Wild Landscape",
        ref: "https://www.google.com",
    },
    {
        imageSrc:
            "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
    },
];

return (
    <>
        <div className="mx-auto p-4">
            <ImageSlider _slides={slides} />
        </div>
    </>
);
```
