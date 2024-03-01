import Titulo from './components/Header';
import MyCard from './components/MyCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css"
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Titulo title="Adopta un Perrito" />
      <div className="cardContainer">
        <MyCard
          url="https://cdn.pixabay.com/photo/2016/06/05/20/35/doberman-dog-1438131_1280.jpg"
          description="Descubre la nobleza y lealtad de Balto. Este majestuoso perro busca un hogar donde pueda brindar protección y amor incondicional. ¿Estás listo para darle una segunda oportunidad?"
          title="Balto"
          race="Doberman"
          color="success"
        />
        <MyCard
          url="https://plus.unsplash.com/premium_photo-1688754799383-3c0490105817?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Odie, con su elegante pelaje moteado, busca un compañero humano que valore su energía juguetona y su carácter amigable. ¿Podrías ser tú su compañero perfecto?"
          title="Odie"
          race="Dalmata"
          color="primary"
        />
        <MyCard
          url="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Nuestro querido Bolt, con su mezcla única de razas, tiene un corazón lleno de gratitud esperando por un hogar cálido y amoroso. ¿Te animas a darle un hogar para siempre?"
          title="Bolt"
          race="Quiltro"
          color="danger"
        />
        <MyCard
          url="https://plus.unsplash.com/premium_photo-1668208365386-4198381c6f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Hachiko, con su mirada penetrante y su espíritu aventurero, está ansioso por encontrar un hogar que pueda satisfacer su necesidad de actividad y cariño. ¿Estás preparado para embarcarte en una aventura con este compañero fiel?"
          title="Hachiko"
          race="Husky"
          color="warning"
        />
      </div>
      <Footer/>
    </>
  );
}

export default App
