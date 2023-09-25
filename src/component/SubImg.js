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
                        생일파티에 초대합니다!<br/>
                        사랑스러운 연우의 첫 생일에 좋은 분들과<br/>
                        함께하고 싶습니다. 바쁘시겠지만<br/>
                        부디 첫 생일잔치에 참석해주셔서<br/>
                        많은 축하와 응원 부탁드립니다<br/>
                    </p>
                    <p>
                        <br />
                        
                       아빠 김민석, 엄마 김보경 드림
                    </p>
                </div>
            </AnimatedWrap>
        </div>        
    );
};

export default SubImg;