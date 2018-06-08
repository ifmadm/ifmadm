<template>
  <div id="marketing-page">
        <nav>
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">
              <img src="../assets/img/Logo-with-text.png" alt="Fashion X Project">
            </a>
          </div>
        </nav>
        <section id="hero">
          <div class="container-extended">
              <h4>
                Shop by your body type.
                <span>
                  Share your looks &amp; earn money.
                </span>
                <br/>
                <b>Transform your shopping experience.</b>
              </h4>
              <div class="hero-center">
                  <h4>Leading the ne<span>x</span>t generation of inclusive fashion</h4>
              </div>
          </div>
        </section>
        <section id="signup">
          <div class="row">
            <div class="col m12 l4 signup-sub">
              <h3>How it works?</h3>
                <ul class="collection info-sec">
                  <li class="collection-item avatar">
                    <span class="circle btn-floating btn-large deep-orange lighten-3 z-depth-3">1</span>
                    <h5>Sign up</h5>
                  </li>
                  <li class="collection-item avatar">
                    <span class="circle btn-floating btn-large deep-orange lighten-3 z-depth-3">2</span>
                    <h5>See a curated feed from people with a body similar to yours, wearing cool new clothes from top retailers</h5>
                  </li>
                  <li class="collection-item avatar">
                    <span class="circle btn-floating btn-large deep-orange lighten-3 z-depth-3">3</span>
                    <h5>Shop clothes, directly from the pics</h5>
                  </li>
                  <li class="collection-item avatar">
                    <span class="circle btn-floating btn-large deep-orange lighten-3 z-depth-3">4</span>
                    <h5>Upload your own pictures trying on new clothes and earn money</h5>
                  </li>
                </ul>
            </div>
            <div class="col m12 l8 signform">
                  <form class="z-depth-5">
                    <div class="signup-call">
                        <span>Sign Up Now</span>
                    </div>
                    <div class="row">
                      <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate">
                        <label for="first_name">First Name</label>
                      </div>
                      <div class="input-field col s6">
                        <input id="email" type="text" class="validate">
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        <div class="input-field">
                          <input id="instagram" type="text" class="validate">
                          <label for="instagram">Instagram Handle (ID)</label>
                          <!-- <span class="helper-text" data-error="wrong" data-success="right">Instagram Handle (ID)</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s6">
                        <div class="input-field col s6">
                          <textarea id="icon_prefix2" class="materialize-textarea" placeholder="ft"></textarea>
                          <label for="icon_prefix2">Height</label>
                        </div>
                        <div class="input-field col s6">
                          <textarea id="icon_prefix3" class="materialize-textarea" placeholder="in"></textarea>
                        </div>
                        
                      </div>
                      <div class="input-field col s6">
                        <input id="weight_name" type="text" class="validate">
                        <label for="weight_name">Weight (lbs)</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s4">
                        <input id="age">
                        <label for="age">Age</label>
                      </div>
                      <div class="input-field col s8">
                          <div class="col s4">
                            <label>
                              <input type="checkbox" id="male" />
                              <span>Male</span>
                            </label>
                          </div>
                          <div class="col s4">
                          <label>
                            <input type="checkbox" id="female" />
                            <span>Female</span>
                          </label>
                          </div>
                          <div class="col s4">
                          <label>
                            <input type="checkbox" id="other" />
                            <span>Other</span>
                          </label>
                          </div>
                      </div>
                    </div>
                    <p>
                      <label>
                        <input id="indeterminate-checkbox" type="checkbox" />
                        <span>Are you an Influencer?</span>
                      </label>
                    </p>
                      <div class="input-field col s12">
                        <input id="blog_url" type="text" class="validate">
                        <label for="blog_url">Your blog's URL</label>
                      </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action" @click="addUser">Sign Up</button>
                    <p>
                      <label>Beta access exclusive to first 1000 users who sign up.</label>
                      <br>
                      <label>fashionxproject for men launching December 2018.</label>
                    </p>
                  </form>
            </div>
          </div>
        </section>
        <section class="container-extended deep-orange lighten-3 info">
          <div class="row">
            <div class="col m12 l6">
              <img class="materialboxed" src="../assets/img/iPhone_X.png" style="width:400;margin: 0 auto;padding:2rem;">
            </div>
            <div class="col m12 l6 info-int">
              <h3 style="color:#fff">So, who are we?</h3>
              <p class="flow-text"><b>We want you to shop smarter.</b> Style is not one size fits all, so we're putting the power in your hands.</p>
              <p class="flow-text"><b>Join the first inclusive-fashion platform that allows fashion lovers like you to shop &amp; share looks...all based on your body characteristics!</b></p>
              <p class="flow-text">With your participation and a community of beautiful women from the inside out, it's easier and more fun than ever to envision yourself in that amazing outfit you can’t stop thinking about.</p>
            </div>
          </div>
        </section>
        <section id="shopper">
          <div class="row">
            <h1 >Fashion Lovers</h1>
            <h4 style="font-weight:600">You're unique, Let's celebrate that!</h4>
            <div class="col s12">
                <div class="col s12">
                  <div class="col s1">
                    <img src="../assets/img/check-mark-accent.png" class="circle" alt="checked" />
                  </div>
                  <div class="col s10">
                    <p class="flow-text">Shop directly from the picture</p>
                  </div>
                </div>
                <div class="col s12">
                  <div class="col s1">
                    <img src="../assets/img/check-mark-accent.png" class="circle" alt="checked" />
                  </div>
                  <div class="col s10">
                    <p class="flow-text">Shop for your body</p>
                  </div>
                </div>
                <div class="col s12">
                  <div class="col s1">
                    <img src="../assets/img/check-mark-accent.png" class="circle" alt="checked" />
                  </div>
                  <div class="col s10">
                    <p class="flow-text"><b>Shop with confidence!</b></p>
                  </div>
                </div>                
            </div>
          </div>
          <a class="btn-flat" href="#signup">Sign Up</a>
        </section>
        <section class="teal lighten-2 trenders">
          <div class="row">
          <h1 class="title">Trendsetters</h1>
          <h4 class="title">Become one and earn money! Anyone can do it.</h4>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="../assets/img/camera-logo.png">
              </div>
              <div class="card-content teal lighten-2">
                <p class="flow-text">Snap your pics</p>
                <p class="flow-text">Send it to us with size, brand &amp; where you got it <small>(e.g. Macy’s)</small></p>
                <p class="flow-text">
                  <small>~ We only share pics from the neck-down. We can crop them for you, no prob!<br>
                  ~ Any picture background is ok (bedroom, fitting room, etc.)</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="../assets/img/dollar-sig.png">
              </div>
              <div class="card-content teal lighten-2">
                <p class="flow-text">Earn Money from your pics!</p>
                <p class="flow-text">After your first 10 pics of the month, you can earn $5 for every 10 pics you send!</p>
                <p class="flow-text"><a href="#signup">Sign up</a> and you will receive further instructions</p>
              </div>
            </div>                                           
          </div>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="../assets/img/contract.png">
              </div>
              <div class="card-content teal lighten-2 ">
                  <p class="flow-text"><span>1</span>. Sign up</p>
                  <p class="flow-text"><span>2</span>. <a href="mailto:contact@fashionxproject.com?subject=Trender">Send us</a> your pics
                    <br>
                    <small>
                      ~ They don’t need to be fancy. Just be you!
                    </small>
                  </p>
                  <p class="flow-text"><span>3</span>. We'll email you futher instructions</p>
                  <p class="flow-text" style="font-weight:700">Get exclusive offers for you early birds!</p>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section id="influencers">
          <div class="container">
            <h1>Influencers</h1>
            <h4>Help us, Help you!</h4>
            <div class="row">
              <div class="col l6 m10 s12 z-depth-5 content">
                <p class="flow-text">Drive more traffic to the content you work hard to create. Share your content with us and we will link it to your blog</p>
                <p class="flow-text">Care about inclusive fashion? Our shoppers also do. Now they can buy from your content based on their style preferences, body characteristics or personality.</p>
                <p class="flow-text"><a href="#signup">Sign up</a> &amp; add the link to your blog and <a href="mailto:contact@fashionxproject.com?subject=Influencer "> email us</a> any extra content to share</p>
                <p class="flow-text">Share <a href="https://twitter.com/search?f=tweets&q=fashion&src=typd" target="_blank">@fashionXproject</a> with your followers and use #fashionXproject in your content to empower the movement!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="retailer" style="background-color:#f8f8f8">
          <div class="container row">
          <h1 class="title">Retailers <br/>
            <small>Partner with us first.</small></h1>
          <div class="col m12 l4">
            <div class="card">
              
                <img src="../assets/img/usera.png" class="img-full">
              
              <div class="card-content">
                <p class="flow-text">Increase online and in-store traffic</p>
              </div>
            </div>
          </div>
          <div class="col m12 l4" style="background-color:white">
            <div class="card">
              
                <img src="../assets/img/shopping_cart.png" class="img-full">
              
              <div class="card-content">
                <p class="flow-text">Increase conversion</p>
              </div>
            </div>                                           
          </div>
          <div class="col m12 l4">
            <div class="card">
                <img src="../assets/img/featured.png" class="img-full">
              <div class="card-content">
                  <p class="flow-text">Feature content</p>
              </div>
            </div>
          </div>
          </div>
          <div class="container btn-act" style="text-align:center">
              <a href="mailto:contact@fashionxproject.com?subject=Retailers" class="waves-effect deep-orange lighten-3 waves-orange btn z-depth-5" title="Contact us">Let's talk</a>
            </div>
        </section>
        <footer class="page-footer teal darken-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Do you like Donuts?</h5>
                <p class="grey-text text-lighten-4">We do. Everybody does! And as you ramble on through life, whatever be your goal keep your eye on the donut and not on the hole.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Connect</h5>
                <a class="grey-text text-lighten-3" href="#!" target="_blank"><img src="../assets/img/instagram_logo.png" title="Instagram" alt="Instagram"> </a>
                <a class="grey-text text-lighten-3" href="#!" target="_blank"><img src="../assets/img/pinterest_logo.png" title="Twitter" alt="Twitter"></a>
                <a class="grey-text text-lighten-3" href="#!" target="_blank"><img src="../assets/img/facebook_logo.png" title="Facebook" alt="Facebook"></a>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Fashion X Project © 2018 - <small>All rights reserved.</small>
            <a class="right" href="#!" style="color:#000;font-weight:700"><small>by: <a href="http://giolopera.com/" target="_blank" title="giolopera.com">@GioLopera</a> &amp; <a href="https://www.linkedin.com/in/fuchengrui/" target="_blank" title="LinkedIn">@Rui</a></small></a>
            </div>
          </div>
        </footer>

  </div>
