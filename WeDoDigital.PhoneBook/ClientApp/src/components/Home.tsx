import React, { Component, useState } from 'react';
import { getContacts } from '../services/contactService';
import { Contact } from '../types/ContactInterface';
import { ContactCard } from './contactCard';
import { TextInput } from '../atoms/textInput';
import debounce from "lodash.debounce";


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
  }

  async componentDidMount(): Promise<void> {
    await this.populateContactData();
  }

  async populateContactData(search?: string) {
    var response = await getContacts(search);
    this.setState({ contacts: response, loading: false });
  }

  async searchContactsData(search: string) {
    this.populateContactData(search)
  }

  static renderForecastsTable(contacts: Contact[]) {
    return (
      <>
        {
          contacts.map(contact =>

            <ContactCard key={contact.id} id={contact.id} forename={contact.forename} surname={contact.surname} contactNumber={contact.contactNumber} />

          )
        }
      </>

    );
  }

  render() {

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Home.renderForecastsTable(this.state.contacts);


    return (
      <div className='grid gap-4'>
        <TextInput searchData={this.searchContactsData} />
        {contents}
      </div>
    );
  }
}
