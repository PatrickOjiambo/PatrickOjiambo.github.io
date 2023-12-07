import { useState } from "react";
import { AiOutlineCopyrightCircle, AiOutlineSend, AiOutlineInstagram } from "react-icons/ai"
import { RiFacebookLine } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"
import { FaGithub } from "react-icons/fa";
function App() {

  return (
    <div className="font-Poppins ">
     
      <section className="min-w-full h-10 shadow-lg flex  text-center text-funnyOrange font-bold font-Whisper text-2xl pl-4 items-center justify-between">
        <p>ShopElegance</p>
        <a href="https://github.com/PatrickOjiambo" target="_blank" className="text-funnyOrange hover: underline pr-4"><FaGithub/></a> 
      </section>
      <section className="px-9 pt-4">
        <h2 className="text-3xl ">Welcome to ShopElegance</h2>
        <h3 className="pt-2  text-funnyOrange text-lg">
          Where Every Purchase is an Affair of Style
        </h3>
      </section>



      <section className="px-9 pt-4 flex justify-center">
        <section>
        <h2 className="text-xl font-Poppins font-semibold">
          Indulge in Elegance
        </h2>
        <p>
          At Shopelegance, we believe in the art of curated luxury. Explore a world where sophistication meets convenience, and every product tells a tale of timeless elegance. From fashion to home decor, our carefully selected collections redefine shopping as an experience, an expression of your refined taste.
        </p>
        <h2 className="text-xl font-Poppins font-semibold">
          Discover Your Signature Style
        </h2>
        <p>
          Step into a realm where fashion meets function, and each item is a masterpiece in its own right. Whether you're seeking the latest trends or timeless classics, Shopelegance offers a curated selection that transcends the ordinary. Elevate your lifestyle with our handpicked treasures, designed to resonate with your unique sense of style.
        </p>
        <h2 className="text-xl font-semibold">Unveiling Unmatched Quality</h2>
        <p>
          At Shopelegance, quality is our mantra. Every item in our inventory is meticulously chosen, ensuring it meets the highest standards of craftsmanship and durability. Immerse yourself in a shopping experience where uncompromising quality meets the allure of opulence.
        </p>
        </section>
        <img src="../images/image2.png" className="h-96 pt-2 bg-funnyOrange rounded-b-3xl mb-2"/>
      </section>
    <section className="flex justify-center items-start">
      <div className="w-52">
        <img src="../images/image6.png" className="bg-funnyOrange h-48 px-12"/>
        <p className="text-xs text-left ">From exquisite apparel that defines your wardrobe to handpicked home decor that transforms your space, Shopelegance is your one-stop destination for a life well-lived.</p>
      </div>
      <div className="w-48">
        <img src="../images/image5.png" className="bg-funnyOrange h-48 px-9"/>
        <p className="text-xs text-left">
          We understand that life is a series of special moments. Our collection is curated to accompany you on every journey, turning ordinary days into extraordinary memories.
        </p>
      </div>
      <div className="w-48 ml-2">
        <img src="../images/image4.png" className="bg-funnyOrange h-48 pl-9 pr-1"/>
        <p className="text-xs text-left">
          Indulge in a shopping experience that transcends the ordinary.Y our journey towards a life of refined luxury begins here.
        </p>
      </div>
    </section>
    

    <div className="text-sm font-light h-auto pt-4 bottom-0">
        <div className="bg-white text-black flex justify-around w-screen h-auto">
            <div>
                <h2 className="text-sm">Elegance</h2>
                <h3 className="font-bold text-lg">DEVELOPER: PATRICK OJIAMBO</h3>
                <a href="https://github.com/PatrickOjiambo" target="_blank" className="text-funnyOrange hover: underline">Link to my github profile</a> 
       
            </div>
            <div>
                <p className="text-sm">Support</p>
                <p>Muthithi Rd, 29 Westlands Nairobi</p>
                <p>pashrick237@gmail.com</p>
                <p>+254742220881</p>
            </div>
           
           
            <div>
                <h2 className="text-sm">Download App</h2>
                <div className="flex justify-around">
                    <RiFacebookLine />
                    <FiTwitter/>
                    <AiOutlineInstagram />
                    <FaLinkedin />

                </div>
            </div>
        </div>
        <div className="border-solid border-t border-zinc-500 bg-white w-screen bottom-0 left-1 flex justify-center items-center">
            <AiOutlineCopyrightCircle className="text-zinc-500" />

            <p className="text-zinc-500 text-center py-2 pl-2">Copyright Pash 2023. All rights reserved</p>
        </div>
    </div>
    
    

    </div>
  )
}

export default App
