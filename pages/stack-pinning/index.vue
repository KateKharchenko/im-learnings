<template>
  <div>
    <h1>What is Lorem Ipsum?</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    <h2>Where does it come from?</h2>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

    <section class="panel a">
        ONE
    </section>
    <section class="panel b" style="height: 80vh">
        TWO
    </section>
    <section class="panel c" style="height: 50vh">
        THREE
    </section>
    <section class="panel d">
        FOUR
    </section>
    <section class="panel e">
        FIVE
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const distance = 10;
  const panels = gsap.utils.toArray(".panel");
  const trigger = ScrollTrigger.create({
    trigger: panels[panels.length - 1],
    start: "center center",
  });

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "center center",
      end: () => trigger.start + distance,
      pin: true,
      pinSpacing: false,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  });
});

</script>

<style scoped>
.panel {
    box-sizing: border-box;
    width: 100%;
    height: 90vh;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    border-radius: 40px;
}

.a {
    background-color: #EDAFB8;
    color: #fff;
}

.b {
    background-color: #F7E1D7;
    color: #fff;
}

.c {
    background-color: #DEDBD2;
    color: #fff;
}

.d {
    background-color: #B0C4B1;
    color: #fff;
}

.e {
    background-color: #4A5759;
    color: #fff;
}
</style>