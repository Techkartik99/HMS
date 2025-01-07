import React from 'react';
import Input from "../../Components/Input";
import Select, { Option } from '../../Components/Select';
import { BACKEND_URL } from "../../../config";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from 'react-router-dom';

const AddHotel = () => {
  const navigate = useNavigate();
  const [details, setDetails] = React.useState({
    name: "",
    area: "",
    city: "",
    state: "",
    price: null,
    unmarriedFriendly: null,
    image: null,
    AcRoomA: null,
    NonAcRoomA: null,
    TotalAc: null,
    TotalNonAc: null
  });

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  function handleChange(type, e) {
    setDetails({
      ...details,
      [type]: type === "name" ? e.target.value.toUpperCase() : e.target.value // Ensure name is stored in uppercase
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!details.name || !details.area || !details.city || !details.state || !details.price || !details.image ||
      details.AcRoomA === null || details.NonAcRoomA === null || !details.TotalAc || !details.TotalNonAc) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    let formData = new FormData();
    formData.append("name", details.name);
    formData.append("area", details.area);
    formData.append("city", details.city);
    formData.append("state", details.state);
    formData.append("price", details.price);
    formData.append("unmarriedFriendly", details.unmarriedFriendly);
    formData.append("file", details.image);
    formData.append("AcRoomA", details.AcRoomA);
    formData.append("NonAcRoomA", details.NonAcRoomA);
    formData.append("TotalAc", details.TotalAc);
    formData.append("TotalNonAc", details.TotalNonAc);

    try {
      const response = await axios.post(`${BACKEND_URL}/owner/addhotel`, formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      toast.success("Hotel added successfully!");
      setTimeout(() => {
        navigate("/seller/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Error adding hotel");
      console.log("Error adding hotel", error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-[#2D2D2D] via-[#3C4A57] to-[#5D6A6B] rounded-xl shadow-lg">
      <Toaster />
      <h1 className="text-4xl font-bold text-center text-white mb-6">Add New Hotel</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Name</label>
            <Input
              type="text"
              placeholder="Hotel Name"
              
              value={details.name} // Displays the name in uppercase
              onChange={(e) => handleChange("name", e)}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white uppercase bg-gray-800"
            />
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Area</label>
            <Input
              type="text"
              placeholder="Area"
              value={details.area}
              onChange={(e) => handleChange("area", e)}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
  <label className="text-white font-semibold mb-2">City</label>
  <Input
    type="text"
    placeholder="City"
    value={details.city}
    onChange={(e) => handleChange("city", e)}
    className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
  />
</div>


          <div className="flex flex-col">
  <label className="text-white font-semibold mb-2">State</label>
  <Select
    onChange={(e) => handleChange("state", e)}
    value={details.state}
    className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
  >
    <Option value="">Select</Option>
    {states.map((item, index) => (
      <Option key={index} value={item}>{item}</Option>
    ))}
  </Select>
</div>


          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Price</label>
            <Input
              type="number"
              placeholder="Price"
              value={details.price}
              onChange={(e) => handleChange("price", e)}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Unmarried Friendly</label>
            <Select
              onChange={(e) => handleChange("unmarriedFriendly", e)}
              value={details.unmarriedFriendly}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            >
              <Option value="">Select</Option>
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Image</label>
            <Input
              type="file"
              onChange={(e) => setDetails({ ...details, image: e.target.files[0] })}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Ac Room Available</label>
            <Select
              
              onChange={(e) => handleChange("AcRoomA", e)}
              value={details.AcRoomA}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            >
              <Option value="">Select</Option>
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">Non-Ac Room Available</label>
            <Select
              onChange={(e) => handleChange("NonAcRoomA", e)}
              value={details.NonAcRoomA}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            >
              <Option value="">Select</Option>
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">TotalAc</label>
            <Input
              type="number"
              placeholder="Total Ac Rooms"
              value={details.TotalAc}
              onChange={(e) => handleChange("TotalAc", e)}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
          <label className="text-white font-semibold mb-2">TotalNonAc</label>
            <Input
              type="number"
              placeholder="Total Non-Ac Rooms"
              value={details.TotalNonAc}
              onChange={(e) => handleChange("TotalNonAc", e)}
              className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-gray-800"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={(e) => handleSubmit(e)}
            className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;
