import React, { useRef, useState } from 'react';
import Container from '../hoc/container';
import LocalImages from "../utils/images";
import NorButton from "../component/button";
import { Grid, TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function ContactUs() {

    const [institutionName, setInstitutionName] = useState(null)
    const [noOfBed, setNoOfBed] = useState(null)
    const [softName, setSoftName] = useState(null)
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [hometown, setHometown] = useState(null)
    const [issue, setIssue] = useState(null)
    const [role, setRole] = useState(null)

    const demoRequestRef = useRef(null)
    const messageRequestRef = useRef(null)
    const someThingElseRequestRef = useRef(null)

    const saveDemoRequest = () => {
        const demoRequest = {
            institutionName, noOfBed, softName, name, phone, email
        }
        /**
         * Use this for demo Request
         */
        console.log(demoRequest);
    }

    const setMessageRequest = () => {
        const messageRequest = {
            name, email, hometown, role
        }
        /**
         * Use this for message request
         */
        console.log(messageRequest);
    }
    const setSomethingElseRequest = () => {
        const someThingElseRequest = {
            name, email, institutionName, issue
        }
        /**
         * Use this for something else request
         */
        console.log(someThingElseRequest);
    }


    return (
        <Container hocClass="contact_mcontainer">
            <div className="contact_us_wrp">
                <div className="container">
                    <h1 className="hm_hd ct_tp_head">How can we help you?</h1>
                    <h2 className='hm_shd ct_tp_subhead'>Choose a category below to email the team so we can get back to you as quickly as possible</h2>
                    <ul className='contact_ls'>
                        <li className='active' onClick={() => demoRequestRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <div className="hdtp">
                                <i><img src={LocalImages.Demoim} alt="" /></i> Demo
                            </div>
                            <p>See Housing.Cloud in action and learn how modern housing
                                Management software can elevate your operations and increase student satisfaction</p>
                            <NorButton buttonText="Request a demo" imgPath={LocalImages.BlArimg} />
                        </li>
                        <li onClick={() => messageRequestRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <div className="hdtp">
                                <i><img src={LocalImages.Careersimg} alt="" /></i> Careers
                            </div>
                            <p>Join our growing team of student housing obsessives! Get on our list to learn about new roles as they are announced</p>
                            <NorButton buttonText="Work with us" imgPath={LocalImages.BlArimg} />
                        </li>
                        <li onClick={() => someThingElseRequestRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <div className="hdtp">
                                <i><img src={LocalImages.somthingImg} alt="" /></i> Something
                            </div>
                            <p>Let us know how else we can help</p>
                            <NorButton buttonText="Get support" imgPath={LocalImages.BlArimg} />
                        </li>
                    </ul>
                    <div ref={demoRequestRef} className="form_wrap_1 m-t-75 m-b-200">
                        <div className="form_cont">
                            <div className="frm_hd">Request a Demo</div>
                            <div className="frm_sbhd">See Housing.Cloud in action and learn how modern housing Management software can elevate your operations and increase student satisfaction</div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={7}>
                                    <div className="inp nmp">
                                        <label>Institution<br />Name</label>
                                        <TextField onChange={(e) => { setInstitutionName(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <div className="inp numb">
                                        <label>Number of beds <i>in your housing program</i></label>
                                        <TextField onChange={(e) => { setNoOfBed(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="inpara">
                                        What software,
                                        if any, are you using
                                        to manage housing operations?
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="inp">
                                        <label>Software name</label>
                                        <TextField onChange={(e) => { setSoftName(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12}><hr /></Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="inp">
                                        <label>Name</label>
                                        <TextField onChange={(e) => { setName(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="inp">
                                        <label>Phone</label>
                                        <TextField onChange={(e) => { setPhone(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="inp">
                                        <label>Email address</label>
                                        <TextField onChange={(e) => { setEmail(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                            </Grid>
                            <NorButton disabled={(institutionName && noOfBed && softName && name && phone && email) ? false : true} imgPath={LocalImages.BtnAr} onPress={saveDemoRequest} buttonText="Send request" className={'sub_stst red'} />
                        </div>
                        <figure className='rt_img'>
                            <img src={LocalImages.formimg1} alt="" className='desktopvw' />
                            <img src={LocalImages.formimg1mob} alt="" className='mobilevw' />
                        </figure>
                    </div>
                    <div ref={messageRequestRef} className="form_wrap_1 form_wrap_2 m-t-75 m-b-200">
                        <div className="form_cont">
                            <div className="frm_hd">Careers</div>
                            <div className="frm_sbhd">Join our growing team of student housing obsessives!
                                Get on our list to learn about new roles as they are announced</div>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className="inp">
                                        <label>Name</label>
                                        <TextField onChange={(e) => { setName(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="inp">
                                        <label>Email</label>
                                        <TextField onChange={(e) => { setEmail(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="inp">
                                        <label>Current hometown</label>
                                        <TextField onChange={(e) => { setHometown(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12}><hr /></Grid>
                                <Grid item xs={12}>
                                    <div className="inp">
                                        <label>Role Type</label>
                                        <RadioGroup className='radio_grp_wrp' onChange={(e) => { setRole(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                            <FormControlLabel value="Engineering" control={<Radio />} label="Engineering" />
                                            <FormControlLabel value="Client Success" control={<Radio />} label="Client Success" />
                                            <FormControlLabel value="Marketing" control={<Radio />} label="Marketing" />
                                            <FormControlLabel value="Business Development" control={<Radio />} label="Business Development" />
                                            <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
                                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </div>
                                </Grid>
                            </Grid>
                            <NorButton disabled={(name && email && hometown && role) ? false : true} imgPath={LocalImages.BtnAr} onPress={setMessageRequest} buttonText="Send message" className={'sub_stst blue'} />
                        </div>
                        <figure className='rt_img'>
                            <img src={LocalImages.formimg2} alt="" className='desktopvw' />
                            <img src={LocalImages.formimg2mob} alt="" className='mobilevw' />
                        </figure>
                    </div>
                    <div ref={someThingElseRequestRef} className="form_wrap_1 form_wrap_2 form_wrap_3 m-t-75 m-b-200">
                        <div className="form_cont">
                            <div className="frm_hd">Something else</div>
                            <div className="frm_sbhd">Let us know how else we can help</div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <div className="inp">
                                        <label>Name</label>
                                        <TextField onChange={(e) => { setName(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <div className="inp">
                                        <label>Email</label>
                                        <TextField onChange={(e) => { setEmail(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <div className="inp">
                                        <label>Institution / Company</label>
                                        <TextField onChange={(e) => { setInstitutionName(e.target.value) }} variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={12}><hr /></Grid>
                                <Grid item xs={12}>
                                    <div className="inp">
                                        <label>Issue</label>
                                        <textarea onChange={(e) => { setIssue(e.target.value) }} cols="30" rows="6"></textarea>
                                    </div>
                                </Grid>
                            </Grid>
                            <NorButton disabled={(name && email && institutionName && issue) ? false : true} imgPath={LocalImages.BtnAr} onPress={setSomethingElseRequest} buttonText="Send message" className={'sub_stst purple'} />
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    )
}

export default ContactUs