</template>

<script>
import firebase from 'firebase';
import { usersRef } from '../database.js';
export default {
  name: "mark",
  data() {
    return {
      brand: "Faxion X Project"
    };
  },
    
    firebase: {
            users: usersRef
    },
    
    methods: {
        addUser(){
            var firstN = document.getElementById("first_name").value;
            var emailN = document.getElementById("email").value;
            var instagram = document.getElementById("instagram").value;
            var heightFT = document.getElementById("icon_prefix2").value;
            var heightIN = document.getElementById("icon_prefix3").value;
            var weightV = document.getElementById("weight_name").value;
            var ageV = document.getElementById("age").value;
            var maleY = document.getElementById("male").is(':checked');
            var femaleY = document.getElementById("female").is(':checked');
            var otherY = document.getElementById("other").is(':checked');
            var influencerY = document.getElementById("indeterminate-checkbox").is(':checked');
            var blogURL = document.getElementById("blog_url").value;
            usersRef.push({
                firstName: firstN,
                email: emailN,
                instagram_handle: instagram,
                heightFeet: heightFT,
                heightInches: heightIN,
                weight: weightV,
                age: ageV,
                male: maleY,
                female:femaleY,
                other: otherY,
                influencer: influencerY,
                blogUrl: blogURL
            });
        }
    }
};
</script>

