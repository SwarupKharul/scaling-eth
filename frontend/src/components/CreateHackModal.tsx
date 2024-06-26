"use client";

import { FC } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import AHackathonManager from "../artifacts/contracts/HackathonManager.sol/AHackathonManager.json";
import CHackathonManager from "../artifacts/contracts/HackathonManager.sol/CHackathonManager.json";
import { Acontract_add, Ccontract_add } from "../artifacts/config";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract, formatUnits, parseEther } from "ethers";
import { UploadIcon } from "@/assets/UploadIcon";

interface ModalFormProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const CreateHackModal: React.FC<ModalFormProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const initialHackData = {
    _name: "",
    _organisedby: "",
    _description: "",
    _date: "",
    _city: "",
    _exp: "yes",
    _category: "",
  };

  const [hackData, setHackData] = useState(initialHackData);
  const { id } = useParams();
  console.log(id);
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(hackData);
    if (!walletProvider) {
      console.log("Wallet provider is not available.");
      return;
    }
    const ethersProvider = new BrowserProvider(walletProvider);
    const signer = await ethersProvider.getSigner();

    if (chainId === 1115) {
      const resp = new Contract(Ccontract_add, CHackathonManager.abi, signer);
      const tx = await resp.createHackathon(
        hackData._name,
        hackData._organisedby,
        hackData._description,
        hackData._date,
        hackData._city,
        hackData._exp,
        hackData._category,
        { value: parseEther("0.005") }
      );
      await tx.wait();
    } else if (chainId === 421614) {
      const resp = new Contract(Acontract_add, AHackathonManager.abi, signer);
      const tx = await resp.createHackathon(
        hackData._name,
        hackData._organisedby,
        hackData._description,
        hackData._date,
        hackData._city,
        hackData._exp,
        hackData._category,
        { value: parseEther("0.005") }
      );
      await tx.wait();
    }

    // Example of using ethers.js to interact with the smart contract
    // console.log("Project created!", resp);
  };

  if (!modalOpen) return null;
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm ">
      <div className="relative my-6 mx-auto">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-auto w-[1000px] bg-[#282828] outline-none focus:outline-none ">
          <div className="flex items-start justify-between pt-5 px-5">
            <h3 className="text-4xl px-5 font-semibold font-thunder text-white">
              CREATE HACKATHON
            </h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={(e) => setModalOpen(!modalOpen)}
            >
              <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          {/* <div className="bg-transparent flex flex-col cursor-pointer relative">
            <UploadIcon className="fill-white mx-auto mt-3" />
            <input
              type="file"
              //   onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="text-[#3F3F3F] cursor-pointer opacity-0 bg-white rounded-xl p-3 absolute inset-0"
            />
            <button className="text-white border-white border p-3 dm-mono-regular text-sm font-semibold mt-2 mx-auto">
              Upload Image
            </button>
          </div> */}
          <div className="relative p-3 flex-auto">
            <form
              className="bg-transparent rounded px-8 pt-3 pb-8 w-full"
              onSubmit={handleSubmit}
            >
              <label className="dm-mono-regular block text-white text-sm font-semibold mb-1">
                Event Name *
              </label>
              <input
                type="text"
                className="w-full dm-mono-regular h-14 block bg-[#1A1A1A] placeholder:text-[#838383] text-white rounded-md px-2 py-5 mt-2 mb-2 mr-10 text-sm focus:outline-none transition transform duration-100 ease-out"
                required
                value={hackData._name}
                placeholder="Enter name here"
                onChange={(e) =>
                  setHackData({ ...hackData, _name: e.target.value })
                }
              />
              <label className="dm-mono-regular block text-white text-sm font-semibold mb-1">
                Organizer Name *
              </label>
              <input
                type="text"
                className="w-full dm-mono-regular h-14 block bg-[#1A1A1A] placeholder:text-[#838383] text-white rounded-md px-2 py-5 mt-2 mb-2 mr-10 text-sm focus:outline-none transition transform duration-100 ease-out"
                required
                value={hackData._organisedby}
                placeholder="Enter Organizer name"
                onChange={(e) =>
                  setHackData({ ...hackData, _organisedby: e.target.value })
                }
              />
              <label className="dm-mono-regular block text-white text-sm font-semibold mb-1">
                Description *
              </label>
              <input
                type="text"
                className="w-full dm-mono-regular h-20 block bg-[#1A1A1A] placeholder:text-[#838383] text-white rounded-md px-2 py-5 mt-2 mb-2 mr-10 text-sm focus:outline-none transition transform duration-100 ease-out"
                required
                value={hackData._description}
                placeholder="Brief description"
                onChange={(e) =>
                  setHackData({ ...hackData, _description: e.target.value })
                }
              />
              <label className="dm-mono-regular block text-white text-sm font-semibold mb-1">
                Date of Event *
              </label>
              <input
                type="text"
                className="w-full dm-mono-regular h-20 block bg-[#1A1A1A] placeholder:text-[#838383] text-white rounded-md px-2 py-5 mt-2 mb-2 mr-10 text-sm focus:outline-none transition transform duration-100 ease-out"
                required
                value={hackData._date}
                placeholder="Enter proposed event Dates"
                onChange={(e) =>
                  setHackData({ ...hackData, _date: e.target.value })
                }
              />
              <label className="dm-mono-regular block text-white text-sm font-semibold mb-1">
                Category *
              </label>
              <input
                type="text"
                className="w-full dm-mono-regular h-14 block bg-[#1A1A1A] placeholder:text-[#838383] text-white rounded-md px-2 py-5 mt-2 mb-2 mr-10 text-sm focus:outline-none transition transform duration-100 ease-out"
                required
                value={hackData._category}
                placeholder="Category of the event"
                onChange={(e) =>
                  setHackData({ ...hackData, _category: e.target.value })
                }
              />
              <label className="dm-mono-regular block text-white text-sm font-semibold mb-1">
                City *
              </label>
              <input
                type="text"
                className="w-full dm-mono-regular h-14 block bg-[#1A1A1A] placeholder:text-[#838383] text-white rounded-md px-2 py-5 mt-2 mb-2 mr-10 text-sm focus:outline-none transition transform duration-100 ease-out"
                required
                value={hackData._city}
                placeholder="City"
                onChange={(e) =>
                  setHackData({ ...hackData, _city: e.target.value })
                }
              />
              <button className="dm-mono-medium bg-white text-black w-full h-14 rounded-md mt-5">
                CREATE EVENT
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default CreateHackModal;
