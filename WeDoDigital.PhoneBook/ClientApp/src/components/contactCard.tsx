import { GiCharacter } from "react-icons/gi"
import { Contact } from "../types/ContactInterface"
import { TbTrashX } from "react-icons/tb"
import { MdModeEditOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom"

type ContactCardProps = Contact & { className?: string, deleteContact: (id: string) => Promise<void> }


export const ContactCard = ({ id, forename, surname, contactNumber, className, deleteContact }: ContactCardProps) => {

    const navigate = useNavigate();

    return (<div className={`relative flex h-full w-full bg-indigo-700 shadow-lg rounded-lg p-5 ${className}`}>

        <div className="mr-4">
            <GiCharacter className='h-4 w-4 md:h-12 md:w-12 text-white'></GiCharacter>
        </div>
        <div>

            <div className="text-white text-xl">{forename} {surname}</div>
            <div className="text-white text-sm">{contactNumber}</div>
        </div>
        <div className="ml-auto mr-0 mb-2">
            <button type="button" onClick={e => navigate(`edit/${id}`)} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center mr-4  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-greeen-900"><MdModeEditOutline className='h-4 w-4 text-white'></MdModeEditOutline></button>

            <button type="button" onClick={e => deleteContact(id)} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><TbTrashX className='h-4 w-4 text-white'></TbTrashX></button>

        </div>

    </div>)
}