<style>

nav {
  background-color: transparent;
  -webkit-box-shadown: none;
  box-shadow: none;
}
nav .brand-logo {
  color: #001200;
  font-weight: 600;
}
.brand-logo {
  margin-left: 3rem;
}
.brand-logo img {
  width: 300px;
  padding-top: 1rem;
}

/* Hero */

#hero {
  text-align: center;
}
#hero h4 {
  padding: 2rem 0;
  letter-spacing: 2.5px;
  line-height: 1.5;
}

.hero-center {
  background-color: rgba(244, 143, 177, 0.6);
}
.hero-center {
  padding: 15rem 0;
  color: #001200;
 
}
.hero-center h4 {
  background: #f8f8f875;
  text-transform: uppercase;
  padding: 3rem 0;
}
#hero h4 span,
.hero-center span {
  color:pink;
}

/* Sign Up */
#signup {
  padding: 5rem;
  text-align: center;
  background-color: #f8f8f8;
}
.signup-call {
  padding: 0 0 3rem;
  text-align: center;
}
.signup-call span {
  font-size: 24px;
  color:pink;
  font-weight: 600;
  border-bottom: 2px solid;
}
.signup-call .btn-flat:hover {
  color: white;
  border-bottom: 5px solid #024602;
}
#signup .container {
  padding:3rem 5rem 5rem;
}
#signup form {
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
  padding: 5rem;
  background-color: #ffffff;
}
#signup .btn {
  font-size: 18px;
  font-size: 18px;
  padding-bottom: 45px;
  padding-top: 10px;
  width: 100%;
}
#signup .collection .collection-item {
  background-color: transparent;
  border-bottom: none;
}
#signup .btn-floating.btn-large {
    width: 56px !important;
    height: 56px !important;
    font-size: 20px;
    font-weight: 700;
}
#signup .collection .collection-item.avatar:not(.circle-clipper) > .circle {
  left:0;
  top:2rem;
  cursor:default;
}
#signup .collection .collection-item.avatar {
  line-height: 7;
}
.info-sec {
  padding-left: 5rem !important;
  text-align: left;
}
#signup .collection.with-header .collection-header {
  background-color: transparent;
  border-bottom:none;
}
#signup .collection {
  border: none;
}
#signup [type="checkbox"] + span:not(.lever) {
  padding-left: 24px;
}

