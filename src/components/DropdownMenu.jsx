import React from "react";
import { Link } from 'react-router-dom';


export default function DropdownMenu(props) {

  return (
   <>
      {props.item === 'item1' &&
         <>
            <div className="content__1">
               <p>Comprar</p>
               <Link to='/store'>
                  <h4>Comprar os lançamentos</h4>
               </Link>
               <Link to='/mac'>
                  <h4>Mac</h4>
               </Link>
               <Link to='ipad'>
                  <h4>iPad</h4>
               </Link>
               <Link to='iphone'>
                  <h4>iPhone</h4>
               </Link>
               <Link to='watch'>
                  <h4>Apple Watch</h4>
               </Link>
               <Link to='acessorios'>
                  <h4>Acessórios</h4>
               </Link>

                  <p>Comprar</p>

            </div>
            <div className="content__2">
               <p>Links Rápidos</p>
               <h5>Encontre uma loja</h5>
               <h5>Status do pedido</h5>
               <h5>Financiamento</h5>
            </div>
            <div className="content__3">
               <p>Comprar nas lojas especiais</p>
               <h5>Educação</h5>
               <h5>Negócios</h5>
            </div>
         </>
      }

      {props.item === 'item2' &&
         <>
            <div className="content__1">
               <p>Explorar Mac</p>
               <h4>Explorar todos os modelos de Mac</h4>
               <Link to='/products/1'>
                  <h4>Macbook Air</h4>
               </Link>
               <Link to='/products/2'>
                  <h4>Macbook Pro</h4>
               </Link>
               <Link to='products/3'>
                  <h4>iMac</h4>
               </Link>
               <Link to='products/4'>
                  <h4>Mac mini</h4>
               </Link>
               <Link to='products/5'>
                  <h4>Mac Studio</h4>
               </Link>
               <Link to='products/6'>
                  <h4>Mac Pro</h4>
               </Link>
                  <h4>Monitores</h4>

            </div>
            <div className="content__2">
               <p>Comprar Mac</p>
               <h5>Comprar Mac</h5>
               <h5>Acessórios para Mac</h5>
               <h5>Financiamento</h5>
            </div>
            <div className="content__3">
               <p>Mais para o Mac</p>
               <h5>Suporte para Mac</h5>
               <h5>macOS Ventura</h5>
               <h5>Final Cut Pro</h5>
               <h5>Logic Pro</h5>
               <h5>Continuidade</h5>
               <h5>iCloud</h5>
               <h5>Mac nos negócios</h5>
               <h5>Educação</h5>
            </div>
         </>
      }

      {props.item === 'item3' &&
         <>
            <div className="content__1">
               <Link to='/ipad'>
                  <p>Explorar iPad</p>
               </Link>
               <Link to='/ipad'>
                  <h4>Explorar todos os modelos de iPad</h4>
               </Link>
               <Link to='products/8'>
                  <h4>iPad Pro</h4>
               </Link>
               <Link to='products/7'>
                  <h4>iPad Air</h4>
               </Link>
               <Link  to='products/7'>
                  <h4>iPad</h4>
               </Link>

                  <h4>iPad mini</h4>

               <h4>Apple Pencil</h4>
               <h4>Teclados</h4>
               <p>Por que iPad</p>
            </div>
            <div className="content__2">
               <p>Comprar iPad</p>
               <h5>Comprar iPad</h5>
               <h5>Acessórios para iPad</h5>
               <h5>Financiamento</h5>
            </div>
            <div className="content__3">
               <p>Mais para o iPad</p>
               <h5>Suporte para iPad</h5>
               <h5>iPadOS 16</h5>
               <h5>Final Cut Pro para iPad</h5>
               <h5>Logic Pro para iPad</h5>
               <h5>iCloud</h5>
               <h5>Educação</h5>
            </div>
         </>
      }

      {props.item === 'item4' &&
         <>
            <div className="content__1">
               <p>Explorar iPhone</p>
               <Link to='iphone'>
                  <h4>Explorar todos os modelos de iPhone</h4>
               </Link>
               <Link to='products/9'>
                  <h4>iPhone 14 Pro</h4>
               </Link>
               <Link to='products/10'>
                  <h4>iPhone 14</h4>
               </Link>
               <h4>iPhone 13</h4>
               <h4>iPhone 12</h4>
               <Link to='products/11'>
                  <h4>iPhone SE</h4>
               </Link>
               <p>Comprar iPhone</p>
               <p>Mude para o iPhone</p>
            </div>
            <div className="content__2">
               <p>Comprar iPhone</p>
               <h5>Comprar iPhone</h5>
               <h5>Acessórios para iPhone</h5>
               <h5>Financiamento</h5>
            </div>
            <div className="content__3">
               <p>Mais para o iPhone</p>
               <h5>Suporte para iPhone</h5>
               <h5>iOS 16</h5>
               <h5>Privacidade no iPhone</h5>
               <h5>iCloud</h5>
               <h5>Carteira, Apple Pay</h5>
               <h5>Siri</h5>
            </div>
         </>
      }

      {props.item === 'item5' &&
         <>
            <div className="content__1">
               <p>Explorar Apple Watch</p>
               <Link to='watch'>
                  <h4>Explorar todos os modelos de<br/> Apple Watch</h4>
               </Link>
               <Link to='products/12'>
                  <h4>Apple Watch Ultra</h4>
               </Link>
               <Link to='products/13'>
                  <h4>Apple Watch Series 8</h4>
               </Link>
               <Link to='products/14'>
                  <h4>Apple Watch SE</h4>
               </Link>
               <h4>Nike</h4>
               <p>Comprar Apple Watch</p>
               <p>Por que Apple Watch</p>
            </div>
            <div className="content__2">
               <p>Comprar Apple Watch</p>
               <Link to='watch'>
                  <h5>Comprar Apple Watch</h5>
               </Link>
               <h5>Pulseiras para Apple Watch</h5>
               <h5>Acessórios para Apple Watch</h5>
               <h5>Financiamento</h5>
            </div>
            <div className="content__3">
               <p>Mais para o Apple Watch</p>
               <h5>Suporte para Apple Watch</h5>
               <h5>watchOS 9</h5>
               <h5>Apple Fitness+</h5>
            </div>
         </>
      }

      {props.item === 'item6' &&
         <>
            <div className="content__1">
               <p>Explorar AirPods</p>
               <Link to='airpods'>
                  <h4>Explorar todos os modelos de<br/> AirPods</h4>
               </Link>
               <Link to='products/15'>
                  <h4>AirPods 2ª geração</h4>
               </Link>
               <Link to='products/15'>
                  <h4>AirPods 3ª geração</h4>
               </Link>
               <Link to='products/15'>
                  <h4>AirPods Pro 2ª geração</h4>
               </Link>
               <Link to='products/16'>
                  <h4>AirPods Max</h4>
               </Link>
               <p>Comprar AirPods</p>
            </div>
            <div className="content__2">
               <p>Comprar AirPods</p>
               <h5>Comprar AirPods</h5>
               <h5>Acessórios para AirPods</h5>
            </div>
            <div className="content__3">
               <p>Mais para os AirPods</p>
               <h5>Suporte para AirPods</h5>
               <h5>Apple Music</h5>
            </div>
         </>
      }

      {props.item === 'item7' &&
         <>
            <div className="content__1">
               <p>Explorar TV e Casa</p>
               <Link to='tv'>
                  <h4>Explorar TV e Casa</h4>
               </Link>
               <Link to='products/17'>
                  <h4>Apple TV 4K</h4>
               </Link>
            </div>
            <div className="content__2">
               <p>Comprar TV e Casa</p>
               <h5>Comprar Apple TV 4K</h5>
               <h5>Comprar Siri Remote</h5>
               <h5>Acessórios para TV e Casa</h5>
            </div>
            <div className="content__3">
               <p>Mais para TV e Casa</p>
               <h5>Suporte para Apple TV</h5>
               <h5>App Apple TV</h5>
               <h5>Apple TV+</h5>
               <h5>App Casa</h5>
               <h5>Apple Music</h5>
               <h5>Siri</h5>
               <h5>AirPlay</h5>
            </div>
         </>
      }

      {props.item === 'item8' &&
         <>
            <div className="content__1">
               <p>Explorar Entretenimento</p>
               <h4>Apple One</h4>
               <h4>Apple TV+</h4>
               <h4>Apple Music</h4>
               <h4>Apple Arcade</h4>
               <h4>Apple Fitness+</h4>
               <h4>Apple Podcasts</h4>
               <h4>Apple Books</h4>
               <h4>App Store</h4>
            </div>
            <div className="content__2">
               <p>Suporte</p>
               <h5>Suporte para Apple TV+</h5>
               <h5>Suporte para Apple Music</h5>
            </div>
            <div className="content__3">

            </div>
         </>
      }

      {props.item === 'item9' &&
         <>
            <div className="content__1">
               <p>Comprar acessórios</p>
               <h4>Mac</h4>
               <h4>iPad</h4>
               <h4>iPhone</h4>
               <h4>Apple Watch</h4>
               <h4>AirPods</h4>
               <h4>TV e Casa</h4>
               <p>Ver todos os acessórios</p>
            </div>
            <div className="content__2">
               <p>Explorar Acessórios</p>
               <h5>Criados pela Apple</h5>
               <h5>Beats by Dr.Dre</h5>
               <h5>AirTag</h5>
            </div>
            <div className="content__3">

            </div>
         </>
      }

      {props.item === 'item10' &&
         <>
            <div className="content__1">
               <p>Explorar suporte</p>
               <h4>iPhone</h4>
               <h4>Mac</h4>
               <h4>iPad</h4>
               <h4>Apple Watch</h4>
               <h4>AirPods</h4>
               <h4>Música</h4>
               <h4>TV</h4>
               <p>Explorar suporte</p>
            </div>
            <div className="content__2">
               <p>Ajuda</p>
               <h5>Comunidade</h5>
               <h5>Verificar cobertura</h5>
               <h5>Reparos</h5>
               <h5>Fale com a gente</h5>
            </div>
            <div className="content__3">
               <p>Tópicos úteis</p>
               <h5>Comprar produtos AppleCare</h5>
               <h5>Apple ID e senha</h5>
               <h5>Cobranças e assinaturas</h5>
               <h5>Buscar</h5>
               <h5>Acessibilidade</h5>
            </div>
         </>
      }

   </>
  )
}
