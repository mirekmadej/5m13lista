import Kurs from './Kurs';
import './App.css';

function App() {
      let kursy = [
      {id:1, nazwa:"C++ dla początkujących",hours:16},
      {id:2, nazwa:"Zachaczanie każdego krawężnika",hours:16},
      {id:3, nazwa:"Urwij zderzak z Dinem",hours:9},
      {id:4, nazwa:"Katuj Audi jak Kubica",hours:6},
      {id:5, nazwa:"I cyk seryjką z UKMa",hours:12},
      {id:6, nazwa:"Kurs dla szczelców poborowych",hours:1}
    ]
   
    function ZapiszNaKurs2(){
      let imie = document.getElementById("Inp2ImKurs").value;
      let kurs = document.getElementById("Inp2Kurs").value-1;
      if(kurs>kursy.length || kurs<0) return;
      let nazwaKursu = kursy[kurs].nazwa;
      console.log(imie+" zapisany na kurs: "+nazwaKursu);
    }
  return (
    <div className="App">
      <h1>lista kursów bez bootstrapa</h1>
      <h1>Oferta kursów</h1>
      <ol>
        {kursy.map((e)=>(<Kurs key={e.id} tab={e}/>))}
      </ol>
      <label>Imie:</label>
      <input type='text' id='Inp2ImKurs'/><br/>
      <label>Kurs:</label>
      <input type='text' id='Inp2Kurs'/><br/>
      <button onClick={ZapiszNaKurs2}>Zapisz</button>
      <hr/>

    </div>
  );
}

export default App;
