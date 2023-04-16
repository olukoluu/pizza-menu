import './menu.css';

const Menu = (props) => {

  return (
    <section className='menu'>
      {props.cards}
    </section>
  )
}

export default Menu