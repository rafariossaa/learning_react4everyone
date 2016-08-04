import React from 'react';


// Cambiado a un functional stateless component

const Contact = ({contact, item}) => 
       <li>
		  {contact.name} {contact.phone} {item}
	  </li>


export default Contact;