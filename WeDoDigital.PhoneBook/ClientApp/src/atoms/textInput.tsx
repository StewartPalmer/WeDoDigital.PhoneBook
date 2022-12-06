import { useCallback, useEffect, useState } from "react"
import { GiCharacter } from "react-icons/gi"
import { Contact } from "../types/ContactInterface"

type TextInputProps = {
searchData:(data:string) => Promise<void>
}


export const TextInput = ({ searchData }: TextInputProps) => {
 


    return <div>
        <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Search By Surname</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
        placeholder="Smith"
        onChange={e => searchData(e.target.value)}
         required />
    </div>
}
