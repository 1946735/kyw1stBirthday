import { Button, buttonBaseClasses } from "@mui/material";
import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import './Footer.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footer = ({template}) => {
    //ID 972424
    //let kakaoTemplateId = template == 'na' ? 93460 : 90482;
    let kakaoTemplateId = template == 'na' ? 98776 : 98778;
    //let kakaoTemplateId = 972424;
    
    function sendKakaoLink() {
        window.Kakao.Share.sendCustom({
            templateId: kakaoTemplateId,
            //templateId: 972424,
          });
    }
    
    return (
        <div className="footer_wrap">
            <span className="f-xs">Copyright © 2023 KMS</span>
            <div className="fix_button">
                <Button variant="contained"
                    startIcon={<RiKakaoTalkFill />}
                    color='kakao'
                    style={{
                        borderRadius: 50
                    }}
                    onClick={sendKakaoLink}
                >공유하기</Button>
            </div>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                limit={1}
                />
        </div>
    )
};

export default Footer;