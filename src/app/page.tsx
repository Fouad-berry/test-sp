import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-bold text-[100px] leading-[64px]">
          St
          <span className="text-[#40E2C8]">ee</span>r.
        </p>
        <div className="flex justify-center">
          <Image 
            src="/images/Logo_DarkBG-Animate.svg"
            alt="Description de l'image"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>
        <p className="textBelow text-white font-normal text-[64px]">Positive</p>
      </div>

      <div className="w-px h-4/5 bg-gray-300"></div>

      <div className="flex flex-col justify-center items-center p-12">
      <p className="text-white font-[600px] text-[58px] leading-[58px]">
        Votre copilote <br />
        <span className="text-[#40E2C8] text-[44px] leading-[44px]">RSE et Décarbonisation</span>
      </p>
        <h2 className="text-2xl text-white mb-4">Formulaire d'inscription</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="p-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="p-4 border border-gray-300 rounded-md"
          />
                    <input
            type="password"
            placeholder="Mot de passe"
            className="p-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="p-4 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="p-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
