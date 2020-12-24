<template>
<div class="logoWrapper dark:logo-bg-animate">
  <svg class="NuxtLogo" width="100%" height="100%" viewBox="0 0 620 140">
    <text 
      x="30" y="90" 
      fill="rgba(126, 58, 242, var(--bg-opacity)" font-size="100" font-family="'Russo One'">
      
      lol-record
    </text>
  </svg>
  </div>
</template>

<style lang="scss">
.logoWrapper {
  position:relative;
  max-width:180px;
  margin:0 auto;
   &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(120deg, transparent, transparent, rgba(255, 255, 255, 0.226));
    animation: animation-16jpnkj 2.5s ease-in-out infinite;
  }
  .NuxtLogo {
    /* animation: 1s appear; */
    margin: auto;
  }
}

.theme-dark .dark\:logo-bg-animate {
  &:after {
    background-image: linear-gradient(120deg, transparent, transparent, #1a1c2342) !important;
  }
}
@keyframes animation-16jpnkj {
  from {
    background-position: -200px 0; }
  to {
    background-position: calc(200px + 100%) 0; } }
/* 
@keyframes appear {
  0% {
    opacity: 0;
  }
} */
</style>
