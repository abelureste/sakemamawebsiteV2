import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Ticker from "../components/Ticker";
import AuroraBackground from "../components/AuroraBackground";
import ImageCarousel from "../components/ImageCarousel";
import ImageGrid from "../components/ImageGrid";
import WavyText from '../components/WavyText';

import sakemenu1 from "../src/assets/sakemenu1.png"
import sakemenu2 from "../src/assets/sakemenu2.png"
import sakemenu3 from "../src/assets/sakemenu3.png"

import sakeimg1 from "../src/assets/sakeimg1.JPG"
import sakeimg2 from "../src/assets/sakeimg2.JPG"
import sakeimg3 from "../src/assets/sakeimg3.JPG"
import sakeimg4 from "../src/assets/sakeimg4.JPG"
import sakeimg5 from "../src/assets/sakeimg5.JPG"
import sakeimg6 from "../src/assets/sakeimg6.JPG"

function App() {
  const carouselImages = [
    sakemenu1,
    sakemenu2,
    sakemenu3,
  ]

  const gridImages = [
    sakeimg1,
    sakeimg2,
    sakeimg3,
    sakeimg4,
    sakeimg5,
    sakeimg6,
  ]

  return (
    
      <div className="bg-black">
        <Navbar />
        
        {/* Main card */}
        <AuroraBackground/>
        <div className="container mx-auto p-8 sm:columns-2 bg-black rounded-xl">
          <div className="p-4 lg:pl-32">
             <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -4,
                }}
                whileTap={{
                  scale: 1.03,
                  rotate: -4,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
              <img src="../src/assets/sakemamadrinksmobile.png" className="rounded-xl"></img>
            </motion.div>
          </div>
          <div>
            <h1 className="md:text-6xl sm:text-4xl font-bold text-white lg:pr-32 lg:pt-32">Sake Mama is the original sake bar in the lively classic city.</h1>
            <p className="mt-4 text-2xl text-white lg:pr-40">Whether you want to show off your new moves on the dance floor, taste a variety of unique sake bomb flavors, or listen to some of the hottest new music mixed by our very own DJRX, we've got something for you.</p>            
          </div>
        </div>

        {/* Menu card */}
        <Ticker/>
        <div className="container mx-auto p-8 sm:columns-2 bg-gray-700 rounded-xl">
          <div className="p-4 lg:pl-32 text-end">
            <h1 className="md:text-6xl sm:text-4xl font-bold text-white lg:pt-32">Take a look at our signature menu.</h1>
            <p className="mt-4 text-2xl text-white">We frequently run weekly specials.</p>    
          </div>
          <div className="p-4">
            <ImageCarousel images={carouselImages}/>     
          </div>
        </div>

        {/* Images card */}
        <div className="container mx-auto p-8 md:p-12 bg-gray-700 backdrop-blur-lg rounded-xl mt-8 border border-white/10">
            <div className="text-center mb-8">
                <WavyText text="Take a Glimpse Into Our Bar" className="md:text-6xl sm:text-4xl font-bold text-white"/>
            </div>
            
            <ImageGrid images={gridImages} />
        </div>

        {/* Contact card */}
        <div className="container mx-auto p-8 m-8 sm:columns-2 bg-gray-700 rounded-xl">
          <div className="p-4 flex justify-end">
            <img src="../src/assets/sakeMamaProfilePic.png" className="max-w-60"></img>
          </div>
          <div>
            <h1 className="md:text-6xl sm:text-4xl font-bold text-white lg:pr-32 lg:pt-12">Get in touch.</h1>
            <p className="mt-4 text-2xl text-white lg:pr-40">DM us on <a href='https://www.instagram.com/sakemamauga/?hl=en' className='text-decoration-line: underline decoration-1'>Instagram</a>!<br/> 166 E Clayton St, Athens, GA 30601<br/> Check our <a href='https://www.instagram.com/sakemamauga/?hl=en' className='text-decoration-line: underline decoration-1'>Instagram</a> for our opening times!</p>            
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-6 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Sake Mama. All Rights Reserved.</p>
            <p className="text-sm mt-1">Designed by Abel Ureste</p>
          </div>
        </footer>

      </div>
    );
}

export default App