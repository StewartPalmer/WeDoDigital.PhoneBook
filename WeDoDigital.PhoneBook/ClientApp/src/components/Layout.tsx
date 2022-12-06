import React, { Component } from 'react';
import { Container } from 'reactstrap';


interface LayoutProps {
  children: React.ReactNode;
}


export class Layout extends Component<LayoutProps> {
  static displayName = Layout.name;

  render() {
    return (
      <div className='bg-gray-100 dark:bg-gray-700 min-h-screen pt-8'>     
        <Container tag="main" className='max-w-screen-md mx-auto'>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
