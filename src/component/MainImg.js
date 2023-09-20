import React from 'react';
import './MainImg.css';

const MainImg = () => {
    return (
        <div className="main_img_wrap">
            <img className="main_img" 
                    src={require('../assets/images/main_img1.webp')}
                    width='100%'
            />
            <div className="subject_wrapper">
                
                    <div className="subject_wrapper_box1">
                        <div className="subject_wrapper_box2">
                            <div className="subject_date1">
                            <span className="subject_font">김민석</span> 
                            <span className="f-m"> 그리고</span>
                            <span className="subject_font"> 김보경</span></div>
                            <div className="subject_location">23. 10. 22. 일요일 오후 12시 00분</div>
                            <div className="subject_location">테이크호텔 4층 에이치가든</div>                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainImg;