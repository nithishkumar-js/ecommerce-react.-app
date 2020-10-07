import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="Footer_layout"  >
            <div className="container">
                <div className="row" >
                    <div className="col-sm" style={{marginTop:70}}>
                    <ul className="Footer_ul">
                        <li className="Footer_ul_li"><h5>CUSTOMER SERVICES</h5></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Help & Contact Us</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Returns & Refunds</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Online Stores</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Terms & Conditions</p></li>
                    </ul>
                    </div>
                    <div className="col-sm" style={{marginTop:70}}>
                    <ul className="Footer_ul">
                        <li className="Footer_ul_li"><h5>COMPANY</h5></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>What We Do</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Available Services</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Latest Posts</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>FAQs</p></li>
                    </ul>
                    </div>
                    <div className="col-sm" style={{marginTop:70}}>
                    <ul className="Footer_ul">
                        <li className="Footer_ul_li"><h5>SOCIAL MEDIA</h5></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Twitter</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Facebook</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Github</p></li>
                        <li className="Footer_ul_li"><p className='Footer_ul_li_p'>Pinterest</p></li>
                    </ul>
                    </div>
             </div>
             <div className="Footer_bottom_layout">
             <ul className="Footer_ul_bottom">
                 <li className="Footer_ul_li_bottom copy"><h6 className='Footer_ul_li_p'>Copyright @ 2020</h6></li>
                 <li className="Footer_ul_li_bottom"><h6 className='Footer_ul_li_p'>Developed by Nithish</h6></li>
                 <li className="Footer_ul_li_bottom"><h6 className='Footer_ul_li_p'>Design inspired by Bootstrap Theme</h6></li>
             </ul>
             </div>
         </div>
        </div>
    )
}

export default Footer
