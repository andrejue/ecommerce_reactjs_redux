import Specialist from '../../pages/images/store-chat-specialist-icon-202305.jpg';
import Logo from '../../pages/images/promo_store_apple_logo_3434-5656.png';
import Mac from '../../pages/images/store-card-14-16-mac-nav-202301.png';
import iPhone from '../../pages/images/store-card-13-iphone-nav-202209.png';
import iPad from '../../pages/images/store-card-13-ipad-nav-202210.png';
import Watch from '../../pages/images/store-card-13-watch-nav-202303_GEO_BR.png';
import Pods from '../../pages/images/store-card-13-airpods-nav-202209.png';
import Airtag from '../../pages/images/store-card-13-airtags-nav-202108.png';
import TV from '../../pages/images/store-card-13-appletv-nav-202210.png';
import Acessories from '../../pages/images/store-card-13-accessories-nav-202303.png';

export default function MacHero1() {
  return (
   <section className="hero__1__store__container">
      <div className="content__1__flex">

         <div className="content__1__title">
            <h1>Loja. <span>O melhor jeito de<br/> comprar o que você ama.</span></h1>
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
      <div className="content__1__itens">
         <div className="images">
            <div className="item macs">
               <img src={Mac} alt="Macs" />
               <p>Mac</p>
            </div>
            <div className="item macs">
               <img src={iPhone} alt="Macs" />
               <p>iPhone</p>
            </div>
            <div className="item macs">
               <img src={iPad} alt="Macs" />
               <p>iPad</p>
            </div>
            <div className="item macs">
               <img src={Watch} alt="Macs" />
               <p>Apple Watch</p>
            </div>
            <div className="item macs">
               <img src={Pods} alt="Macs" />
               <p>AirPods</p>
            </div>
            <div className="item macs">
               <img src={Airtag} alt="Macs" />
               <p>AirTag</p>
            </div>
            <div className="item macs">
               <img src={TV} alt="Macs" />
               <p>Apple TV 4K</p>
            </div>
            <div className="item macs">
               <img src={Acessories} alt="Macs" />
               <p>Acessórios</p>
            </div>

         </div>
      </div>
   </section>
  )
}
