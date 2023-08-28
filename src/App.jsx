import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArrays from './utils/getRandomElemArray'
import Modal from './components/Modal'

function App() {
    
    const phraseRandom = getRandomElemArrays(phrases)
    const numberRandom = getRandomElemArrays([1, 2, 3, 4])

    const [shownPhrases, setShownPhrases] = useState([]);
    const [quote, setQuote] = useState(phraseRandom, shownPhrases); 
    const [numberBg, setNumberBg] = useState(numberRandom); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const bgStyle = numberBg !== null ? {
        backgroundImage:`url(/fondo${numberBg}.jpg)`
    }: {};

    const handleRandomPhrase = () => {
        const randomPhrase = getRandomElemArrays(phrases, shownPhrases);
        if (randomPhrase) {
            setQuote(randomPhrase);
            setShownPhrases([...shownPhrases, randomPhrase])
            setNumberBg(getRandomElemArrays([1, 2, 3, 4]))
        } else {
          setIsModalOpen(true);
        }
    };

    const closeModal = () => {
      setIsModalOpen(false);
    }
    return (
      <div className='container' style={bgStyle}>
          <h1 className='container__title'>Galleta de la fortuna</h1>
          {quote && <Quote phrase={quote} />}
          <BtnQuote handleRandomPhrase={handleRandomPhrase} />
         <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    )
  }

export default App
