import { BsBoxSeam } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import LogoReason from "../../pages/images/apple_logo_reasons.jpg";

export default function StoreHero2() {
  return (
    <section className="hero__2__store__container">

      <div className="hero__2__tittle">

         <h2>A ajuda está aqui. <span>Quando e como você precisar.</span></h2>

      </div>

      <div className="content__2__flex">

         <div className="item__1">
            <p>Especialista da Apple</p>
            <h3>Compre com a ajuda de um especialista na Apple Store ou online.</h3>
         </div>

         <div className="container__itens">
            <div className="item__2">
               <h3>Conheça o seu novo aparelho com uma Sessão Personalizada gratuita.</h3>
            </div>
            <div className="item__3">
               <h3>Receba<br/> assistência<br/> técnica e suporte<br/> no Genius Bar.</h3>
            </div>
         </div>

      </div>

      <div className="reasons">

         <h3>Na Apple Store, é diferente. <span>Ainda mais motivos para comprar com a gente.</span></h3>

         <div className="reasons__container">
            <div className="reason1">
               <BsBoxSeam size={40} color="#6CCA4E"/>
               <p>Frete grátis em todos os pedidos.</p>
            </div>
            <div className="reason2">
               <BsCreditCard size={40} color="#6CCA4E"/>
               <p>Várias opções de parcelamento.</p>
            </div>
            <div className="reason3">
               <img src={LogoReason} alt="mini logo" />
               <p>Tenha uma experiência <span>de compra<br/> personalizada</span> com o <span>app Apple Store</span>.</p>
            </div>
         </div>
      </div>

    </section>
  )
}
