import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';



function App() {
  return (
    
    <div>
      <NavBar />
      <Container className={styles.Main}>
        <h1>Homepage</h1>
        <h1>Sign in</h1>
      </Container>
    </div>
    
  );
}

export default App;