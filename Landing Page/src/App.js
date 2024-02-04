import './App.css';
import FoodCard from './Components/foodCard';
import StepsCard from './Components/stepsCard';

import img from './photos/food.png';
import italy from './photos/italy.jpeg';
import mexican from './photos/mexican.jpg';
import america from './photos/america.jpg';
import asian from './photos/asian.jpg';
import meals from './photos/salad.webp';
import health from './photos/health.jpg';
import quick from './photos/quick.jpg';
import special from './photos/last.jpg';
import step1 from './photos/step1.webp';
import step2 from './photos/step2.jpg';
import step3 from './photos/step3.jpg';
import contact1 from './photos/contact1.png';
import contact2 from './photos/contact2.png';
import contact3 from './photos/contact3.png';

function App() {
  const foods = [
    { name: "Italian Cuisine", src: italy },
    { name: "Mexican Delights", src: mexican },
    { name: "Classic American", src: america },
    { name: "Asian Fusion", src: asian },
    { name: "Mediterranean Meals", src: meals },
    { name: "Healthy Choices", src: health },
    { name: "Quick and Easy", src: quick },
    { name: "Gourmet Specials", src: special }
  ]

  const steps = [
    {step:"Step 1", name:"Search Recipes", para: "Find dishes based on ingredients, cuisien, and prep time.",src:step1},
    {step:"Step 2", name:"Customize Portions", para: "Adjust servings to match your meal plans.",src:step2},
    {step:"Step 3", name:"Step-by-Step Guides", para: "Follow detailed instructions for foolproof cooking.",src:step3},
  ]

  return (
    <div className="App">
      <div className='header'>
        <input type='text' placeholder='Find Recipes' />

        <select>
          <option>Food Groups</option>
        </select>

        <button>Get Cooking</button>
      </div>

      <div className='main'>

        <div className='left'>
          <h1>Welcome to a World of Flavors</h1>
          <h3>Discover new recipes, explore cuisines and more.</h3>
          <button>Start Exploring</button>
        </div>

        <div className='right'>
          <img src={img} alt="food" />
        </div>

      </div>

      <div className='foods'>
        <h1>Featured Recipes Selections</h1>
        <h3>Handpicked dishes from around the world.</h3>

        <div className='cards'>
          {foods.map(el=><FoodCard name={el.name} src={el.src} />)}
        </div>
      </div>

      <div className='steps'>
        <h1>Navigate Your</h1>
        <h1>Culinary Journey</h1>
        <h3>Explore how Gourmet works.</h3>
        <div className='steps-card'>
          {steps.map(el=><StepsCard src={el.src} name={el.name} para={el.para} step={el.step} />)}
        </div>
      </div>

      <div className='join'>
        <h1>Ready to Unleash Your</h1>
        <h1>Inner Chef</h1>
        <h3>Join our community of food lovers.</h3>
        <button>Join Now</button>
      </div>

      <div className='contact'>
        <div className='contact-left'>
          <h1>Stay Updated with Deliciousness</h1>
          <h3>Subscribe for weekly recipe inspiration.</h3>
          <div className='contact-input'>
            <input type='text' placeholder='Your Email' />
            <button>Sign Up</button>
          </div>
        </div>

        <div className='contact-right'>
          <div>
            <img src={contact1} alt='Food'/>
            <h2>Vegetarian Options</h2>
            <h3>Explore a veraity of plant-based dishes.</h3>
          </div>
          <div>
          <img src={contact2} alt='Food'/>
            <h2>Quick Meals</h2>
            <h3>Whip up tasty meals in under 30 minutes.</h3>
          </div>
          <div>
          <img src={contact3} alt='Food'/>
            <h2>Dessert Delights</h2>
            <h3>Indulge in our selection of sweet treats.</h3>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-link">
          <div>
            <h2>About Us</h2>
            <a href='#'>Our Story</a>
            <a href='#'>Join Our Team</a>
            <a href='#'>Latest Updates</a>
          </div>
          <div>
            <h2>Recipe Categories</h2>
            <a href='#'>Breakfast</a>
            <a href='#'>Lunch</a>
            <a href='#'>Dinner</a>
          </div>
          <div>
            <h2>Follow Us</h2>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
            <a href='#'>Food Forums</a>
          </div>
        </div>

        <div className='footer-mail'>
          <h2>Weekly Recipe Digest</h2>
          <h3>Get the latest recipes and cooking tips delivered to your inbox.</h3>
          <div className='footer-mail-input'>
            <input type='email' placeholder='example@foodie.com' />
            <button>-&gt;</button>
          </div>
          <div className='term'>
            <a href='#'>Terms of Service</a>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
