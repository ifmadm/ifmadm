<template>
  <div id="app">
    <!-- <header>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">IFMADM</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="*">Home</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </nav>
    </header> -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
