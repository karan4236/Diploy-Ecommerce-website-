
import Nav from '../../components/Nav/Nav'
import bg from '../../assets/Img/bg0.gif'
import "./Home.css"
import { category } from '../../Catogery'

const Home = () => {
  return (
    <div className='home'>
        <div className='hero-img'>
          <img src={bg} alt="background img" />
        </div>

<div className='catogry'>
  {category.map((item) =>{
    return <div className='card-item'>
      <img src={item} alt="" />
      <h3>{item.name}</h3>
    </div>
  })}
</div>
    </div>
  )
}

export default Home