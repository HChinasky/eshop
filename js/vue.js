Vue.use(VueAwesomeSwiper);

const producer = (name, country, basedYear, link) => ({
  name,
  country,
  basedYear,
  link
});

const producers = [
  producer('Adidas', 'Germany', 1949, 'link_adidas'),
  producer('Armani Jeans', 'Italy', 1975, 'link_armany'),
  producer('Calvin Klein', 'USA', 1946, 'link_calvin_klein'),
  producer('Dolce & Gabbana', 'Italy', 1985, 'link_Dolce_Gabbana'),
  producer('Escada', 'Germany', 1978, 'link_escada')
];

new Vue({
  el: '#app',
  components: {
    LocalSwiper: VueAwesomeSwiper.swiper,
    LocalSlide: VueAwesomeSwiper.swiperSlide,
  },
  data: {
    producers: producers,
    search: '',
    successSearch: 0,
    swiperOptionA: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  },
  computed: {
    searchProducer: function () {
      return this.producers.filter((producer) => {
        return producer.name.toLowerCase().indexOf(this.search) > -1 || producer.country.toLowerCase().indexOf(this.search) > -1
      })
    },
    swiper() {
      return this.$refs.awesomeSwiper.swiper
    }
  }
});