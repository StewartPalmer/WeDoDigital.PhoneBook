import React, { Component, useState } from 'react';
import { getContacts, deleteContact } from '../services/ContactService';
import { Contact } from '../types/ContactInterface';
import { ContactCard } from '../components/ContactCard';
import { SearchBoxInput } from '../components/SearchBoxInput';
import { HiPlus } from 'react-icons/hi';
import { Link, Route } from 'react-router-dom';


type HomeProps = {

}
type HomeState = {

  contacts: Contact[],
  search: string,
  loading: boolean,
}

export class Home extends Component<HomeProps, HomeState> {
  static displayName = Home.name;

  constructor(props: HomeProps) {
    super(props);
    this.state = { contacts: [], loading: true, search: '' };
    this.searchContactsData = this.searchContactsData.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  async componentDidMount(): Promise<void> {
    await this.populateContactData();
  }

  async populateContactData(search?: string) {
    var response = await getContacts(search);
    this.setState({ contacts: response, loading: false });
  }

  async deleteContact(id: string) {
    console.log('hey')
    await deleteContact(id)
    await this.populateContactData();
  }

  async searchContactsData(search: string) {
    this.populateContactData(search)
  }

  renderForecastsTable(contacts: Contact[]) {
    return (
      <>
        {
          contacts.map(contact =>

            <ContactCard key={contact.id} id={contact.id} forename={contact.forename} surname={contact.surname} contactNumber={contact.contactNumber} deleteContact={this.deleteContact} />

          )
        }
      </>

    );
  }

  render() {

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderForecastsTable(this.state.contacts);


    return (
      <div>
        <div className='flex justify-end w-full'>
        <Link to="Add" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center mr-4  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-greeen-900"><HiPlus  className='h-4 w-4 text-white'></HiPlus></Link>
   
        </div>
      <div className='grid gap-4'>
        <SearchBoxInput searchData={this.searchContactsData} />
        {contents}
      </div>
      </div>
    );
  }
}