/* Info */
.info {
  text-align: left;
  padding: 5rem 10rem;
}
.left-content {
  padding: 3rem 5rem;
}
.right-content {
  padding: 3rem;
}
.row .col.info-sub {
  padding:7rem;
}
.info h3 {
  text-align: center;
}
.info-sec h5 {
  display: inline-block;
  font-size: 2rem;
  margin-left: 2rem;
}
.info p {
  color: #f8f8f8;
}
.info-int {
  padding: 5rem;
}



/* Shopper */

#shopper {
  padding: 10rem;
  background: url(../assets/img/img-grid.png) right no-repeat;
  background-size:contain; 
}


#shopper .row .col.s1 {
  width: 5.333333%;
}
#shopper .sub {
  padding: 5rem !important;
}
#shopper img.circle {
  width: 46px;
  margin-top: 1.2rem;
}
#shopper p {
  padding-left: 1.5rem;
}
#shopper a {
  font-size: 22px;
  text-transform: none;
  font-weight: 600;
  padding: 20px 0;
  text-decoration: underline;
}
#shopper a:hover {
  text-decoration: none;
}



/* Trenders */
.trenders {
  padding: 5rem;
  /* height: -webkit-fill-available; */
  margin-bottom: 0;
}
.trenders .title {
  color: #001200;
  padding-left: 5rem;
}

