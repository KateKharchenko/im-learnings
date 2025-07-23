<template>
  <div>
    <TopNav />
  
    <div class="container">
      <h1>Before After</h1>
  
      <div class="gallery">
        <img src="/after.jpg" alt="After" />
        <img class="clipped" src="/before.jpg" alt="Before" />
        <div class="dragger">
          <div class="handle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import { onMounted } from "vue"

gsap.registerPlugin(Draggable)

onMounted(() => {
  const clipped = document.querySelector(".clipped")
  const gallery = document.querySelector(".gallery")
  const dragger = document.querySelector(".dragger")

  const galleryWidth = gallery.getBoundingClientRect().width
  const initialX = 100

  let ratio = 0.25

  new Draggable(dragger, {
    type: "x",
    bounds: { minX: initialX, maxX: galleryWidth - initialX },
    onDrag() {
        onDrag(this.x)
    }
  });

  function onDrag(x) { 
    const width = gallery.getBoundingClientRect().width;
    gsap.set(clipped, {clipPath: `inset(0px ${galleryWidth - x}px 0px 0px)`});
    ratio = x / width;
  }

  gsap.set(dragger, { x: initialX })
  onDrag(initialX)
})
</script>
  
<style scoped>
.gallery {
  width: 100%;
  aspect-ratio: 3/2;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.gallery img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.dragger {
  width: 8px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: col-resize;
}

.dragger .handle {
  width: 80px;
  height: 60px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
}

.clipped {
  clip-path: inset(0px 50% 0px 0px);
  z-index: 1;
}
</style>