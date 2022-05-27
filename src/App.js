import './App.css';
import MultiselectComponent from './components/Multiselect';
import "./assets/css/multiselect.css";


function App() {
  return (
    <>
      <div className='centered-container'>
        <h1 className='centered-h1-title'> Welcome to my Multiselect Component! </h1>
        <MultiselectComponent
          values={[ 
            // Array of items that make up the multiselect are passed into the component
            // Should a 'Select All' functionality be needed, simply pass it in as an object
            {
              cat: 'Food',
              key: 'Pizza 🍕'
            },
            {
              cat: 'Food',
              key: 'Burger 🍔'
            },
            {
              cat: 'Food',
              key: 'Ice Cream 🍦'
            },
            {
              cat: 'Instruments',
              key: 'Guitar 🎸'
            },
            {
              cat: 'Instruments',
              key: 'Piano 🎹'
            },
            {
              cat: 'Instruments',
              key: 'Trumpet 🎺'
            },
            {
              cat: 'Sports',
              key: 'Soccer ⚽'
            },
            {
              cat: 'Sports',
              key: 'Hockey 🏒'
            },
            { key: "Select All"},
          ]}
        />
      </div>
    </>
  );
}

export default App;
