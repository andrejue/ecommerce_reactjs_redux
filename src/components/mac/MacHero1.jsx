import Specialist from '../../pages/images/store-chat-specialist-icon-202305.jpg';
import Logo from '../../pages/images/promo_store_apple_logo_3434-5656.png';


export default function MacHero1() {
  return (

   <section className="hero__1__store__container">
      <div className="content__1__flex">

         <div className="content__1__title">
            <h1>Compre Mac</h1>
         </div>

         <div className="content__1__aside">
            <div>
               <img src={Specialist} alt="Foto especialista" />
               <div className='content__1__aside__text'>
                  <p>Precisa de ajuda para comprar?<br/>
                  <a href='#'>Fale com um especialista</a></p>
               </div>
            </div>
            <div>
               <img src={Logo} alt="apple logo" />
               <div className='content__1__aside__text'>
                  <p>Visite uma Apple Store<br/>
                  <a href='#'>Procure uma loja perto de você &gt;</a></p>
               </div>
            </div>
         </div>

      </div>

   </section>
  )
}