.trenders .card {
  background-color: transparent;
  box-shadow: none;
  padding: 4rem;
}
.trenders .card-image img {
  width: 16rem;
  margin: 10px auto;
}
.trenders .card .card-content {
  padding: 5rem 3rem;
  background-color: #f8f8f8;
  box-shadow: 0 68px 54px rgba(0, 0, 0, 0.3), 0 36px 35px rgba(0, 0, 0, 0.22);
}
.trenders a,
#influencers .content a {
  color: #f8f8f8;
  font-weight: 700;
  text-decoration: underline;
}
.trenders a:hover,
.trenders a:focus,
.trenders a:active {
  color:#001200;
}
.trenders p {
  color: #f8f8f8;
  margin: 2rem 0 !important;
}
.trenders p span {
  font-weight: 700;
}

/* Influencers */
#influencers {
  padding: 12rem 0;
}
#influencers {
  background: url(../assets/img/influencers_background.png) center/cover no-repeat;
}
#influencers h1 {
  display: inline-block;
  color: #f8f8f8
}
#influencers h4 {
  margin: 0 0 3rem;
  color: #f8f8f8;
}
#influencers .content {
  padding: 5rem;
  background-color: #c46b8975;
  color: #f8f8f8;
}
#influencers .content a:hover,
#influencers .content a:focus,
#influencers .content a:active {
  color: #874b5f;
}

/* Retailer */
#retailer {
  padding: 5rem 0;
}
#retailer .title {
  color: #001200;
}
#retailer .card {
  background: transparent;
  box-shadow: none;
  text-align: center;
}
#retailer .card .card-content {
  text-align: center;
  color: #ffffff;
  padding: 5rem;
  margin-top: -3rem;
}
#retailer .card-content p {
  padding-top: 2rem;
  color: #001200;
}
#retailer .btn-act {
  width: 400px;
  margin: 3rem auto;
  padding: 12px;
}
#retailer .btn-act a {
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  height: 60px;
  padding: 12px;
}

/* Footer */

footer img {
  margin-right: 2rem;
}
footer a {
  color: #001200;
}

/* General */
h1 {
  font-size: 6.2rem;
  line-height: 1.3;
}
.text-center {
  text-align: center;
}
.img-full {
  width: 346px;
}

/* Media Query */
@media only screen and (max-width: 1063px) {
  #signup form {
    padding: 3rem;
  }
  .trenders .card {
    padding: 1rem;
  }
  #retailer .card .card-content {
    padding: 15px 0;
  }
  .img-full {
      width: 235px;
  }
  .info-int {
    padding: 5rem 2rem;
  }
  
}
@media only screen and (max-width: 900px){
  #signup form {
    padding: 3rem;
  }
}
@media only screen and (max-width:768px) {
  #hero h4,
  .trenders h4,
  #influencers h4,
  #retailer h4 {
    font-size: 180%;
  }
  #signup {
    padding: 5rem 2rem;
  }
  .signup-sub {
    padding: 5rem;
  }
  .info {
    padding: 5rem;
  }
  .info-sec {
    padding-left: 0 !important;
  }
  #shopper {
    padding: 4rem;
    background: #ffffff;
  }
  .trenders h1,
  #shopper h1,
  #influencers h1,
  #retailer h1 {
    font-size: 4rem !important;
  }
  .trenders {
    padding: 2rem;
  }
  .trenders .title {
    padding-left: 0;
  }
  .img-full {
    width: 346px;
  }
}
@media only screen and (max-width:500px) {
  /* #app {width: 110% !important} */
  #signup {
    padding: 2rem;
  }
  .info-int {
    padding: 5rem 1rem;
  }
}
</style>