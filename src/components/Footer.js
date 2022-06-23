import { SimpleGrid , Text} from '@mantine/core';
import React from 'react';

export const Footer = () => {
    return (
    <div >
        <SimpleGrid cols={5} style={{ padding:'50px' }}>
      <div style={{spac: '2px'}}>
      <Text style={{fontSize: '13px', color: '#5f739f'}}>PRODUCT INFO</Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Product care & Cleaning</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Warranty for ebags Brand</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Warranty for Other Brands</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Airline Carry-On Guide</a></Text><br/>
      </div>
      <div>
      <Text style={{fontSize: '13px', color: '#5f739f'}}>Orders</Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Track Your Order</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Shipping & Delivery</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Returns Policy</a></Text><br/>
      </div>
      <div>
      <Text style={{fontSize: '13px', color: '#5f739f'}}>Customer Service</Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Contact Us</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>FAQs</a></Text><br/>
      </div>
      <div>
      <Text style={{fontSize: '13px', color: '#5f739f'}}>ABOUT EBAGS</Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>About Us</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Join our Affiliates Program</a></Text><br/>
      </div>
      <div>
      <Text style={{fontSize: '13px', color: '#5f739f'}}>SITE TERMS</Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Privacy Policy</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>Term of Use</a></Text><br/>
      <Text style={{fontSize: '14px'}}> <a href='/' style={{textDecoration: 'none' , color: '#121f42'}}>AccessibilityStatement</a></Text><br/>
      </div>
      </SimpleGrid>
  </div>
    );
};