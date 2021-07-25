
<template>
<div id="app">
    <header>
        <div class="my-wrapper">
           <div class="header-row">
             <div class="logo-col">
                 <img src="images/logo.png" alt="">
             </div>
             <div class="menu-col">
                 <ul class="header-ul">
                   <li><a href="#">Acasă</a></li>
                   <li><a href="#">Avantaje</a></li>
                   <li><a href="#">Locații</a></li>
                   <li><a href="#">Servicii</a></li>
                   <li><a href="#">Despre noi</a></li>
                   <li><a href="#">Contacte</a></li>
                 </ul>
             </div>
             <div class="lang-col">
               <div class="lang-block">
                <div class="locale-changer">
                  <select v-model="$i18n.locale">
                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                      {{ lang }}
                    </option>
                  </select>
                </div>
               </div>
             </div>
           </div>
        </div>
    </header>

    <section class="baner">
       <div class="baner-row">
         <div class="baner-col-text">
           <div class="baner-text">
             <div class="baner-title"></div>
             <div class="baner-p"></div>
             <div class="baner-btn"></div>
           </div>
         </div>
         <div class="baner-col-img">
           <img src="images/baner-img.png" class="" alt="">
         </div>
       </div>
       <div class="arrow-img"></div>
    </section>

    <section class="benefits">
      <div class="my-wrapper">
        <div class="benefits-h">Avantajele noastre</div>
        <div class="benefits-row">
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon1.png" alt="">
              <div class="benefits-text">Utilizarea generatorului cu ozon ecologic</div>
            </div>
          </div>
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon2.png" alt="">
              <div class="benefits-text">Ameliorarea calității aerului</div>
            </div>
          </div>
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon3.png" alt="">
              <div class="benefits-text">Îndepărtarea bacteriilor, virușilor și microbilor</div>
            </div>
          </div>
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon4.png" alt="">
              <div class="benefits-text">Eliminarea mirosurilor neplăcute</div>
            </div>
          </div>
         
        </div>
        <div class="benefits-row">
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon5.png" alt="">
              <div class="benefits-text">Utilizarea generatorului cu ozon ecologic</div>
            </div>
          </div>
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon6.png" alt="">
              <div class="benefits-text">Utilizarea generatorului cu ozon ecologic</div>
            </div>
          </div>
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon7.png" alt="">
              <div class="benefits-text">Utilizarea generatorului cu ozon ecologic</div>
            </div>
          </div>
          <div class="benefits-col">
            <div class="benefits-blck">
              <img src="images/av-icon8.png" alt="">
              <div class="benefits-text">Utilizarea generatorului cu ozon ecologic</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="services">
      <div class="my-wrapper">
        <div class="services-title">Servicii</div>
        <div class="services-text">Pentru noi,  ECOSPACE  este o oportunitate să putem ajuta și lua totodată măsuri sumplimentare de dezinfectare în scopul asigurării unei încăperi curate și sigure în care fie locuiți, munciți sau chiar vă odihniți.</div>

        <ul class="nav nav-pills  nav-fill mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-serv1-tab" data-bs-toggle="pill" data-bs-target="#pills-serv1" type="button" role="tab" aria-controls="pills-serv1" aria-selected="true">Generator cu Ozon</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-serv2-tab" data-bs-toggle="pill" data-bs-target="#pills-serv2" type="button" role="tab" aria-controls="pills-serv2" aria-selected="false">Generator cu Aburi</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-serv3-tab" data-bs-toggle="pill" data-bs-target="#pills-serv3" type="button" role="tab" aria-controls="pills-serv3" aria-selected="false">Ozon și aburi</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-serv4-tab" data-bs-toggle="pill" data-bs-target="#pills-serv4" type="button" role="tab" aria-controls="pills-serv4" aria-selected="false">Pulverizare</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-serv5-tab" data-bs-toggle="pill" data-bs-target="#pills-serv5" type="button" role="tab" aria-controls="pills-serv5" aria-selected="false">Testarea calității aerului</button>
          </li>

        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-serv1" role="tabpanel" aria-labelledby="pills-serv1-tab">
            <div class="about-services-block">
              <div class="about-services-row">
                <div class="about-services-img-col">
                  <img src="images/serv1-img.png" alt="">
                </div>
                <div class="about-services-text-col">
                  <div class="about-services-text-blck">
                    <div class="about-services-title">Dezinfectare cu Generator cu Ozon</div>
                    <div class="about-services-p">Generatorul de aburi este un aparat care utilizează proprietatea de expansiune a aburului bazându-se pe accelerația micilor particule de apă aflate peste punctul de fierbere la o viteză foarte mare. Aburul în sine ajungând la peste 150°C, devine un agent de curățare extrem de eficient. La contactul cu suprafața aburul va disloca bacteriile, acarienii, agenții patogeni sau praful în cei mai intimi pori ai acesteia</div>
                    <div class="about-services-test"></div>
                    <div class="about-services-btn">
                       <div class="serv-btn">Află mai mult</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-serv2" role="tabpanel" aria-labelledby="pills-serv2-tab">...</div>
          <div class="tab-pane fade" id="pills-serv3" role="tabpanel" aria-labelledby="pills-serv3-tab">...</div>
          <div class="tab-pane fade" id="pills-serv4" role="tabpanel" aria-labelledby="pills-serv4-tab">...</div>
          <div class="tab-pane fade" id="pills-serv5" role="tabpanel" aria-labelledby="pills-serv5-tab">...</div>
        </div>


       
      </div>
    </section>

    <section class="slider">
      <div class="my-wrapper">
        <div class="slider-title">Locații</div>
        <div class="slider-text">Pandemia și evoluția ei este individuală și variază mult de la o persoană la alta de aceea este foarte importat să avem grijă de locurile în care petrecem cel mai mult timp și să le dezinfectăm cu regularitate  întrucât  riscul infecției să fie redus la maxim</div>

        <div class="swiper-container mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slider-blck">
                <img src="images/sl-img1.png" alt="">
                <div class="sl-abs">Oficii</div>
              </div>
            </div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>


        <div>
           <img src="images/scroll-img.png" style="width:100px; display:block; margin:10px auto" alt="">
        </div>
       
      </div>
     
    </section>



    <section class="desprenoi">
      <div class="my-wrapper">
       
        <div class="despre-title">Despre noi</div>
        <div class="despre-decor-img">
          <img src="images/d-decor.png" alt="">
        </div>
        <div class="despre-p">În contextul acestei pandemii, întreaga lume trebuie să facă față bolilor respiratorii acute și infecțioase. Folosind cele mai simple măsuri de igienă fiecare din noi este responsabil de protecția proprie și a celor din jur. O mare parte dintre instituțiile de învățămînt, săli de conferință, spitale, hotele, centre comerciale, săli de sport de la noi și din toată lumea aleg ca și modalitate specială dezinfectarea spațiilor și a suprafețelor cu ozon.<br><br>

          Stabillirea calității aerului și nivelul de poluare din locuință sau alte încăperi fără dispozitive speciale care întrunesc anumiți paramentri este destul de dificilă. Spațiile închise sunt diferite iar calitatea aerului este caracterizată în mare parte de contaminații biologice (acarienii din praf) și concentrații crescute de specii chimice ( monoxidul de carbon / CO, dioxidul de carbon CO2 formaldehidă / CH2O ș. a.)<br><br>

          ECOSPACE deține sisteme care au la bază tehnologia ozonificării, oferind o igienizare completă, eficientă și rapidă datorită acțiunii germicide a ozonului, dar și a tuturor tehnologiilor folosite de către generatoarele de ozon. Mai mult ca atât acest tip de oxidant este generat din oxigenul din aer ambiental și poate dezactiva virușii, bacteriile și alte tipuri de microbi.<br><br>

          Siguranța oamenilor este de o importanță extremă!<br><br>

          Pentru noi, ECOSPACE  este o oportunitate să putem ajuta și lua totodată măsuri sumplimentare de dezinfectare în scopul asigurării unei încăperi curate și sigure în care fie locuiți, munciți sau chiar vă odihniți.<br><br>

        </div>
      </div>
      <img src="images/despre-img.png" alt="">
    </section>

    <section class="form">
      <div class="my-wrapper">
        <div class="form-row">
          <div class="f-col-img">
            <div class="form-img-block">
               <img src="images/form-img.png" alt="">
              
            </div>
           
          </div>
          <div class="f-col-form">
             <div class="form-title">Plasează o Comandă</div>
             <form action="">
                
                  
                    <div class="container-1">
                        <span class="icon-name"><i class="far fa-user"></i></span>
                        <input type="text" id="name" placeholder="Numele/Prenumele" />
                    </div>
                    <div class="container-2">
                      <input type="tel" id="phone" placeholder="">
                    </div>
                    <div class="container-3">
                      <span class="icon-email"><i class="fas fa-envelope-square"></i></span>
                      <input type="email" id="email" placeholder="E-mail" />
                    </div>
                    <div class="container-4">
                      
                    </div>
                  


             </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
