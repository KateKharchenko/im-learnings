<template>
  <div class="container">
    <header class="header">
      <h1 class="title">IM Learnings</h1>
      <p class="subtitle">Industrial Media Learning Cases</p>
    </header>
    
    <nav class="navigation">
      <h2>Projects</h2>
      <div class="nav-grid">
        <NuxtLink to="/stack-pinning" class="nav-card">
          <h3>GSAP Stack Pinning</h3>
          <p>GSAP ScrollTrigger stack pinning animation demo</p>
          <span class="card-arrow">→</span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
// Set page meta
useHead({
  title: 'IM Learnings - Interactive Media Projects',
  meta: [
    { name: 'description', content: 'Collection of interactive media learning projects and demos' }
  ]
})
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.navigation {
  max-width: 800px;
  margin: 0 auto;
}

.navigation h2 {
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.nav-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.nav-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
}

.nav-card.placeholder {
  opacity: 0.6;
  cursor: default;
}

.nav-card.placeholder:hover {
  transform: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.nav-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.nav-card p {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  color: #667eea;
  transition: transform 0.3s ease;
}

.nav-card:hover .card-arrow {
  transform: translateX(4px);
}

.footer {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 3rem;
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .nav-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .nav-card {
    padding: 1.5rem;
  }
}
</style>