<script setup></script>
<template>
  <footer>
    <div class="container-footer">
      <div class="direitos-footer">
        <span>Todos os direitos reservados &copy | 2020-2025</span>
      </div>
      <div class="social-footer">
        <nav>
          <ul>
            <li>
              <a href="#" target="_blank"><i class="ri-facebook-box-fill"></i></a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="ri-twitter-x-fill"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/*footer {
  margin: auto;
  width: 100%;
  bottom: 0;
  position: fixed;
  padding-top: 20px;
}*/

.container-footer {
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  border-top: 1px solid rgb(17, 24, 39);
}

.direitos-footer span {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}

.social-footer ul {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-footer a {
  font-size: 20px;
  color: white;
}

@media screen and (max-width: 640px) {
  .container-footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
