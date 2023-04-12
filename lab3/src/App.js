import './App.css'
import * as React from 'react';
import BasicButtonGroup from './mybuttons';
import MediaCard from './mycard';
import MyForm from './myform';



export default function App() {
  const [showCard, setShowCard] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);


  const data = [
    {
      title: 'Pin',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
      image: 'https://vignette.wikia.nocookie.net/smesharikiarhives/images/a/a8/%D0%9F%D0%B8%D0%BD_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%B7%D0%BD%D0%B0%D0%BA.png/revision/latest?cb=20190420134901&path-prefix=ru'
    },
    {
      title: 'Nyusha',
      description: 'Elephants are large mammals of the family Elephantidae and the order Proboscidea.',
      image: 'https://th.bing.com/th/id/OIP.QLFww8TxtFjWNViIeAlWFwHaHa?pid=ImgDet&rs=1'
    },
    {
      title: 'Kar-Karichi',
      description: 'The giant panda, also known as the panda bear or simply the panda, is a bear native to South Central China.',
      image: 'https://th.bing.com/th/id/R.f88559941a84e87c4e0542b9578cce6b?rik=dWzr%2f7zwui%2bJIw&pid=ImgRaw&r=0'
    }
  ];

  const handleButtonClick = () => {
    setShowCard(!showCard);
    setShowInput(showInput)
  };

  return (
    <div>

      <div>
        <BasicButtonGroup variant="contained" onClick={handleButtonClick}>Show My Cards</BasicButtonGroup>
      </div> 
      <div>
        {showInput && <MyForm/>}
        
      </div> 




      

      <div className='myBox'>
      {showCard && data.map((item, index) => (
        <div key={index}>
          <MediaCard data={item} />
        </div>
      ))}
      </div>

    </div>
  );
}
