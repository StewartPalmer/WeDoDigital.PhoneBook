import { Contact } from "../types/ContactInterface";
import { NewContact } from "../types/NewContactInterface";
import { UpdateContact } from "../types/UpdateContactInterface";


export async function getContacts(search?: string):  Promise<Contact[]> {
   
    const response = await fetch(`api/contacts?surname=${search ?? ''}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });

    return <Contact[]>response;
}

export async function getContactById(id: string): Promise<Contact> {

    const response = await fetch(`api/contacts/${id}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });

    return <Contact>response;
}

export async function addContact(contact: NewContact): Promise<boolean>  {

    const response = await fetch(`api/contacts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(contact),
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.ok;
    });

    return response;
}

export async function updateContact(contact: UpdateContact): Promise<boolean>  {

    const response = await fetch(`api/contacts/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(contact),
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.ok;
    });

    return response;
}

export async function deleteContact(id: string): Promise<boolean>  {
    const response = await fetch(`api/contacts/${id}`, {
        method: "DELETE",
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.ok;
    });

    return response;
}