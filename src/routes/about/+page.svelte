<section id="header" class="w-full flex flex-col justify-center text-center gap-y-1 md:gap-y-4">
  <h2 class="text-black font-bold">About</h2>
</section>

<article class="flex flex-col gap-12">
  <section class="gap-x-12 gap-y-5">
    <img src="/images/electronics.jpg" alt="Elsys logo" class="hidden md:block object-contain" />
    <h3 class="font-bold text-black">The toolset</h3>
    <span>
      Studying electrical engineering is by no means easy, that is at least the experience of many student at MTELSYS.
      However, there are certain tools one can utilise to make these courses a little less painful, and a little more fun.
      Using these tools, developed by current &mdash; or previous &mdash; students, you can put your focus where it needs to be, instead of refactoring your python script for plotting data from Analog Discovery 2 in ESDA, or sampling for an ADC in TTT4280.
    </span>
  </section>

  <section class="gap-x-12 gap-y-5">
    <img src="/images/elsys-icon-logo.svg" alt="Elsys logo" class="hidden md:block object-contain" />
    <h3 class="font-bold text-black">MTELSYS</h3>
    <span>
      MTELSYS &mdash; formally known as Electronics Systems Design and Innovation &mdash; is a five-year integrated masters programme at NTNU, Trondheim.
      Completing the degree grants you the protected title of "Sivilingeniør" in Norway, and is a highly sought after degree in the industry.
      Students may choose to specialise in a variety of fields, such as acoustics, analogue circuit design and radio, embedded systems, nano electronics and photonics, space systems and signal processing.
    </span>
  </section>
</article>

<style lang="scss">
  #header {
    height: 25vh;

    span {
      @include desktop {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }

  article {
    @include desktop {
      gap: 150px;
    }

    section {
      display: grid;
      grid-template-areas: 
        "header" 
        "text";
      
      @include desktop {
        grid-template-areas: 
          "image header" 
          "image text";
        grid-template-columns: 2fr 3fr;

        &:nth-child(even) {
          grid-template-areas: 
            "header image" 
            "text image";
          grid-template-columns: 3fr 2fr;
          }
        }
        
      img {
        grid-area: image;
        width: 100%;
        height: 100%;
      }
      
      h3 {
        grid-area: header;
      }

      span {
        grid-area: text;
      }
    }
  }

</style>