<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <ul class="nav flex-column">
            <li class="nav-item">
              <nuxt-link to="/" tag="a" class="nav-link active">All Employees</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/new-employee" tag="a" class="nav-link">New Employee</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/search" tag="a" class="nav-link">Search</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-10">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
