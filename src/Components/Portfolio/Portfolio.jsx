import React, {useState} from 'react';
import "./Portfolio.css";
import Menu from './Menu';

function Portfolio() {
  const [items,setItems] = useState(Menu);
  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
      });
      setItems(updatedItems);
  };
  return (

    <section className='work container section' id='Portfolio'>
      <h2 className='section_title'>Projets Recents</h2>
      <div className="work_filters">
        <span className='work_item' onClick={() => setItems(Menu)}>Tout</span>
        <span className='work_item' onClick={() => filterItems("Développement Web")}>Développement Web</span>
        <span className='work_item' onClick={() => filterItems("Application Burreau")}>Application Burreau</span>
        <span className='work_item' onClick={() => filterItems("Design")}>Design</span>
      </div>

      <div className="work_container grid">
        {items.map((elem)=>{
          const {id,image,title,category} = elem;
          return(
            <div className="workcard" key={id}>
              <div className="workthumb">
                <img src={image} alt="" className="workimg" />
                <div className="workmask"></div>
              </div>
              <span className="workcategory">{category}</span>
              <h3 className="worktitle">{title}</h3>
              <a href="#" className='workbutton'>
                <i className='icon-link worklinkivon'></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio