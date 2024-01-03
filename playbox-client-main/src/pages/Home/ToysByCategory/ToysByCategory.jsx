import React, { useEffect, useState } from 'react';
import ToyByCategory from '../ToyByCategory/ToyByCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ToysByCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);

    }
    useEffect(() => {
        fetch(`https://playbox-server.vercel.app/all/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setToys(result);
            })
    }, [activeTab])

    console.log(toys)
    return (
        <div className='text-center'>
            <SectionTitle heading='Shop By Category' subHeading='Browse Our Collection'></SectionTitle>
            <div className='flex flex-wrap justify-center'>
                <div onClick={() => handleTabClick("Pokemon")} className={` rounded   font-semibold px-6 py-4 shadow-md ${activeTab == "Pokemon" ? "bg-indigo-500 text-white" : ""}`}>Pokemon</div>
                <div onClick={() => handleTabClick("Kirby")} className={`rounded   font-semibold px-6 py-4 shadow-md ${activeTab == "Kirby" ? "bg-indigo-500 text-white" : ""}`}>Kirby</div>
                <div onClick={() => handleTabClick("The Legend of Zelda")} className={`rounded   font-semibold px-6 py-4 shadow-md ${activeTab == "The Legend of Zelda" ? "bg-indigo-500 text-white" : ""}`}>The Legend of Zelda</div>
                <div onClick={() => handleTabClick("Super Mario")} className={`rounded   font-semibold px-6 py-4 shadow-md ${activeTab == "Super Mario" ? "bg-indigo-500 text-white" : ""}`}>Super Mario</div>
                <div onClick={() => handleTabClick("Lego Juniors")} className={`rounded   font-semibold px-6 py-4 shadow-md ${activeTab == "Lego Juniors" ? "bg-indigo-500 text-white" : ""}`}>Lego Juniors</div>
                <div onClick={() => handleTabClick("Paw Patrol")} className={`rounded   font-semibold px-6 py-4 shadow-md ${activeTab == "Paw Patrol" ? "bg-indigo-500 text-white" : ""}`}>Paw Patrol</div>

            </div>

            <div className="flex flex-wrap justify-center mt-10">


                {
                    toys.map((toy) => <ToyByCategory toy={toy} key={toy._id}></ToyByCategory>)
                }



            </div>

        </div>
    );
};

export default ToysByCategory;