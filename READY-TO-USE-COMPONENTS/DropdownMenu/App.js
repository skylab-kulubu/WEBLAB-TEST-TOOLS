import Dropdown from "./Dropdown.js";
import dummyList from "./DummyList.js";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Dropdown list={dummyList} />
    </div>
  );
}

// Dropdown componentinin 'list' adlı propsuna aşağıdaki formatta bi array yerleştirin:
//
// const ornekArray = [
//   {
//     title: "isim-1",
//     icon: <ikon-componenti-1 />,
//     path: "/route-1",           (gidilecek route yoksa "" bırakılabilir)
//     onClick: birFonksiyon(),    (gerçekleşecek fonksiyon yoksa "" bırakılabilir)
//   },
//   {
//     title: "isim-2",
//     icon: <ikon-componenti-2 />,
//     path: "",
//     onClick: "",
//   },
// ];

export default App;
