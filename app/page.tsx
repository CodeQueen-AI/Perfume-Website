import Home from './Home/page'
import Heading from './components/Heading'
import Collection from './components/Collection'
import FAQ from './components/Faqs'
import Image from './components/Image'
import Story from './components/Story'
import Box from './components/Box'
import Services from './components/Service'

console.log(process.env.GEMINI_API_KEY)
export default function page() {
  return (
    <div>
      <Home/>
      <Heading/>
      <Collection/>
      <Services/>
      <FAQ/>
      <Image/>
      <Story/>
      <Box/>
    </div>
  )
}