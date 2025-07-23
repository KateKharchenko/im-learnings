<template>
  <nav class="top-nav">
    <NuxtLink to="/" class="home-link">
      ← Back to Home
    </NuxtLink>
  </nav>
</template>

<script setup>
// No props needed for now, but can be extended later
</script>

<style scoped>
.top-nav {
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 2rem;
}

.home-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.home-link:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateX(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
</style>
