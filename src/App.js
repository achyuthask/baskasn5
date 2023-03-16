
import './App.css';
import Caard from './components/card';

function App() {
  return (
    <>
    <Caard title="Bright" 
    subtitle="2011, David ayer"
    img="https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg" 
    cast ="Action,Crime,Fantasy"
    desc="One night, Ward and Jakoby respond to a disturbance at a safe house for the Shield of Light,
     an extremist group that prophesies the return of the Dark Lord, an ancient semi-mythical figure defeated many millennia ago.
      Inside, 
    Ward and Jakoby apprehend the lone survivor, an elf girl named Tikka in possession of a wand."/>


<Caard title="Tomb Raider" 
    subtitle="2018, Roar uthag"
    img="https://upload.wikimedia.org/wikipedia/en/b/bd/Tomb_Raider_%282018_film%29.png" 
    cast="Action,Fantasy"
    desc="ollowing the disappearance of her father, Lord Richard Croft, Lara Croft makes a living as a bike courier. 
    She is arrested after a collision with a police car. Richard's business partner Ana Miller posts her bail and 
    urges Lara to accept her inheritance. Lara believes her father to still be alive, 
    but Miller warns Lara that if she does not claim her inheritance, the family estate, Croft Manor, will be sold off"/>
    </>
  );
}

export default App;
