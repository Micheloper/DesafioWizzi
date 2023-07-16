<template>
  <article class="containerPass centrado">
    <header>
      <div class="containerHeader containerTitle">Boarding Pass</div>
      <div class="containerPassPadding containerOrigemDestino fixo">
        <div class="containerOD">
          <div class="city containerCity containerCityLeft">
            <div class="cityOrigem">
              <font-awesome-icon
                icon="fa-solid fa-plane-departure"
                size="2xl"
              />
              Origem
            </div>
            <div class="cityCode">{{ $route.query.origin || "None" }}</div>
          </div>

          <div class="city containerCity containerCityRight">
            <div class="cityOrigem">
              <font-awesome-icon icon="plane-arrival" size="2xl" />
              Destino
            </div>
            <div class="cityCode">
              <font-awesome-icon icon="arrow-right-arrow-left" />

              {{ $route.query.destination || "None" }}
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="containerPassPadding">
      <div class="data dataBlock">
        <div class="dataLabel">
          <font-awesome-icon icon="passport" />
          Passageiro
        </div>
        <div class="dataValue">
          {{ $route.query.passenger || "Nome" }}
        </div>
        <div class="dataLabel">
          <font-awesome-icon icon="at" />
          Email
        </div>
        <div class="dataValue">{{ $route.query.email || "Email" }}</div>
      </div>
      <div class="containerQuantidade">
        <div class="data">
          <div class="dataLabel">Data de Ida</div>
          <div class="dataValue">
            {{ $route.query.departureDate || "DataDeIda" }}
          </div>
          <div class="dataLabel">Data de Volta</div>
          <div class="dataValue">
            {{ $route.query.returnDate || "DataDeVolta" }}
          </div>
        </div>

        <div class="data">
          <div class="dataLabel">Adultos</div>
          <div class="dataValue">
            <font-awesome-icon icon="user" /> {{ $route.query.adults }}
          </div>
        </div>

        <div class="data">
          <div class="dataLabel">Menor</div>
          <div class="dataValue">
            <font-awesome-icon icon="child" /> {{ $route.query.children }}
          </div>
        </div>
      </div>
      <img
        class="containerPass__barcode"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43525/barcode.png"
        alt="Barcode"
      />
    </section>
  </article>
</template>

<script>
export default {
  name: "BoardingView",
  props: {
    origin: String,
    destination: String,
    passenger: String,
    email: String,
    departureDate: String,
    returnDate: String,
    adults: String,
    children: String,
  },
};
</script>

<style scoped>
.containerOD {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.containerPass {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 20px 80px 10px rgba(0, 0, 0, 0.25);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  max-width: 500px;
  overflow: hidden;
  width: 100%;
}
.containerQuantidade {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.containerPassPadding {
  padding: 8vw 5vw 7vw;
}
@media (min-width: 500px) {
  .containerPassPadding {
    padding: 40px 40px 35px;
  }
}
.containerHeader {
  background-color: #494545;
}
.containerOrigemDestino {
  background-color: #85e282;
}
.containerTitle {
  color: #808080;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.4;
  padding: 18px 20px;
  text-align: center;
  text-transform: uppercase;
}
.containerCity {
  margin-bottom: 4vw;
  text-align: center;
}
.containerCity:last-child {
  margin-bottom: 0;
}
@media (min-width: 320px) {
  .containerCity {
    margin-bottom: 0;
  }
}
@media (min-width: 320px) {
  .containerCityLeft {
    float: left;
  }
}
@media (min-width: 320px) {
  .containerCityRight {
    float: right;
  }
}
@media (min-width: 500px) {
  .containerPass__barcode {
    display: block;
    margin-top: 40px;
  }
}

@media (min-width: 500px) {
  .centrado {
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    position: absolute;
    top: 56%;
  }
}

.city {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
}
.cityCode {
  font-size: 20vw;
  letter-spacing: -5px;
}
@media (min-width: 320px) {
  .cityCode {
    font-size: 15vw;
    padding: 10px;
  }
}
@media (min-width: 500px) {
  .cityCode {
    font-size: 60px;
    margin: 10px;
  }
}
.cityOrigem {
  font-size: 12px;
  line-height: 1.2;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 500px) {
  .cityOrigem {
    font-size: 14px;
  }
}

.data {
  display: inline-block;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 8vw;
  margin-right: 10vw;
  text-transform: uppercase;
}
@media (min-width: 500px) {
  .data {
    margin-top: 40px;
    margin-right: 60px;
  }
}
.dataLabel {
  color: #6dda6a;
  font-size: 12px;
}
@media (min-width: 320px) {
  .dataLabel {
    font-size: 14px;
  }
}
.dataValue {
  color: #2c2929;
  font-size: 18px;
  padding: px;
}
.dataBlock {
  display: block;
  margin: 1px;
}

.fixo:after,
.fixo:before {
  content: " ";
  display: table;
}
.fixo:after {
  clear: both;
}
img {
  margin-top: 20px;
}
</style>
