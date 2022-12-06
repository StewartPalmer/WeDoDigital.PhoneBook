
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addContact } from "../services/ContactService";
import { updateContact } from '../services/ContactService'
import { getContactById } from '../services/ContactService'
import { UpdateContact } from "../types/UpdateContactInterface";
import { useNavigate } from 'react-router-dom';


type HomeState = {


}


export const Edit = ({ }: HomeState) => {
    const navigate = useNavigate();
    const params = useParams();
    let { id } = useParams();
    const [contactId, setContactId] = useState(id)
    const [forename, setForename] = useState('');
    const [surname, setSurname] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!!contactId) {
            setLoading(true)
            getContactById(contactId).then(response => {
                setContactId(response.id)
                setContactNumber(response.contactNumber)
                setForename(response.forename)
                setSurname(response.surname)
                setLoading(false)
            })



        }

    }, [contactId]);

    const addContactRequest = () => {
        var model: UpdateContact = {
            id: contactId,
            forename: forename,
            surname: surname,
            contactNumber: contactNumber
        }
        if (!!contactId) {
            updateContact(model).then(x => {

                navigate('/')
            })
        }
        else {

            addContact(model).then(x => {

                navigate('/')
            })
        }



    }


    return <> {loading ? 'Loading...' : <div className='grid grid-cols-2 gap-4'>
        <div>

            <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Forename</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John"
                value={forename}
                onChange={e => setForename(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Surname</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Smith"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                required />
           
        </div>
        <div className="col-span-2">
            <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Contact Number</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Smith"
                value={contactNumber}
                onChange={e => setContactNumber(e.target.value)}
                required />

        </div>
        <div>
            <button onClick={addContactRequest} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </div>
    </div>} </>
}



