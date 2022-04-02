import React from 'react'


export const Footer = (props) => {
  return (
    <footer class="page-footer font-small blue">

   
    <div class="footer-copyright text-center py-3 bg-light">© 2022 Copyright:&nbsp;
      <a href="/"> {props.footer_content}</a>
    </div>
  
  </footer>
    
    
  )
}
