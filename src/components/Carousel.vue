<template>
  <div class="content-carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/option1.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/option2.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/option3.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- <b-carousel-slide v-for="(option, index) in options" :key="index">
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  :src="option.src"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
      options: [
        { src: "https://picsum.photos/1024/480/?image=58" },
        { src: "../assets/images/option2.png" },
        { src: "../assets/images/option3.png"},
      ],
    };
  },
  methods: {
    access() {},
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped lang="scss">

::v-deep {
  .img-fluid {
    margin: 10% auto;
    z-index: 10;
    width: 622px;
    height: 585px;
  }
  .carousel-control-prev, .carousel-control-next{
    opacity: 1;
  }
}
</style>