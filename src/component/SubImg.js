import React from 'react';
import AnimatedWrap from "./AnimatedWrap";
import './SubImg.css';


const SubImg = () => {
    return (
        <div className="subImg_wrap">
            {/* <AnimatedWrap>
                <img src={require('../assets/images/sub_img1.png')}
                    width='100%'
                />
            </AnimatedWrap> */}
            <AnimatedWrap>
                <img src={require('../assets/images/flower.png')} width='10%'/>
            </AnimatedWrap>
            <AnimatedWrap>
                <div>
                    <p className="inviteMent">
                        우리 연우의 첫 생일에 초대합니다!
                        등등 인사말 
                    </p>
                    <p>
                        <br />
                        
                        {/* 6월의 신랑 신부<br />
                        현구, 유진 드림 */}
                    </p>
                </div>
            </AnimatedWrap>
        </div>        
    );
};

export default SubImg;