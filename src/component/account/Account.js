import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from 'react';
import './Account.css';
import Account_card from "./Account_card";



const Account = () => {
    return (
        <div className="account_wrap">
            <div className="f-l">마음 전하실 곳</div>
            <div className="account_btn_wrap">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <div>아빠</div>
                    </AccordionSummary>
                    <AccordionDetails id="accordion1">
                        <div>
                             <Account_card 
                                title='아빠'
                                bank='국민'
                                name='김민석'
                                account='697201-00-040706'
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="account_btn_wrap">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <div>엄마</div>
                    </AccordionSummary>
                    <AccordionDetails id="accordion1">
                        <div>                            
                            <Account_card 
                                title='엄마'
                                bank='국민'
                                name='김보경'
                                account='960102-01-412157'
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
};

export default Account;