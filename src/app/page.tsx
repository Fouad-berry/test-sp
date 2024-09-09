import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center gap-4 w-1/2 h-screen">
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
        <p className="textBelow text-white text-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight:'200' }}>Positive</p>
      </div>

      <div className="w-[3px] h-[80%] bg-[#3B2E77] self-center"></div>

      <div className="flex flex-col justify-start items-center p-12 w-1/2 h-screen overflow-y-auto">
        <p className="text-white font-bold text-[58px] leading-[58px] mb-4">
          Votre copilote
        </p>
        <p className="text-[#40E2C8] text-[44px] leading-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight:'500' }}>
          RSE et Décarbonation
        </p>

=        <h2 className="text-2xl text-white mb-4 mt-6">Formulaire d'inscription</h2>
        
=        <form className="flex flex-col gap-6 w-2/3 max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-white mb-2">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Prénom</label>
              <input
                type="text"
                placeholder="Prénom"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Téléphone</label>
              <input
                type="text"
                placeholder="Téléphone"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-white mb-2">Adresse</label>
              <input
                type="text"
                placeholder="Adresse"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Ville</label>
              <input
                type="text"
                placeholder="Ville"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Mot de passe</label>
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Confirmer mot de passe</label>
              <input
                type="password"
                placeholder="Confirmer mot de passe"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-6"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
