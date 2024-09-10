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
        <p className="font-bold text-white text-[44px]" style={{ fontFamily: "var(--font-inter-thin)"}}>Positive</p>
      </div>

      <div className="w-[3px] h-[80%] bg-[#3B2E77] self-center"></div>

      <div className="flex flex-col justify-start items-center p-12 w-1/2 h-screen overflow-y-auto">
        <p className="text-white font-bold text-[58px] leading-[58px] mb-4">
          Votre copilote
        </p>
        <p className="text-[#40E2C8] text-[44px] leading-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight:'500' }}>
          RSE et Décarbonation
        </p>

        <h2 className="text-2xl text-left text-white mb-4 mt-6" style={{ fontFamily: "var(--font-inter-medium)" }}>Je configure mon compte</h2>
        
        <form className="flex flex-col gap-6 w-2/3 max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Nom</label>
              <input
                type="text"
                placeholder="Dubois"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Prénom</label>
              <input
                type="text"
                placeholder="Pierre"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Entreprise</label>
              <input
                type="email"
                placeholder="Google"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Poste</label>
              <input
                type="text"
                placeholder="Responsable RSE"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Adresse mail</label>
              <input
                type="email"
                placeholder="Adresse"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Mot de passe</label>
              <input
                type="text"
                placeholder="Ville"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Confirmer mon mot de passe</label>
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2" style={{ fontFamily: "var(--font-inter-medium)" }}>Confirmer mot de passe</label>
              <input
                type="password"
                placeholder="Confirmer mot de passe"
                className="w-full h-[35px] p-2 border border-gray-300 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="w-full h-[35px] p-5 bg-white border border-gray-300 rounded-[30px] mt-6 flex justify-center items-center"
              >
              <span className='text-[15px] text-black' style={{ fontFamily: "var(--font-inter-bold)" }}>C'est parti !</span>
              </button>
              <span className='text-white text-xs pt-2' style={{ fontFamily: "var(--font-inter-light)" }}>Si ce n'est pas déja fait, contactez nous au 01.55.24.20.92</span>
            </div>
          </div>
        </form>

        <div className="flex justify-center items-center my-6 w-full">
          <hr className="w-[100px] border-gray-400" />
          <span className="text-sm text-white mx-3" style={{ fontFamily: "var(--font-inter-medium)" }}>J'ai déjà un compte ?</span>
          <hr className="w-[100px] border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Page;
