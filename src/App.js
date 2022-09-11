
import {withAuthenticator} from '@aws-amplify/ui-react'
import {API} from 'aws-amplify'
import { useEffect, useState } from 'react'
import {listPets} from './graphql/queries'
import {createPet, deletePet} from './graphql/mutations'

function App() {
  const [petsData, setPetsData] = useState([])
  useEffect( () => {
    const fetchObj = async () => {
      const res = await API.graphql({query: listPets})
      return res.data.listPets.items
    }
    fetchObj().then(pets=>setPetsData(pets))
  }, []) 

  const handleSubmit = async (event) => {
    
    event.preventDefault()
    try{
      const {data} = await API.graphql({
        query: createPet,
        variables: {
          input: {
            name: event.target.petName.value,
            description: event.target.petDescription.value,
            petType: event.target.petType.value
          },
        }
      })
      setPetsData([...petsData, data.createPet])
    }catch(error){
      console.log(error)
    } 
  }

  const handlePetDelete = async (petID) => {
    const newPetList = petsData.filter(pet => pet.id !== petID)
    try{
      await API.graphql({
        query: deletePet,
        variables: {
          input: {
            id: petID
          }
        }
      })
      setPetsData(newPetList)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='enter a name' name = 'petName' />
        <input placeholder='enter a description' name = 'petDescription' />
        <select name = 'petType'>
          <option value='CAT'>Cat</option>
          <option value='BIRD'>Bird</option>
          <option value='DOG'>Dog</option>
          <option value='OTHER'>Other</option>
        </select>
        <button>Create pet</button>
      </form>
      <main>
        current pet lists:
        <ul>
          {
            petsData.map((pet) => (
              <li onClick = {() => handlePetDelete(pet.id)}>
                <article>
                  <h2>{pet.name}</h2>
                  <h5>{pet.type}</h5>
                  <p>{pet.description}</p>
                </article>
              </li>
            ))
          }
        </ul>
        click the pet to delete it from the database
        (you can refresh to verify it's not there)
      </main>
    </div>
  );
}

export default withAuthenticator(App);
