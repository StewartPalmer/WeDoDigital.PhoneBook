import { GiCharacter } from "react-icons/gi"
import { Contact } from "../types/ContactInterface"

type ContactCardProps = Contact & { className?: string }


export const ContactCard = ({ id, forename, surname, contactNumber, className }: ContactCardProps) =>

    <div className={`relative flex  h-full w-full bg-indigo-700 shadow-lg rounded-lg p-5 ${className}`}>

        <div className="mr-4">
            <GiCharacter className='h-4 w-4 md:h-12 md:w-12 text-white'></GiCharacter>
        </div>
        <div>

            <div className="text-white text-xl">{forename} {surname}</div>
            <div className="text-white text-sm">{contactNumber}</div>
        </div>

    </div>
