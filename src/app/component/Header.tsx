
const Header = () => {
    const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
        // e.preventDefault()
      }
    
  return (
    <div >
      
 <header >
      <section id="topBar1" className='bg-white'>
      <div className="container">
        
        <div className="flex justify-between gap-10 p-3">
            <ul className="flex gap-4">
        
        <li><a lang="bn" href="https://tripura.gov.in/" aria-label="ত্রিপুরা সরকার - External Regional Language Site that opens in a new window" title="ত্রিপুরা সরকার - External Regional Language Site that opens in a new window">
            ত্রিপুরা সরকার</a></li>
        <li><a lang="en" href="https://tripura.gov.in/">Government of Tripura</a></li>
        </ul>
     <ul className="flex">
      <li><a href="#SkipContent" className="skip-to-content" title="Skip to main content"><span className="icon-skip-to-main responsive-show"></span><strong className="pr-4">SKIP TO MAIN CONTENT</strong></a></li>
        <li className="pl-4">
          <a href="javascript:void(0);" title="Site Search" aria-label="Site Search" role="button" data-toggle="dropdown">
            <img className="show-con" src="https://unakoti.nic.in/wp-content/themes/district-theme-5/images/search-icon.png" title="Search Icon" alt="Search Icon" />
          </a>
         
        </li>
    
        </ul>
        </div>
            
         

             
         
              <hr/>
            
          
        </div>
    </section>
    
      </header>
    </div>
  )
}

export default Header
