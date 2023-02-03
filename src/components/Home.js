import Slider from './Slider'
import SimpleContainer from'./Box'
import News from './News'
import ResponsiveAppBar from './Header';
import Footer from './footer';
function Home() {
  return (
<>

<ResponsiveAppBar/>
<Slider/>
<SimpleContainer/>
<News/>
<Footer/>
</>
  )
}

export default Home