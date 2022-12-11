import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io5";
import * as HiIcons from "react-icons/hi2";

const dummyList = [
  {
    title: "Edit",
    icon: <FiIcons.FiEdit />,
    path: "",
    onClick: "",
  },
  {
    title: "Duplicate",
    icon: <IoIcons.IoDocuments />,
    path: "",
    onClick: function () {
      console.log("Duplicated...");
    },
  },
  {
    title: "Archive",
    icon: <HiIcons.HiArchiveBox />,
    path: "/archive",
    onClick: "",
  },
  {
    title: "Move",
    icon: <HiIcons.HiArrowRightCircle />,
    path: "/move",
    onClick: "",
  },
  {
    title: "Share",
    icon: <HiIcons.HiUserPlus />,
    path: "/share",
    onClick: "",
  },
  {
    title: "Add to Favorites",
    icon: <HiIcons.HiHeart />,
    path: "/favorites",
    onClick: "",
  },
  {
    title: "Delete",
    icon: <HiIcons.HiTrash />,
    path: "",
    onClick: function() {
      console.log("Item Deleted...");
    },
  },
];

export default dummyList;
